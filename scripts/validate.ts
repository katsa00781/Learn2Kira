import { allExercises, allTopics, subjects, exercisesByTopic, topicsBySubject } from '../data';

const errors: string[] = [];
const warnings: string[] = [];
const ids = new Set<string>();

/**
 * Kis kifejezés-kiértékelő a numeric-input feladatok ellenőrzéséhez.
 * Ha a kérdés tiszta számtani kifejezés, kiszámoljuk és összevetjük a megadott
 * válasszal — így egy elgépelt szorzat build-time kiderül, nem Kira előtt.
 * Szöveges feladatoknál (szavak vannak benne) nincs mit ellenőrizni, azokat
 * kihagyja.
 */
const ARITH = /^[\d\s+\-*/()×:?=−]+$/;

const evalExpr = (src: string): number | null => {
  const s = src.replace(/×/g, '*').replace(/:/g, '/').replace(/−/g, '-');
  let i = 0;
  const ws = () => {
    while (i < s.length && s[i] === ' ') i++;
  };
  const num = (): number | null => {
    ws();
    if (s[i] === '(') {
      i++;
      const v = expr();
      ws();
      if (s[i] !== ')') return null;
      i++;
      return v;
    }
    const start = i;
    while (i < s.length && s[i]! >= '0' && s[i]! <= '9') i++;
    return i === start ? null : Number(s.slice(start, i));
  };
  const term = (): number | null => {
    let v = num();
    if (v === null) return null;
    for (;;) {
      ws();
      const op = s[i];
      if (op !== '*' && op !== '/') return v;
      i++;
      const r = num();
      if (r === null) return null;
      if (op === '/' && (r === 0 || v % r !== 0)) return null;
      v = op === '*' ? v * r : v / r;
    }
  };
  const expr = (): number | null => {
    let v = term();
    if (v === null) return null;
    for (;;) {
      ws();
      const op = s[i];
      if (op !== '+' && op !== '-') return v;
      i++;
      const r = term();
      if (r === null) return null;
      v = op === '+' ? v + r : v - r;
    }
  };
  const v = expr();
  ws();
  return i === s.length ? v : null;
};

/** Visszaadja a kiszámolt értéket, vagy null-t, ha a kérdés nem ellenőrizhető. */
const checkArithmetic = (question: string, answer: number): number | null => {
  // A "(hányados)" típusú szöveges utótagot levágjuk — de csak ha NINCS benne
  // számjegy, különben a "6 × (10 − 4)" zárójelét is levágná, és a feladat
  // csendben kimaradna az ellenőrzésből.
  const q = question.replace(/\s*\([^\d()]*\)\s*$/, '').trim();
  if (!ARITH.test(q)) return null;
  if (q.includes('=')) {
    const parts = q.split('=');
    if (parts.length !== 2) return null;
    const left = evalExpr(parts[0]!.replace(/\?/g, String(answer)));
    const right = evalExpr(parts[1]!.replace(/\?/g, String(answer)));
    if (left === null || right === null) return null;
    return left === right ? answer : NaN;
  }
  if (q.includes('?')) return null;
  return evalExpr(q);
};

for (const e of allExercises) {
  if (ids.has(e.id)) errors.push(`Duplikalt ID: ${e.id}`);
  ids.add(e.id);

  if (!allTopics.some((t) => t.id === e.topicId))
    errors.push(`${e.id}: ismeretlen topicId (${e.topicId})`);

  switch (e.type) {
    case 'missing-letter':
      if (!e.options.includes(e.answer))
        errors.push(`${e.id}: a valasz "${e.answer}" nincs az opciok kozott`);
      if (new Set(e.options).size !== e.options.length)
        errors.push(`${e.id}: ismetlodo opcio`);
      break;

    case 'multiple-choice':
      if (e.answerIndex < 0 || e.answerIndex >= e.options.length)
        errors.push(`${e.id}: hibas answerIndex (${e.answerIndex}/${e.options.length})`);
      if (new Set(e.options).size !== e.options.length)
        errors.push(`${e.id}: ismetlodo opcio`);
      if (e.options.length < 2) errors.push(`${e.id}: kevesebb mint 2 opcio`);
      break;

    case 'sort-into-groups': {
      for (const it of e.items)
        if (!e.groups.includes(it.group))
          errors.push(`${e.id}: "${it.text}" ismeretlen csoportba kerult (${it.group})`);
      const used = new Set(e.items.map((i) => i.group));
      for (const g of e.groups) if (!used.has(g)) errors.push(`${e.id}: a "${g}" csoport ures`);
      if (new Set(e.items.map((i) => i.text)).size !== e.items.length)
        errors.push(`${e.id}: ismetlodo elem`);
      // szofaji szakszavak tiltasa: a tankonyv harmadikban nem hasznalja oket
      for (const g of e.groups)
        if (/^(fonev|ige|mellieknev|melleknev|szamnev|főnév|ige|melléknév|számnév)$/i.test(g))
          errors.push(`${e.id}: "${g}" szofaji szakszo — a tankonyv elnevezeset hasznald`);
      break;
    }

    case 'order-items': {
      const a = [...e.items].sort();
      const b = [...e.correctOrder].sort();
      if (JSON.stringify(a) !== JSON.stringify(b))
        errors.push(`${e.id}: items es correctOrder nem ugyanaz a halmaz`);
      if (JSON.stringify(e.items) === JSON.stringify(e.correctOrder))
        errors.push(`${e.id}: a megjelenitett sorrend mar helyes`);
      break;
    }

    case 'punctuation':
      if (!e.options.includes(e.answer))
        errors.push(`${e.id}: a valasz "${e.answer}" nincs az opciok kozott`);
      if (/[.?!]$/.test(e.sentence))
        errors.push(`${e.id}: a mondat mar tartalmaz vegi irasjelet`);
      break;

    case 'numeric-input': {
      if (!Number.isFinite(e.answer)) errors.push(`${e.id}: a valasz nem szam`);
      if (e.tolerance !== undefined && e.tolerance < 0)
        errors.push(`${e.id}: negativ tolerance`);
      if (!e.question.trim()) errors.push(`${e.id}: ures kerdes`);
      const computed = checkArithmetic(e.question, e.answer);
      if (computed !== null && !Number.isNaN(computed) && computed !== e.answer)
        errors.push(`${e.id}: "${e.question}" = ${computed}, de a megadott valasz ${e.answer}`);
      if (Number.isNaN(computed))
        errors.push(`${e.id}: "${e.question}" nem jon ki a megadott valasszal (${e.answer})`);
      if (e.topicId.startsWith('matek-') && Math.abs(e.answer) > 1000)
        warnings.push(`${e.id}: a valasz ${e.answer} kivul van az 1000-es szamkoron`);
      break;
    }

    case 'match-pairs': {
      if (e.pairs.length < 2) errors.push(`${e.id}: kevesebb mint 2 par`);
      if (new Set(e.pairs.map((p) => p.left)).size !== e.pairs.length)
        errors.push(`${e.id}: ismetlodo bal oldali elem`);
      if (new Set(e.pairs.map((p) => p.right)).size !== e.pairs.length)
        errors.push(`${e.id}: ismetlodo jobb oldali elem`);
      for (const p of e.pairs)
        if (p.left === p.right) errors.push(`${e.id}: "${p.left}" onmagaval van parositva`);
      break;
    }
  }
}

