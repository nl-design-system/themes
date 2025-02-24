---
"@nl-design-system-unstable/basis-design-tokens": patch
"@nl-design-system-community/purmerend-design-tokens": patch
---

Use `dashed` instead of `dotted` focus ring, because it adheres to WCAG more reliable. Some browsers render circular dots, in that case the 4px outline-width is not sufficient to achieve the minimum focus ring area.
