// ═══════════════════════════════════════════════════════
//  CleanOps Academy — Type Definitions
//  src/game/types.ts
// ═══════════════════════════════════════════════════════

export type ItemShape = 'bottle' | 'cloth' | 'mop' | 'bag' | 'roll' | 'box';
export type ItemCategory = 'Product' | 'Tool' | 'Supply';
export type MissionPhase =
  | 'start'
  | 'briefing'
  | 'explore'
  | 'question'
  | 'action'
  | 'feedback'
  | 'result';

export interface GameItem {
  id: string;
  name: string;
  category: ItemCategory;
  icon: string;
  color: number;              // hex int for Three.js
  desc: string;
  correctForMission: boolean;
  shape: ItemShape;
  pos: [number, number, number];
  scale: [number, number, number];
}

export interface TrainingQuestion {
  id: string;
  text: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  points: number;
}

export interface CleaningTarget {
  id: string;
  label: string;
  requiredItems: string[];   // item ids
  pos: [number, number, number];
  interactRadius: number;
}

export interface FeedbackRule {
  condition: (inv: string[], wrong: string[]) => boolean;
  title: string;
  message: string;
  icon: string;
  success: boolean;
}

export interface ScoreBreakdown {
  product: number;
  tool: number;
  wrongAvoided: number;
  quiz: number;
  action: number;
}

export interface MissionAttempt {
  missionId: string;
  score: number;
  pass: boolean;
  selectedItems: string[];
  wrongItems: string[];
  timeSeconds: number;
  completedAt: string;
  // future Supabase fields:
  userId?: string;
  companyId?: string;
}

export interface Mission {
  id: string;
  title: string;
  objective: string;
  correctItems: string[];
  passingScore: number;
  totalPoints: number;
  questions: TrainingQuestion[];
  items: GameItem[];
  targets: CleaningTarget[];
}

export interface GameState {
  phase: MissionPhase;
  inventory: string[];
  score: number;
  scoreBreakdown: ScoreBreakdown;
  currentQuestion: number;
  quizAnswered: { id: string; correct: boolean; chosen: number }[];
  quizCorrect: number;
  wrongItemsPicked: string[];
  missionStartTime: number | null;
  missionEndTime: number | null;
  inspectedItem: string | null;
  nearWindow: boolean;
  windowCleaned: boolean;
  pointerLocked: boolean;
  gameStarted: boolean;
}
