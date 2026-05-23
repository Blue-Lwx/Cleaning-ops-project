// ═══════════════════════════════════════════════════════
//  CleanOps Academy — Questions Data
//  src/game/data/questions.ts
// ═══════════════════════════════════════════════════════

import type { TrainingQuestion } from '../types';

export const WINDOW_QUESTIONS: TrainingQuestion[] = [
  {
    id: 'q1',
    text: 'What product should you use to clean a window?',
    choices: [
      'A. Floor cleaner',
      'B. Glass cleaner',
      'C. Garbage bag',
      'D. Mop',
    ],
    correctIndex: 1,
    explanation:
      'Glass cleaner is specifically formulated for glass surfaces and leaves a streak-free finish. ' +
      'Floor cleaner is too harsh and not designed for windows.',
    points: 10,
  },
  {
    id: 'q2',
    text: 'What tool should you use with glass cleaner on a window?',
    choices: [
      'A. Microfiber cloth',
      'B. Mop',
      'C. Garbage bag',
      'D. Paper towel roll',
    ],
    correctIndex: 0,
    explanation:
      'A microfiber cloth is the correct tool. It is gentle on glass and picks up cleaning product ' +
      'without leaving lint or scratches.',
    points: 10,
  },
  {
    id: 'q3',
    text: 'You picked disinfectant spray for the window. Is this the best choice?',
    choices: [
      'A. Yes, disinfectant works on all surfaces',
      'B. No, glass cleaner is the correct product',
    ],
    correctIndex: 1,
    explanation:
      'Disinfectant spray is designed for high-touch surfaces, not glass. ' +
      'For windows, always use glass cleaner for a streak-free, professional result.',
    points: 0, // bonus question, no score impact in MVP
  },
];
