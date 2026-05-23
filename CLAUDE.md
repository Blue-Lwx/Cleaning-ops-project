# CleanOps Academy — Developer Instructions

## Role
Senior developer working on a first-person 3D workplace training simulator.
Stack: React, TypeScript, Three.js, React Three Fiber, Zustand, Tailwind, Supabase.

## Core Philosophy
- This is NOT a quiz app and NOT a static training page.
- The player learns by doing.
- Do not remove existing working features.
- Inspect the current project before changing code.
- Do not overbuild — make the scenario system work first, then connect to room/game logic.

## Gameplay Loop (every mission)
1. Read a cleaning task.
2. Walk around a 3D room in first-person view.
3. Pick up the correct products/tools.
4. Walk to the correct target area.
5. Use the product/tool on that area.
6. Receive immediate right/wrong feedback.
7. Get a score and pass/fail result.

---

## TypeScript Data Structures

### Mission
```ts
interface Mission {
  missionId: string;
  missionName: string;
  roomType: 'classroom' | 'bathroom' | 'kitchen' | 'hallway';
  missionPrompt: string;
  learningGoal: string;
  correctProducts: string[];   // itemIds
  correctTools: string[];      // itemIds
  wrongProducts: string[];     // itemIds shown as distractors
  targetAreas: string[];       // targetIds
  requiredSteps: RequiredStep[];
  feedbackRules: FeedbackRule[];
  scoringRules: ScoringRule[];
  passScore: number;
}
```

### GameItem
```ts
interface GameItem {
  itemId: string;
  itemName: string;
  category: 'product' | 'tool' | 'supply' | 'PPE' | 'safety';
  description: string;
  roomTypes: RoomType[];       // which rooms this item appears in
  visualType: string;          // shape key for 3D renderer
  isCarryable: boolean;
}
```

### CleaningTarget
```ts
interface CleaningTarget {
  targetId: string;
  targetName: string;
  roomType: RoomType;
  description: string;
  acceptedProducts: string[];
  acceptedTools: string[];
  requiredSteps: string[];
}
```

### PlayerAction
```ts
interface PlayerAction {
  actionId: string;
  actionType: 'pickup' | 'drop' | 'use' | 'place';
  itemId: string;
  targetId?: string;
  timestamp: number;
  isCorrect: boolean;
  feedbackMessage: string;
}
```

### MissionAttempt
```ts
interface MissionAttempt {
  missionId: string;
  selectedItems: string[];
  correctItems: string[];
  wrongItems: string[];
  actionsCompleted: PlayerAction[];
  wrongActions: PlayerAction[];
  score: number;
  passed: boolean;
  timeSeconds: number;
  completedAt: string;
}
```

### ScoreResult
```ts
interface ScoreResult {
  score: number;
  passed: boolean;
  correctItems: string[];
  wrongItems: string[];
  wrongActions: PlayerAction[];
  feedbackSummary: string;
}
```

---

## Shared Product / Tool Database

| itemId | name | category | visualType | description |
|---|---|---|---|---|
| glass_cleaner | Glass Cleaner | product | blue_spray_bottle | For cleaning glass, mirrors, and windows. |
| microfiber_cloth | Microfiber Cloth | tool | folded_cloth | For cleaning glass and smooth surfaces without scratching. |
| all_purpose_cleaner | All-Purpose Cleaner | product | spray_bottle | For general surface cleaning. |
| disinfectant | Disinfectant | product | spray_bottle_alt | For disinfecting high-touch surfaces. |
| food_safe_sanitizer | Food-Safe Sanitizer | product | sanitizer_bottle | For sanitizing food-contact surfaces. |
| floor_cleaner | Floor Cleaner | product | large_bottle | For cleaning floors. |
| degreaser | Degreaser | product | heavy_bottle | For greasy kitchen surfaces and floors. |
| toilet_bowl_cleaner | Toilet Bowl Cleaner | product | angled_bottle | Used only for toilet bowls. |
| toilet_brush | Toilet Brush | tool | toilet_brush | For scrubbing inside toilet bowls. |
| mop | Mop | tool | mop | For mopping floors. |
| mop_bucket | Mop Bucket | tool | bucket | Used with mop for floor cleaning. |
| broom | Broom | tool | broom | For sweeping dry debris. |
| dustpan | Dustpan | tool | dustpan | Used with broom to collect debris. |
| garbage_bag | Garbage Bag | supply | black_bag | For waste removal. |
| gloves | Gloves | PPE | disposable_gloves | To protect hands during cleaning. |
| wet_floor_sign | Wet Floor Sign | safety | yellow_sign | To warn others that the floor is wet. |
| paper_towel | Paper Towel | supply | paper_roll | For wiping spills or drying surfaces. |
| cleaning_cloth | Cleaning Cloth | tool | cloth | For general surface cleaning. |

