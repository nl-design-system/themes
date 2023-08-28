# NL Design System design tokens Gemeente Example

These tokens have been obtained by analysing the [website of Gemeente Example](https://www.example.com/).

---

✂ In your own directory: **remove the "Getting started" section below!**

---

## Getting started with your own NL Design System theme

1. Kies een unieke prefix voor jouw organisatie, die je gebruikt voor je npm package, BEM class names, CSS variabelen, etcetera. Wij gebruiken `nl-`, jij kiest iets anders. Gebruik alleen letters en cijfers in de prefix, geen andere tekens zoals het koppelstreepje. Bijvoorbeeld: gemeente Den Haag gebruikt `denhaag`.
2. Kopieer `proprietary/example-design-tokens/` naar `proprietary/prefix-design-tokens`, waarbij je `prefix` vervangt door de prefix die je kiest.
3. Gebruik "_Find and replace_" in `proprietary/prefix-design-tokens`, vervang _case-sensitive_ `example` door jouw `prefix`.
4. Gebruik "_Find and replace_" in `proprietary/prefix-design-tokens`, vervang _case-sensitive_ `Example Organisation` door jouw de naam van jouw organisatie.
5. Bewerk `packages/storybook/package.json`, en voeg `"@nl-design-system-unstable/prefix-design-tokens": "workspace:*",` toe onder `"dependencies"`. Vervang weer de `prefix` met je eigen prefix.
6. Doe `pnpm install` vanuit de root van je project, zodat jouw nieuwe npm package aan de pnpm workspace toegevoegd wordt.
7. Bewerk `proprietary/prefix-design-tokens/README.md` en pas het aan met je eigen gegevens, voeg een contactpersoon toe. Verwijder de instructies van de template.
8. Bewerk `proprietary/prefix-design-tokens/package.json` en pas het aan met een link naar je eigen website.
9. Bewerk `proprietary/prefix-design-tokens/src/package.json` en pas het aan met gegevens van jouw organisatie.
10. Bewerk `packages/storybook/config/preview.js`
    a. Voeg de naam van jouw organisatie toe aan de alfabetische lijst met teams, zodat je op alfabetische volgorde te vinden bent in Storybook.
    b. Voeg een `import` toe voor de CSS met het thema van jouw organisatie.
    c. Optioneel: voeg een `import` toe voor de webfonts voor jouw thema.
11. Voeg in `proprietary/prefix-design-tokens/src/` jouw design tokens, bijvoorbeeld `color.tokens.json`. Op de [website van NL Design System](https://nldesignsystem.nl/) wordt uitgelegd hoe je een eigen thema kan maken met design tokens.
12. Maak een Pull Request op GitHub om jouw code toe te voegen aan de [NL Design System themes repository](http://github.com/nl-design-system/themes).
13. Als de code is gemerged in de themes repository, dan zal je eigen thema als npm pakketje na een paar minuten beschikbaar worden via [npmjs.com](http://npmjs.com). Dan kun je het thema installeren in jouw project met `npm install --save-dev @nl-design-system-unstable/prefix-design-tokens`.

---

✂ In your own directory: **remove the "Getting started" section above!**

---
