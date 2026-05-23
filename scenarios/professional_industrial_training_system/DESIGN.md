---
name: Professional Industrial Training System
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fd'
  surface-container: '#ededf8'
  surface-container-high: '#e7e7f2'
  surface-container-highest: '#e1e2ec'
  on-surface: '#191b23'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3038'
  inverse-on-surface: '#f0f0fb'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#545f71'
  on-secondary: '#ffffff'
  secondary-container: '#d8e3f9'
  on-secondary-container: '#5a6577'
  tertiary: '#7b2600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a33500'
  on-tertiary-container: '#ffc6b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d8e3f9'
  secondary-fixed-dim: '#bcc7dc'
  on-secondary-fixed: '#111c2b'
  on-secondary-fixed-variant: '#3c4759'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ec'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  hud-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for CleanOps Academy, a B2B SaaS platform dedicated to professional workplace cleaning simulation. The brand personality is **authoritative, precise, and safety-conscious**. It prioritizes instructional clarity over decorative flair, ensuring that trainees can focus entirely on procedural mastery.

The visual style follows a **Corporate / Modern** aesthetic with an **Industrial Utility** influence. This means high-contrast interfaces, a rigorous grid system, and an emphasis on functional reliability. The UI avoids any playful or "gamified" elements that might feel childish; instead, it adopts the visual language of professional aviation or medical simulators to reinforce the importance of workplace safety and hygiene standards.

Key attributes:
- **Trustworthy:** Systematic layouts and stable typography.
- **Efficient:** Minimal friction in mission navigation and HUD interactions.
- **Instructional:** Clear hierarchy that guides the eye to critical status updates and task lists.

## Colors

The palette is rooted in a professional **Clean Blue** to signify trust and technology. To ensure high accessibility and safety compliance, the system utilizes a high-contrast functional palette:

- **Primary (Clean Blue):** Used for main actions, active states, and brand presence.
- **Secondary (Deep Slate):** Used for typography and structural elements to provide a grounded, professional feel.
- **Success (Safety Green):** Explicitly for completed tasks and passed inspections.
- **Warning (Deep Orange):** For critical errors or hazardous procedural mistakes.
- **Safety (Caution Yellow):** Used sparingly for "Attention" states, mimicking physical safety signage in industrial environments.
- **Neutral:** A range of cool greys that provide a clean, "sanitized" background, preventing visual fatigue during long training sessions.

Default mode is **Light**, optimized for high-legibility in typical office or training room lighting conditions.

## Typography

The design system utilizes **Inter** exclusively to leverage its systematic, utilitarian nature. It is a font designed for screens, providing exceptional legibility even at small sizes within the 3D HUD.

- **Headlines:** Set with tight tracking and heavy weights to appear authoritative and structured.
- **Body:** Sized slightly larger than standard (16px-18px) to accommodate instructional reading and reduce cognitive load.
- **Labels:** Uppercase labels are used for UI metadata (e.g., "MISSION TIME", "PPE STATUS") to distinguish data from prose.
- **Accessibility:** High contrast ratios between text and background are strictly maintained.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Training modules and dashboard content are contained within a 1280px max-width 12-column grid to maintain readability on ultra-wide monitors common in corporate environments. 

- **The HUD (Heads-Up Display):** Uses a "Safe Zone" margin of 32px from the screen edges, placing vital stats in the corners and task lists on the right periphery.
- **Spacing Rhythm:** Based on an 8px base unit. 24px gutters ensure that complex data tables and mission cards have sufficient breathing room.
- **Mobile Adaptation:** The 12-column desktop grid collapses to a 4-column grid on mobile. Navigation shifts to a persistent bottom bar or simplified "Back to Sim" controls to maximize vertical space.

## Elevation & Depth

This design system uses **Tonal Layers** rather than heavy shadows to maintain a clean, "clinical" feel. 

1.  **Level 0 (Base):** The neutral background (#F4F7F9).
2.  **Level 1 (Cards/Panels):** Pure white surfaces with a thin 1px border (#E2E8F0). No shadow.
3.  **Level 2 (HUD Overlays):** Semi-transparent dark surfaces (80% Opacity) for the 3D simulation HUD to ensure legibility against varying 3D environments.
4.  **Level 3 (Modals/Critical Alerts):** Use a soft, high-diffusion shadow (0px 8px 24px rgba(0,0,0,0.08)) to indicate temporary focus.

Depth is communicated through stroke and color intensity rather than skeuomorphic effects.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a professional balance—corners are clipped enough to feel modern and safe, but remain sharp enough to feel precise and industrial.

- **Primary Buttons:** 4px (0.25rem) corner radius.
- **Mission Cards:** 8px (0.5rem) corner radius for a distinct container feel.
- **Status Pills:** Fully rounded (pill-shaped) to differentiate them from interactive buttons.
- **Input Fields:** 4px (0.25rem) to match buttons, creating a cohesive form-entry experience.

## Components

### Buttons
Primary buttons are large (min-height: 48px) with bold `label-md` text. They use the Clean Blue background with white text. Hover states utilize a deeper shade of blue, never a change in size or "pop" effect.

### Mission Selection Cards
Cards feature a top-aligned thumbnail of the 3D environment, followed by a clear Title (`headline-md`) and a vertical list of mission requirements. The "Start Mission" action is pinned to the bottom.

### HUD (Heads-Up Display)
The HUD must remain functional. Elements are encased in semi-transparent dark containers with `hud-data` typography in white or safety-yellow. Use high-contrast progress bars for "Cleanliness Percentage."

### Status Indicators (Chips)
Status chips use high-contrast background tints with dark text (e.g., Light Green background with Deep Green text) to signify "Certified," "In Progress," or "Hazard Detected."

### Input Fields
Fields feature a prominent 1px border. On focus, the border thickens to 2px in Primary Blue. Labels are always visible above the field to ensure accessibility during high-speed data entry.

### Lists & Checklists
Checklists are central to the training experience. Use large, custom-styled checkboxes (24px x 24px) that provide a clear "thunk" visual when selected, reinforcing the completion of a cleaning protocol.