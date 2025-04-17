# Changesets

Gebruik een changeset om een wijziging aan een package te documenteren. Hieronder vind je sjablonen voor de drie soorten
wijzigingen: major, minor en patch.

Weet je niet zeker welk type je moet kiezen? Bekijk dan de uitleg op de pagina [Versiebeheer voor design tokens][1].

Vul tussen de twee sets `---` in voor welk package je veranderingen hebt doorgevoerd. Zet de naam van het package tussen
dubbele aanhalingstekens op een nieuwe regel.

## Naam van het package vinden

De naam van het package kun je vinden door te kijken naar het `"name"` veld in de `package.json` die het dichtst staat
bij het bestand waarin je je wijzigingen hebt doorgevoerd.

> [!NOTE]  
> Voor een wijziging in het bestand
> [`proprietary/example-design-tokens/src/tokens.json`](../proprietary/example-design-tokens/src/tokens.json) is
> [dit bestand](../proprietary/example-design-tokens/package.json#L2) de dichtstbijzijnde `package.json`. Op regel 2 van
> dat bestand vind je de naam van het package.
>
> ```json filename=package.json
> "name": "@nl-design-system-community/example-design-tokens",
> ```

### Major sjabloon

Gebruik het onderstaande sjabloon voor **breaking changes**.

```markdown
---
"<organisatie>/<package>": major
---

[Beschrijf wat er veranderd is, waarom dit nodig was, en hoe gebruikers hun code moeten aanpassen.]
```

### Minor sjabloon

Gebruik het onderstaande sjabloon voor **nieuwe features of uitbereidingen**.

```markdown
---
"<organisatie>/<package>": minor
---

[Beschrijving van de nieuwe feature of uitbreiding.]
```

### Patch sjabloon

Gebruik het onderstaande sjabloon voor **kleine correcties**.

> [!IMPORTANT]  
> Het corrigeren van bijvoorbeeld een spelfout in de naam van een token lijkt misschien een kleine correctie, maar is
> gelijk aan het verwijderen van een token en het toevoegen van een nieuw token en is dus zelfs een major wijziging.

```markdown
---
"<organisatie>/<package>": patch
---

[Korte beschrijving van de correctie.]
```

[1]: https://nldesignsystem.nl/handboek/designer/breaking-changes
