# NL Design System design tokens Gemeente Example

These tokens have been obtained by analysing the [website of Gemeente Example](https://www.example.com/).

---

✂ In je eigen directory: **verwijder de "Aan de slag" sectie hieronder!**

---

## Aan de slag met je eigen NL Design System thema

### Een nieuw thema opzetten

- [ ] Kies een unieke prefixvoor jouw organisatie, die je gebruikt voor je npm package, BEM class names, CSS variabelen, etcetera. Wij gebruiken `nl`, jij kiest iets anders. Gebruik alleen letters en cijfers in de prefix, geen andere tekens zoals het koppelstreepje. Bijvoorbeeld: gemeente Den Haag gebruikt `denhaag`.
- [ ] Kopieer `proprietary/example-design-tokens/` naar `proprietary/prefix-design-tokens`, waarbij je `prefix` vervangt door de prefix die je kiest.
- [ ] Gebruik "_Find and replace_" in `proprietary/prefix-design-tokens` en vervang _case-sensitive_ `example-` door jouw `prefix-` (inclusief het koppelstreepje).
- [ ] Open ook `src/config.json` in de nieuwe directory en full je prefix in bij `"prefix"`
- [ ] Gebruik "_Find and replace_" in `proprietary/prefix-design-tokens` en vervang _case-sensitive_ `Example Organisation` door jouw de naam van jouw organisatie.
- [ ] Open ook `src/config.json` en full bij `"name"` en `"fullName"` de naam in van je organisatie. Als het een lange naam is, dan kun je een korte versie invullen bij `"name"` zodat de tekst past in de Side Navigation.
- [ ] Bewerk `packages/storybook/package.json`, en voeg `"@nl-design-system-community/prefix-design-tokens": "workspace:*",` toe onder `"devDependencies"`. Vervang weer de `prefix` met je eigen prefix.
- [ ] Doe `pnpm install` vanuit de root van je project, zodat jouw nieuwe npm package aan de pnpm workspace toegevoegd wordt.
- [ ] Bewerk `proprietary/prefix-design-tokens/README.md` en pas het aan met je eigen gegevens, voeg een contactpersoon toe. Verwijder de instructies van de template.
- [ ] Bewerk `proprietary/prefix-design-tokens/package.json` en vul bij `"description"` een duidelijke naam in van dit project.
- [ ] Bewerk `proprietary/prefix-design-tokens/package.json` en pas het aan met een link naar je eigen website.
- [ ] Bewerk `packages/storybook/config/preview.ts`
      a. Voeg een `import` toe voor de CSS met het thema van jouw organisatie.
      b. Optioneel: voeg een `import` toe voor de webfonts voor jouw thema.
- [ ] Voeg in `proprietary/prefix-design-tokens/src/` jouw design tokens toe, bijvoorbeeld `tokens.json`. Op de [website van NL Design System](https://nldesignsystem.nl/) wordt uitgelegd hoe je een eigen thema kan maken met design tokens.

Gaat het niet om een beschermde huisstijl, en mag iedereen de design tokens gebruiken voor een eigen website, dan kun je een aantal stappen anders aanpakken:

- [ ] Kopieer `proprietary/example-design-tokens/` naar `packages/prefix-design-tokens`, waarbij je `prefix` vervangt door de prefix die je kiest.
- [ ] Kies een open source licentie, bijvoorbeeld de EUPL-1.2 licentie.
- [ ] Pas de `"license"` aan in `packages/prefix-design-tokens/package.json`, bijvoorbeeld naar `"EUPL-1.2"`.
- [ ] Pas de inhoud van `packages/prefix-design-tokens/LICENSE.md` aan naar de inhoud van de licentie die je kiest, bijvoorbeeld de [EUPL-1.2 licentie in Markdown](../../LICENSE.md).
- [ ] Bewerk in `packages/prefix-design-tokens/package.json` locatie naar `"directory": "packages/prefix-design-tokens"`, waarbij je `prefix` vervangt door de prefix die je kiest.

Als je wilt dan kun je een open source font installeren. Bijvoorbeeld, voor "Fira Sans" voer je de volgende stappen uit:

- `pnpm add --save-dev @fontsource/fira-sans --dir proprietary/prefix-design-tokens`
- Create `properietary/prefix-design-tokens/src/font.js`, and import the font there: `import '@fontsource/fira-sans';`

### Je nieuwe thema publiceren op npm

- [ ] Maak een Pull Request op GitHub om jouw code toe te voegen aan de [NL Design System themes repository](http://github.com/nl-design-system/themes).
- [ ] Als de code is gemerged in de themes repository, dan zal je eigen thema als npm pakketje na een paar minuten beschikbaar worden via [npmjs.com](http://npmjs.com). Daarna kun je het thema installeren in jouw project met `npm install --save-dev @nl-design-system-community/prefix-design-tokens`.

---

✂ In je eigen directory: **verwijder de "Aan de slag" sectie hierboven!**

---
