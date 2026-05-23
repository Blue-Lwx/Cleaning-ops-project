// ═══════════════════════════════════════════════════════
//  CleanOps Academy — Storage / Supabase Placeholder
//  src/lib/supabasePlaceholder.ts
// ═══════════════════════════════════════════════════════
//
//  This file handles mission attempt persistence.
//  Currently saves to localStorage.
//  Replace the Supabase section when ready to go live.

import type { MissionAttempt } from '../game/types';

const LOCAL_KEY = 'cleanops_attempts';

// ─── LOCAL STORAGE ────────────────────────────────────

export function saveAttemptLocal(attempt: MissionAttempt): void {
  try {
    const existing = loadAttemptsLocal();
    existing.unshift(attempt);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch (e) {
    console.warn('[CleanOps] localStorage save failed:', e);
  }
}

export function loadAttemptsLocal(): MissionAttempt[] {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  } catch {
    return [];
  }
}

export function clearAttemptsLocal(): void {
  localStorage.removeItem(LOCAL_KEY);
}

// ─── SUPABASE (future) ────────────────────────────────
//
//  When ready:
//  1. npm install @supabase/supabase-js
//  2. Create a .env file:
//       VITE_SUPABASE_URL=https://your-project.supabase.co
//       VITE_SUPABASE_ANON_KEY=your-anon-key
//  3. Uncomment the code below and replace saveAttemptLocal calls
//     with saveMissionAttempt.

/*
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function saveMissionAttempt(attempt: MissionAttempt & {
  userId?: string;
  companyId?: string;
}): Promise<void> {
  // Always save locally first as backup
  saveAttemptLocal(attempt);

  try {
    const { error } = await supabase.from('mission_attempts').insert({
      user_id:        attempt.userId,
      company_id:     attempt.companyId,
      mission_id:     attempt.missionId,
      score:          attempt.score,
      pass_fail:      attempt.pass,
      selected_items: attempt.selectedItems,
      wrong_items:    attempt.wrongItems,
      time_seconds:   attempt.timeSeconds,
      completed_at:   attempt.completedAt,
    });
    if (error) throw error;
  } catch (e) {
    console.warn('[CleanOps] Supabase save failed, stored locally:', e);
  }
}
*/

// Active export — swaps to Supabase when ready
export async function saveMissionAttempt(attempt: MissionAttempt): Promise<void> {
  saveAttemptLocal(attempt);
  // TODO: replace with Supabase call above
}
