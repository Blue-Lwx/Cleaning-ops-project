// ═══════════════════════════════════════════════════════
//  CleanOps Academy — Mission Data
//  src/game/data/missions.ts
// ═══════════════════════════════════════════════════════
//
//  To add a new mission, create an entry in MISSIONS below.
//  The game engine reads mission data at runtime.

import type { Mission } from '../types';
import { WINDOW_ITEMS } from './items';
import { WINDOW_QUESTIONS } from './questions';

export const MISSION_WINDOW_CLEANING: Mission = {
  id: 'window_cleaning_v1',
  title: 'Window Cleaning Training Mission',
  objective: 'Choose the correct product and tool, then clean the window.',
  correctItems: ['glass_cleaner', 'microfiber_cloth'],
  passingScore: 80,
  totalPoints: 100,
  questions: WINDOW_QUESTIONS,
  items: WINDOW_ITEMS,
  targets: [
    {
      id: 'window_main',
      label: 'Office Window',
      requiredItems: ['glass_cleaner', 'microfiber_cloth'],
      pos: [3, 1.7, -3.6],
      interactRadius: 2.2,
    }
  ]
};

// ─── FUTURE MISSIONS (add here) ───────────────────────
// export const MISSION_WASHROOM: Mission = { ... }
// export const MISSION_FLOOR_MOPPING: Mission = { ... }
// export const MISSION_KITCHEN_SANITATION: Mission = { ... }
// export const MISSION_DISINFECTION: Mission = { ... }
// export const MISSION_PPE_SELECTION: Mission = { ... }

export const MISSIONS: Mission[] = [
  MISSION_WINDOW_CLEANING,
  // add future missions here
];

export function getMissionById(id: string): Mission | undefined {
  return MISSIONS.find(m => m.id === id);
}
