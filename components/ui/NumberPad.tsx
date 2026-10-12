import { Pressable, Text, View } from "react-native";

type Props = {
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  onSubmit: () => void;
  /** A „Kész" gomb le van tiltva (pl. még nincs beírt szám). */
  submitDisabled?: boolean;
  disabled?: boolean;
};

const ROWS = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

type KeyProps = { label: string; onPress: () => void; disabled?: boolean; accent?: boolean; accessibilityLabel?: string };

function Key({ label, onPress, disabled, accent, accessibilityLabel }: KeyProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={onPress}
      className={`h-[68px] flex-1 items-center justify-center rounded-card border-2 ${
        accent ? "border-primary bg-primary" : "border-secondary/40 bg-surface"
      } ${disabled ? "opacity-40" : ""}`}
      style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.95 : 1 }] })}
    >
      <Text className={`font-title text-[28px] ${accent ? "text-surface" : "text-text"}`}>{label}</Text>
    </Pressable>
  );
}

export function NumberPad({ onDigit, onBackspace, onSubmit, submitDisabled = false, disabled = false }: Props) {
  return (
    <View className="w-full max-w-[360px] gap-3">
      {ROWS.map((row) => (
        <View key={row.join()} className="flex-row gap-3">
          {row.map((digit) => (
            <Key key={digit} label={digit} disabled={disabled} onPress={() => onDigit(digit)} />
          ))}
        </View>
      ))}
      <View className="flex-row gap-3">
        <Key label="⌫" accessibilityLabel="Törlés" disabled={disabled} onPress={onBackspace} />
        <Key label="0" disabled={disabled} onPress={() => onDigit("0")} />
        <Key label="Kész" accent disabled={disabled || submitDisabled} onPress={onSubmit} />
      </View>
    </View>
  );
}