---

## Shared Target Database

**Classroom:** classroom_window, classroom_table, classroom_floor, classroom_bin, classroom_door_handle, classroom_light_switch, classroom_chairs

**Bathroom:** bathroom_sink, toilet, bathroom_floor, bathroom_mirror, bathroom_door_handle, paper_towel_dispenser, soap_dispenser

**Kitchen:** kitchen_counter, food_prep_surface, kitchen_sink, kitchen_floor, kitchen_bin, kitchen_door_handle

**Hallway:** hallway_spill, hallway_floor, handrail, hallway_door_handle, hallway_light_switch, elevator_button, hallway_bin

---

## Scenarios

### Scenario 1 — Classroom Window Cleaning
- **Room:** classroom
- **Prompt:** "Clean the classroom window. Choose the correct product and tool, then use them on the window."
- **Correct:** glass_cleaner + microfiber_cloth → classroom_window
- **Wrong feedback:**
  - mop → "A mop is used for floors, not windows."
  - floor_cleaner → "Floor cleaner is for floors, not glass."
  - disinfectant → "Disinfectant is for high-touch surfaces, not the best product for glass."
  - garbage_bag → "Garbage bags are for waste removal."

### Scenario 2 — Classroom Table Cleaning
- **Room:** classroom
- **Prompt:** "Clean and disinfect the classroom table after activities."
- **Correct:** gloves + cleaning_cloth + all_purpose_cleaner + disinfectant → classroom_table
- **Required order:** clean first, then disinfect
- **Success:** "Correct. Tables should be cleaned first, then disinfected."
- **Wrong feedback:**
  - glass_cleaner → "Glass cleaner is for glass, not classroom tables."
  - floor_cleaner → "Floor cleaner is not intended for table surfaces."
  - disinfect before clean → "Clean visible dirt first, then disinfect."
  - mop → "A mop is for floors, not tables."

### Scenario 3 — Bathroom Sink Cleaning
- **Room:** bathroom
- **Prompt:** "Clean and disinfect the bathroom sink."
- **Correct:** gloves + all_purpose_cleaner + disinfectant + cleaning_cloth → bathroom_sink
- **Success:** "Correct. Bathroom sinks need cleaning and disinfecting, especially faucet handles."
- **Wrong feedback:**
  - no gloves → "Gloves should be worn when cleaning bathroom areas."
  - mop → "A mop is used for floors, not sink surfaces."
  - glass_cleaner → "Glass cleaner is not correct for bathroom sink cleaning."

### Scenario 4 — Toilet Cleaning
- **Room:** bathroom
- **Prompt:** "Clean the toilet safely and correctly."
- **Correct:** gloves + toilet_bowl_cleaner + toilet_brush + disinfectant + cleaning_cloth → toilet
- **Success:** "Correct. Toilet bowl cleaner and brush inside the bowl; disinfectant on high-touch surfaces."
- **Wrong feedback:**
  - glass_cleaner → "Glass cleaner is not suitable for toilet cleaning."
  - broom → "A broom is for dry floor debris, not toilet cleaning."
  - no gloves → "Gloves are required for toilet cleaning."
  - cross-contamination cloth → "Toilet cleaning cloths should not be used on other surfaces."

### Scenario 5 — Bathroom Floor Mopping
- **Room:** bathroom
- **Prompt:** "Mop the bathroom floor."
- **Correct:** wet_floor_sign + gloves + mop + mop_bucket + floor_cleaner → bathroom_floor
- **Required order:** place wet_floor_sign before mopping
- **Success:** "Correct. Always place a wet floor sign before mopping to reduce slip hazards."
- **Wrong feedback:**
  - no wet_floor_sign → "A wet floor sign should be placed before mopping."
  - glass_cleaner → "Glass cleaner is not used for floors."
  - toilet_brush → "A toilet brush is only for toilet bowls."

### Scenario 6 — Kitchen Counter Cleaning
- **Room:** kitchen
- **Prompt:** "Clean and sanitize the commercial kitchen counter."
- **Correct:** gloves + all_purpose_cleaner + cleaning_cloth + food_safe_sanitizer → kitchen_counter
- **Required order:** clean first, then sanitize
- **Success:** "Correct. Food prep surfaces should be cleaned first, then sanitized with food-safe sanitizer."
- **Wrong feedback:**
  - toilet_bowl_cleaner → "Toilet cleaner must never be used on food prep surfaces."
  - floor_cleaner → "Floor cleaner is not safe for kitchen counters."
  - glass_cleaner → "Glass cleaner is not correct for food-contact surfaces."
  - sanitize before clean → "Remove visible dirt before sanitizing."