// valodi duplikatum: ugyanaz a kerdes UGYANAZOKKAL az opciokkal.
// A "Melyik irasmod helyes?" tipusu kerdes jogosan ismetlodik mas opciokkal,
// ezert az opciok is a kulcs reszei.
const seenQ = new Map<string, string>();
for (const e of allExercises) {
  let key: string | null = null;
  if (e.type === 'multiple-choice') key = `${e.question}||${e.options.join('|')}`;
  else if (e.type === 'numeric-input') key = e.question;
  else if (e.type === 'punctuation') key = e.sentence;
  else if (e.type === 'missing-letter') key = `${e.before}_${e.after}|${e.options.join('|')}`;
  if (key === null) continue;
  const full = `${e.topicId}||${key}`;
  const prev = seenQ.get(full);
  if (prev) errors.push(`${e.id}: szo szerint ugyanaz a feladat, mint ${prev}`);
  else seenQ.set(full, e.id);
}

// temakor-szintu ellenorzesek
const topicIds = new Set<string>();
for (const t of allTopics) {
  if (topicIds.has(t.id)) errors.push(`Duplikalt temakor ID: ${t.id}`);
  topicIds.add(t.id);
  const n = exercisesByTopic(t.id).length;
  if (n === 0) errors.push(`${t.id}: nincs hozza feladat`);
  else if (n < 10) warnings.push(`${t.id}: csak ${n} feladat (a Leitnerhez keves)`);
  if (!subjects.some((s) => s.id === t.subject))
    errors.push(`${t.id}: ismeretlen tantargy (${t.subject})`);
}

// a tankonyvi oldalszam es a sorrend egyezzen
for (const s of subjects) {
  const list = topicsBySubject(s.id).filter((t) => t.book !== undefined);
  for (let i = 1; i < list.length; i++) {
    if (list[i]!.book! < list[i - 1]!.book!)
      errors.push(`${list[i]!.id}: a sorrend nem koveti a tankonyvi oldalszamot`);
  }
}

const byType = allExercises.reduce<Record<string, number>>((acc, e) => {
  acc[e.type] = (acc[e.type] ?? 0) + 1;
  return acc;
}, {});

for (const s of subjects) {
  const list = topicsBySubject(s.id);
  if (list.length === 0) {
    console.log(`\n=== ${s.title} — nincs tartalom (hamarosan) ===`);
    continue;
  }
  const total = list.reduce((sum, t) => sum + exercisesByTopic(t.id).length, 0);
  console.log(`\n=== ${s.title} — ${total} feladat ===`);
  for (const t of list) {
    const page = t.book ? `o.${String(t.book).padStart(3)}` : '      ';
    console.log(`${String(exercisesByTopic(t.id).length).padStart(4)}  ${page}  ${t.title}`);
  }
}

console.log('\n--- Feladattipusonkent ---');
for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1]))
  console.log(String(v).padStart(4), k);
console.log('\nOsszesen:', allExercises.length, 'feladat,', allTopics.length, 'temakor');

if (warnings.length) {
  console.log('\n--- Figyelmeztetes ---');
  warnings.forEach((w) => console.log('FIGYELEM ' + w));
}
console.log('\n--- Ellenorzes ---');
if (errors.length === 0) console.log('OK, nincs hiba.');
else {
  errors.forEach((e) => console.log('HIBA ' + e));
  process.exit(1);
}
