# CleanOps Academy — Window Cleaning Simulator

A first-person 3D employee training simulator built for the browser.

---

## ▶ How to Run (MVP — No Build Required)

The MVP runs from a **single HTML file** with no installation needed.

### Option A — Open in Browser Directly
1. Open `index.html` in any modern browser (Chrome, Edge, Firefox)
2. Click **Start Mission**
3. Click the canvas to lock the mouse
4. Use WASD + mouse to move and look

### Option B — Live Server in VS Code (recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. The game opens at `http://localhost:5500`

---

## 🎮 Controls

| Key | Action |
|-----|--------|
| W A S D | Move |
| Mouse | Look around |
| E | Inspect / Interact |
| Tab | Toggle inventory |
| R | Restart mission |
| Esc | Unlock mouse |

---

## 🎯 Mission Walkthrough

1. **Start** → Click "Start Mission" on the home screen
2. **Explore** → Walk to the left wall shelf and inspect products
3. **Pick up** → Press E near an item, click "+ Add to Inventory"
4. **Answer** → After picking up 2 items, training questions appear
5. **Clean** → Walk to the window (right wall), press E
6. **Result** → See your score and pass/fail

### Correct Items to Select
- ✅ Glass Cleaner (blue bottle on shelf)
- ✅ Microfiber Cloth (blue cloth on shelf)

---

## 📊 Scoring

| Category | Points |
|----------|--------|
| Correct product (glass cleaner) | 25 |
| Correct tool (microfiber cloth) | 25 |
| Wrong items avoided | 0–20 |
| Quiz answers | 0–20 |
| Completed window action | 10 |
| **Total** | **100** |

Passing score: **80/100**

---

## 🗂 Project Structure

```
cleanops-academy/
├── index.html              ← Complete playable MVP (open this)
├── README.md
└── src/                    ← TypeScript source (for future Vite build)
    ├── game/
    │   ├── types.ts         ← All TypeScript types
    │   └── data/
    │       ├── missions.ts  ← Mission definitions
    │       ├── items.ts     ← Item data
    │       └── questions.ts ← Training questions
    └── lib/
        └── supabasePlaceholder.ts  ← Storage layer
```

---

## 🔧 Upgrading to Vite + React

When you're ready to migrate from the standalone HTML to a full Vite project:

```bash
npm create vite@latest cleanops-vite -- --template react-ts
cd cleanops-vite
npm install three @react-three/fiber @react-three/drei zustand tailwindcss
```

Then copy the `src/` folder in and integrate the logic.

---

## ➕ Adding a New Mission

1. Open `src/game/data/items.ts` — add new items
2. Open `src/game/data/questions.ts` — add questions
3. Open `src/game/data/missions.ts` — add a new `Mission` object and push to `MISSIONS[]`
4. In `index.html`: add new `ITEMS` entries, new room objects, and a new mission loader function

### Planned Future Missions
- Mission 02: Washroom Cleaning
- Mission 03: Classroom Cleaning
- Mission 04: Kitchen Sanitation
- Mission 05: Floor Mopping
- Mission 06: High-Touch Disinfection
- Mission 07: Garbage Removal
- Mission 08: Spill Response
- Mission 09: Chemical Safety
- Mission 10: PPE Selection

---

## 🔌 Supabase Integration

See `src/lib/supabasePlaceholder.ts`.

When ready:
1. Create a Supabase project at https://supabase.com
2. Create the `mission_attempts` table:
   ```sql
   create table mission_attempts (
     id uuid default gen_random_uuid() primary key,
     user_id text,
     company_id text,
     mission_id text not null,
     score integer not null,
     pass_fail boolean not null,
     selected_items text[],
     wrong_items text[],
     time_seconds integer,
     completed_at timestamptz default now()
   );
   ```
3. Add env vars and uncomment the Supabase code in `supabasePlaceholder.ts`

---

## 🧪 What to Test First

1. ✅ Mouse pointer lock (click canvas → mouse locks)
2. ✅ Walk around with WASD
3. ✅ Walk near shelf items → label appears, interact prompt shows
4. ✅ Press E → inspect panel opens
5. ✅ Click "+ Add to Inventory" → item appears in inventory bar
6. ✅ After 2 items → quiz questions appear
7. ✅ Answer questions → score updates
8. ✅ Walk to window → "Press E to clean window" prompt
9. ✅ Press E at window → feedback modal
10. ✅ Complete mission → result screen with score
11. ✅ Restart → everything resets
12. ✅ Previous attempts saved in localStorage and shown on home screen
