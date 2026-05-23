---
name: Modern Enterprise Simulation
colors:
  surface: '#08132a'
  surface-dim: '#08132a'
  surface-bright: '#2f3952'
  surface-container-lowest: '#030d25'
  surface-container-low: '#101b33'
  surface-container: '#151f37'
  surface-container-high: '#1f2942'
  surface-container-highest: '#2a344d'
  on-surface: '#d9e2ff'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#d9e2ff'
  inverse-on-surface: '#263049'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#b6c6ed'
  on-secondary: '#20304f'
  secondary-container: '#374767'
  on-secondary-container: '#a5b5db'
  tertiary: '#38debb'
  on-tertiary: '#00382d'
  tertiary-container: '#001e17'
  on-tertiary-container: '#00937a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#b6c6ed'
  on-secondary-fixed: '#091b39'
  on-secondary-fixed-variant: '#374767'
  tertiary-fixed: '#5ffbd6'
  tertiary-fixed-dim: '#38debb'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005142'
  background: '#08132a'
  on-background: '#d9e2ff'
  surface-variant: '#2a344d'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
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
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  desktop-max-width: 1440px
---

## Brand & Style
This design system embodies a "High-Stakes Professionalism" aesthetic, blending the rigorous standards of B2B enterprise software with the engaging, feedback-driven nature of simulation technology. The visual direction is **Corporate / Modern** with subtle **Minimalist** influences, prioritizing clarity and data-density without sacrificing the "premium startup" feel.

The target audience includes operations managers and workforce stakeholders who require a sense of stability, institutional trust, and technological advancement. The UI evokes a sense of "Clean Precision"—mirroring the industry it serves. It uses wide margins, purposeful whitespace, and a high-contrast palette to ensure that training metrics and progress indicators are the focal point of the user experience.

## Colors
The palette is built on a foundation of deep, immersive blues to establish an environment of focus and authority. 

- **Primary (#0A192F):** Used for deep background layers and core structural elements.
- **Secondary (#112240):** Utilized for component surfaces like cards, sidebars, and elevated containers.
- **Tertiary/Accent (#64FFDA):** A high-vibrancy aquamarine used sparingly for primary actions, links, and critical "active" states to draw the eye immediately.
- **Success/Growth (#10B981):** A classic emerald green reserved for positive simulation outcomes, completion statuses, and growth metrics.
- **Neutral (#CCD6F6):** A cool-toned slate-white used for primary body text and icons to ensure high legibility against dark backgrounds.

## Typography
This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, and highly readable interface. The type hierarchy is designed for rapid scanning of data tables and simulation stats.

- **Headlines:** Use tighter letter spacing and heavier weights to create a "strong" editorial feel for page titles and module headers.
- **Body Text:** Optimized for long-form instructional content with generous line heights.
- **Labels:** Small caps or increased letter-spacing are applied to metadata labels and status indicators to differentiate them from interactive body text.

## Layout & Spacing
The layout follows a **Fluid Grid** model within a maximum width for desktop, ensuring the dashboard remains functional on ultra-wide monitors while remaining centered and accessible.

- **Grid System:** A 12-column grid is used for desktop, collapsing to 4 columns on mobile.
- **Spacing Rhythm:** Based on an 8px linear scale. Use `16px` for internal component padding and `24px` or `32px` for gaps between major layout sections.
- **Dashboard Layout:** Utilizes a fixed left-hand navigation (280px) with a fluid content area that uses "Cards" to group related training modules and statistics.

## Elevation & Depth
Hierarchy is conveyed through **Tonal Layers** rather than heavy shadows, maintaining a clean and "grant-ready" professional look.

- **Level 0 (Background):** Primary Navy (#0A192F). Used for the canvas.
- **Level 1 (Surfaces):** Secondary Deep Blue (#112240). Used for cards, navigation panels, and input fields.
- **Level 2 (Interaction):** Subtle 1px borders using a low-opacity version of the accent color or a lighter navy to define edges.
- **Shadows:** When necessary, use "Ambient Shadows"—diffused, low-opacity (10-15%) black shadows with a 10px-20px blur to suggest a soft lift for modals or dropdowns.

## Shapes
The shape language is **Rounded**, striking a balance between modern startup friendliness and enterprise structure.

- **Components:** Standard buttons, input fields, and small UI elements use a 0.5rem (8px) radius.
- **Cards:** Large containers and dashboard modules use 1rem (16px) radius to create a soft, approachable "unit" feel.
- **Progress Bars:** Fully rounded (pill-shaped) to lean into the gamified, fluid nature of simulation progress.

## Components
Consistent styling of components ensures the platform feels like a cohesive training ecosystem.

- **Buttons:** Primary buttons are solid Accent (#64FFDA) with dark navy text for maximum contrast. Secondary buttons use a ghost style (accent border and text).
- **Cards:** Utilize the Secondary color (#112240) with a 1px border (#233554) to separate modules from the background.
- **Progress Indicators:** Use the Emerald Green (#10B981) for completion fills. The "track" of the progress bar should be a dark, low-contrast navy.
- **Input Fields:** Darker than the card surface to create a "well" effect, with a bright accent border only on focus.
- **Chips/Badges:** Small, high-contrast labels used for "Certification Level," "Industry Standard," or "Module Status."
- **Simulation HUD Elements:** Status indicators (icons + labels) should be grouped in the top-right of cards to mimic a game-like dashboard without losing professional utility.