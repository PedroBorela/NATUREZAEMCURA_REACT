---
name: Serene Equilibrium
colors:
  surface: '#f8fbf0'
  surface-dim: '#d8dcd1'
  surface-bright: '#f8fbf0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f6e9'
  surface-container: '#ecf0e3'
  surface-container-high: '#e6eade'
  surface-container-highest: '#e1e5d8'
  on-surface: '#191d16'
  on-surface-variant: '#434a39'
  inverse-surface: '#2d3229'
  inverse-on-surface: '#eef2e5'
  outline: '#737a63'
  outline-variant: '#c3c9b4'
  surface-tint: '#3c6a00'
  primary: '#3c6a00'
  on-primary: '#ffffff'
  primary-container: '#9dcd5a'
  on-primary-container: '#0f2000'
  inverse-primary: '#9dcd5a'
  secondary: '#7835c2'
  on-secondary: '#ffffff'
  secondary-container: '#ac62ea'
  on-secondary-container: '#1c0047'
  tertiary: '#3d43c8'
  on-tertiary: '#ffffff'
  tertiary-container: '#8388f1'
  on-tertiary-container: '#00008f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf074'
  primary-fixed-dim: '#a1d660'
  on-primary-fixed: '#0d2000'
  on-primary-fixed-variant: '#2c5000'
  secondary-fixed: '#f2dcff'
  secondary-fixed-dim: '#deb8ff'
  on-secondary-fixed: '#25004f'
  on-secondary-fixed-variant: '#6020a8'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#b8baff'
  on-tertiary-fixed: '#030090'
  on-tertiary-fixed-variant: '#2b31b5'
  background: '#f8fbf0'
  on-background: '#191d16'
  surface-variant: '#e0e4d8'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
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
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 120px
---

## Brand & Style

This design system is built to evoke a sense of professional sanctuary. It caters to individuals seeking holistic wellness, psychological balance, and physical restoration. The visual language balances the authority of a medical institution with the warmth of a nature-focused retreat.

The style is a blend of **Minimalism** and **Modern Corporate**, utilizing significant "breathing room" (whitespace) to reduce cognitive load and induce a state of calm. Every interface element is designed to feel soft to the touch, avoiding sharp edges or aggressive transitions. The aesthetic priority is clarity and serenity, ensuring that users feel supported and cared for from their first digital interaction.

## Colors

The palette is built around three anchor tones that form the identity of the brand:

- **Vitality Green** `#9dcd5a` — the signature accent of the primary family. Represents growth, healing, and life. Used as the primary container/highlight color; dark derivatives (`#3c6a00`) carry primary actions and interactive elements.
- **Wisdom Purple** `#ac62ea` — the anchor of the secondary family. Introduces psychological depth, intuition, and transformation. Used as the secondary container; the deeper derivative (`#7835c2`) is reserved for secondary actions.
- **Serenity Blue** `#8388f1` — the anchor of the tertiary family. Evokes calm, trust, and mental clarity. Used as the tertiary container; the deeper derivative (`#3d43c8`) is used for informational accents.

All three anchor tones are the literal "mid-point" of each tonal family — lighter tints radiate outward for fixed backgrounds, and darker shades anchor interactive foreground roles. The neutral/surface palette is derived from the green hue, desaturated into "Forest Greys" to keep the full interface in harmonic resonance with the primary family.

## Typography

The typographic scale uses a dual-family approach to signal both expertise and empathy.

**Literata** is used for all headings. Its calligraphic roots and soft serifs provide an editorial, authoritative, yet warm feel. It is set with generous line heights to ensure a relaxed reading pace.

**Plus Jakarta Sans** is used for all functional and body text. Its modern, geometric but rounded letterforms maintain the "approachable" narrative of the design system. It ensures high legibility for clinical information and instructional content. For labels and small UI elements, weight is increased slightly to compensate for smaller scales.

## Layout & Spacing

This design system employs a **Fluid Grid** model with an emphasis on oversized outer margins to center the user's focus.

- **Desktop:** 12-column grid with 120px side margins to create a "contained" feel that prevents content from feeling overwhelming on ultra-wide screens.
- **Mobile:** 4-column grid with 20px margins.
- **Rhythm:** A strict 8px baseline grid governs all vertical rhythm. "Sectional Spacing" (XL) is used liberally between different content blocks to reinforce the "breathing room" philosophy.

Layouts should favor asymmetrical compositions when incorporating organic botanical elements, allowing shapes to bleed off the edges of containers to mimic the unpredictability of nature.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering** rather than harsh borders.

- **Level 0 (Background):** Airy off-white `#f8fbf0` with a barely perceptible green warmth.
- **Level 1 (Cards/Containers):** Subtle off-white or very light green tint with a soft, highly diffused shadow (Blur: 30px, Opacity: 4%, Color: Vitality Green mixed with Neutral).
- **Level 2 (Interactive/Floating):** Increased shadow spread and a slight upward translation (Y-offset) to indicate hover states or modals.

Shadows should always be "tinted" with a hint of Vitality Green (`#9dcd5a`) or Wisdom Purple (`#ac62ea`) to maintain the organic warmth of the interface. Avoid pure grey shadows.

## Shapes

The shape language is defined by high-radius curves and organic silhouettes.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Feature Containers:** Large cards and content sections utilize `rounded-xl` (1.5rem) or even `rounded-2xl` (2rem) to create a "pebble-like" softness.
- **Organic Accents:** Use non-geometric, blob-like masks for imagery and background decorations. These shapes should be fluid and imperfect, referencing leaves, water droplets, or smooth stones.
- **Icons:** Use a consistent stroke weight (1.5px - 2px) with rounded caps and joins to match the typography.

## Components

### Buttons
Primary buttons use a solid deep green (`#3c6a00`) fill with white text, with the `#9dcd5a` anchor visible in hover states or illustrated accents. Secondary buttons use a Wisdom Purple (`#7835c2`) outline or the `#ac62ea` tint. Tertiary/info actions use Serenity Blue derivatives. All buttons feature high horizontal padding (at least 32px) to feel substantial and accessible.

### Cards
Cards are the primary vehicle for content. They should feature no border, a `rounded-xl` radius, and a soft ambient shadow tinted with `#9dcd5a`. If cards are grouped, use subtle tonal shifts (e.g., `surface-container-low: #f2f6e9`) to differentiate them without visual clutter.

### Input Fields
Inputs use a light neutral-green tint (`surface-container: #ecf0e3`) for the fill and a subtle 1px border that darkens on focus to the `outline` tone (`#737a63`). Labels are always positioned above the field in `label-md` for maximum clarity.

### Chips & Tags
Used for categories like "Mental Health," "Yoga," or "Nutrition." Chips should be pill-shaped (fully rounded) and utilize low-opacity versions of the three anchor colors (`#9dcd5a`, `#ac62ea`, `#8388f1`) to stay unobtrusive while reinforcing brand identity.

### Botanical Masks
A unique component of this design system is the "Botanical Mask." Imagery should not always be rectangular; use organic, leaf-inspired SVG masks to frame photos of practitioners or nature scenes. Mask fills may use soft washes of Vitality Green or Wisdom Purple to double as tinted overlays.

### Lists
Use custom bullet points — small circles or leaf icons filled with `#9dcd5a` — rather than standard disc bullets to maintain the brand voice even in small details.