### Scenario 7 — Kitchen Floor Cleaning
- **Room:** kitchen
- **Prompt:** "Clean the commercial kitchen floor after food service."
- **Correct:** wet_floor_sign + broom + dustpan + mop + mop_bucket + (degreaser or floor_cleaner) → kitchen_floor
- **Required order:** sign → sweep → mop
- **Success:** "Correct. Kitchen floors need sweeping first, then a floor cleaner or degreaser for grease."
- **Wrong feedback:**
  - no wet_floor_sign → "Always place a wet floor sign before mopping."
  - glass_cleaner → "Glass cleaner is not for floors."
  - food_safe_sanitizer only → "Food sanitizer is for food-contact surfaces, not floor cleaning."
  - skip sweeping → "Loose debris should be removed before mopping."

### Scenario 8 — Hallway Spill Response
- **Room:** hallway
- **Prompt:** "There is a spill in the hallway. Make the area safe and clean it."
- **Correct:** wet_floor_sign + gloves + paper_towel + mop + floor_cleaner → hallway_spill
- **Required order:** place wet_floor_sign first
- **Success:** "Correct. First make the area safe with a wet floor sign, then clean the spill."
- **Wrong feedback:**
  - no wet_floor_sign → "The spill area must be marked first to prevent slips."
  - broom → "A broom is not effective for liquid spills."
  - glass_cleaner → "Glass cleaner is not used for hallway spills."

### Scenario 9 — Hallway High-Touch Disinfection
- **Room:** hallway
- **Prompt:** "Disinfect high-touch points in the hallway."
- **Correct:** gloves + disinfectant + cleaning_cloth → [hallway_door_handle, hallway_light_switch, handrail, elevator_button]
- **Success:** "Correct. High-touch points should be disinfected because many people touch them throughout the day."
- **Wrong feedback:**
  - mop → "A mop is for floors, not hand-contact surfaces."
  - floor_cleaner → "Floor cleaner is not for high-touch disinfection."
  - garbage_bag → "Garbage bags are for waste removal."
  - no gloves → "Gloves should be used when handling disinfectant."

### Scenario 10 — Garbage Removal
- **Room:** classroom
- **Prompt:** "Remove classroom garbage safely."
- **Correct:** gloves + garbage_bag → classroom_bin
- **Required order:** wear gloves → remove bag → replace liner
- **Success:** "Correct. Gloves and a garbage bag are needed to remove waste safely and replace the liner."
- **Wrong feedback:**
  - no gloves → "Gloves should be worn when handling garbage."
  - glass_cleaner → "Glass cleaner is not used for garbage removal."
  - mop → "A mop is used for floors."
  - disinfectant only → "You still need to remove the garbage and replace the bag."

---

## Scoring System

**Base score:** 100

| Penalty | Points |
|---|---|
| Wrong item picked | -10 |
| Wrong target attempted | -10 |
| Missing required item | -20 |
| Wrong step order | -15 |
| Missing required PPE (e.g. gloves) | -15 |
| Missing wet floor sign when required | -20 |

**Passing score:** 80 (configurable per mission via `passScore`)

---

## Gameplay Rules (system must check)
1. Did the player select the required products/tools?
2. Did the player use them on the correct target?
3. Did the player complete required steps in the correct order (if applicable)?
4. Did the player pick wrong items?
5. Did the player attempt the wrong target?
6. Show feedback immediately on each action.
7. Show final score and pass/fail at the end.

Additional features:
- Player can drop/remove wrong items from inventory.
- Player can inspect items (description card appears when close).

---

## UI Requirements

Screens/panels to implement:
- **Mission selection screen** — list of available missions
- **Mission briefing panel** — prompt, learning goal, controls reminder
- **HUD** — current phase, current objective, score
- **Inventory panel** — items currently held (toggle with Tab)
- **Product inspection panel** — shown when near item (press E)
- **Feedback modal** — immediate right/wrong feedback per action
- **Result modal** — final score, pass/fail, breakdown
- **Attempt history** — past runs shown on home screen

**UI style:** B2B SaaS — clean blue/green/white/grey, large readable text, simple English, professional, not childish. Suitable for employee training.

---

## Persistence

**localStorage:** save `MissionAttempt` (missionId, missionName, score, passed, selectedItems, wrongItems, wrongActions, timeSeconds, completedAt)

**Supabase (future):** expose `saveMissionAttempt(attempt)` — currently delegates to localStorage; replace body with Supabase insert when ready.

---

## Rooms

Support these four room types first (simple geometry is fine, must be ready for realistic assets later):
- `classroom`
- `bathroom`
- `kitchen`
- `hallway`

Each room loads based on the mission's `roomType`. Correct items for the mission appear in that room. Targets are clearly marked.

---

## Adding a New Mission (checklist)
1. Add any new items to `items.ts`
2. Add any new questions to `questions.ts`
3. Add mission definition to `missions.ts` and push to `MISSIONS[]`
4. In `index.html` (until Vite migration): add items array, room objects, mission loader function
