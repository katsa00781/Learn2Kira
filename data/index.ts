import type { Exercise, SubjectId, Topic } from '@/types/exercise';

import { nyelvtanTopics, nyelvtanExercises } from './nyelvtan';
import { helyesirasTopics, helyesirasExercises } from './helyesiras';
import { matekTopics, matekExercises } from './matek';
import { kornyezetTopics, kornyezetExercises } from './kornyezet';

export type Subject = {
  id: SubjectId;
  title: string;
  /** false → a kártya látszik, de "hamarosan" állapotban van */
  available: boolean;
};

export const subjects: Subject[] = [
  { id: 'nyelvtan', title: 'Nyelvtan', available: true },
  { id: 'helyesiras', title: 'Helyesírás', available: true },
  { id: 'matek', title: 'Matek', available: true },
  { id: 'kornyezet', title: 'Környezet', available: true },
];

export const allTopics: Topic[] = [
  ...nyelvtanTopics,
  ...helyesirasTopics,
  ...matekTopics,
  ...kornyezetTopics,
];

export const allExercises: Exercise[] = [
  ...nyelvtanExercises,
  ...helyesirasExercises,
  ...matekExercises,
  ...kornyezetExercises,
];

export const topicsBySubject = (subject: SubjectId): Topic[] =>
  allTopics.filter((t) => t.subject === subject).sort((a, b) => a.order - b.order);

export const exercisesByTopic = (topicId: string): Exercise[] =>
  allExercises.filter((e) => e.topicId === topicId);

export const topicById = (topicId: string): Topic | undefined =>
  allTopics.find((t) => t.id === topicId);

export {
  nyelvtanTopics,
  nyelvtanExercises,
  helyesirasTopics,
  helyesirasExercises,
  matekTopics,
  matekExercises,
  kornyezetTopics,
  kornyezetExercises,
};
