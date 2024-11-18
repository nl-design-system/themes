# NL Design System thema voor gemeente Purmerend

## Stappenplan

1. Kopieer `basis-design-tokens/figma/figma.tokens.json` naar naar `figma/figma.tokens.json` van de directory van het nieuwe thema.
1. Maak onder brand een object met de prefix van het nieuwe thema. Bijvoorbeeld: `{ "brand": { "example": { } } }`
1. Ga naar projectwallace.com, en klik op "[Design Tokens](https://www.projectwallace.com/design-tokens)".
1. Vul de domeinnaam in: `purmerend.nl`, en klik op "Analyze URL"
1. Verwijder het "Easing" gedeelte.
1. Hernoem `"Color"` naar `"color"`.
1. Onderzoek welke fonts in gebruik zijn. Zoek op npmjs.com of de fonts beschikbaar zijn als npm package. De pakketjes van `@fontsource/` werken altijd goed. Installeer de font als dependency bij de npm package van het thema. Bijvoorbeeld: `pnpm add --save`.
1. Onderzoek welke varianten van elke font-family in gebruik zijn. Bijvoorbeeld door in een browser met Developer Tools elementen te inspecteren die er wat betreft lettertype, dikte of cursivering er anders uit zien.
1. Voeg een `import` toe voor elke variant die nodig is. Anders krijg je minder leesbare bold en italic tekst.

## Design Tokens instellen

1. Ga naar een pagina met een standaard tekstartikel. Speciale pagina's zoals de homepage zijn meestal niet representatief om de basis van je huisstijl mee in te stellen.
1. Inspecteer in de browser de `font-family` van Paragraph componenten, in de gewone lopende tekst. Stel `basis.typography.font-family.default` in op het standaard font.
1. Inspecteer de `color` van lopende tekst. Kopieer de kleur, en zoek de kleur op in de Color Design Tokens pagina van deze huisstijl in Storybook.
   Kopieer de referentie (bijvoorbeeld: `{example.color.gray-42.value}`), en gebruik deze design token om `utrecht.document.color` in te vullen.
1. Zoek een Link component op in de pagina. Inspecteer de kleur en vind de de color design token. Vul deze in bij `utrecht.link.color`.
1. Zoek van de link Link ook de kleur op van de `hover` state. Vul deze in bij `utrecht.link.hover.color`.
1. Zoek een pagina op waar een Button staat. Bijvoorbeeld bij een formulier. Begin bij een belangrijke button op, zoals de "Verzend" Button. Zoek de kleur design token op van de `color` en `background-color`. Bekijk details waarvoor de kleur geschikt is.
   - Als de kleur geschikt is als achtergrondkleur, stel de kleur dan in bij:
     - `basis.interaction.color`
     - `basis.interaction.active.color`
     - `basis.interaction.hover.color`
     - `utrecht.button.primary-action.background-color`
     - `utrecht.button.primary-action.color`
   - Als de kleur geschikt is als voorgrondkleur, stel de kleur dan in bij:
     - ...

Later:

1. Inspecteer in de browser de `font-family` van Heading componenten (kopteksten). Stel `utrecht.heading.font-family` in op het heading font. (Dit wordt later `nl.heading.font-family`).
