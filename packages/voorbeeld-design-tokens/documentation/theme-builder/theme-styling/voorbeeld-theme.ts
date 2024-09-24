import {
  utrechtDocumentFontFamily,
  utrechtDocumentColor,
} from '@nl-design-system-unstable/voorbeeld-design-tokens/dist';

// Stap 1: Stel ik had alleen deze keuzes gemaakt voor kleur ziet het er dan genoeg uit als mijn huisstijl?
// Deze keuzes worden bovenop de 'sane-defaults' van basic-theme gezet.
export const commoncolorstep = {
  // '--utrecht-button-color': 'black', => Component token, use Common token
  '--utrecht-document-color': utrechtDocumentColor,
};

// Stap 2: Stel ik had alleen deze keuzes gemaakt voor kleur en typografie ziet het er dan genoeg uit als mijn huisstijl?
// Deze keuzes worden bovenop de 'sane-defaults' van basic-theme gezet.
export const fontFamilystep = {
  ...commoncolorstep,
  '--utrecht-document-font-family': utrechtDocumentFontFamily,
};

// Stap 3: Stel ik had alleen deze keuzes gemaakt voor kleur en typografie ziet het er dan genoeg uit als mijn huisstijl?
// Deze keuzes worden bovenop de 'sane-defaults' van basic-theme gezet.
export const borderradiusstep = {
  ...fontFamilystep,
  // '--utrecht-button-border-radius': '0', => Component token, use Common token
};
