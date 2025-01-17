// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, ReactNode, useState } from 'react';
import { generateRadixColors } from './generateRadixColors';
import { CodeBlock } from '@utrecht/component-library-react/dist/css-module';
import set from 'lodash-es/set';

interface TokenData {
  name: string;
  tokenRef: string;
  description?: ReactNode;
}

export const ThemeBuilder = () => {
  const [theme, setTheme] = useState({});
  const [json, setJson] = useState(JSON.stringify(theme, null, 2));

  const [projectWallaceJson, setProjectWallaceJson] = useState({
    Color: {},
    FontSize: {},
    LineHeight: {},
    FontFamily: {},
    Gradient: {},
    BoxShadow: {},
    Radius: {},
    Duration: {},
    Easing: {},
  });

  const handleSetToken = (tokenData: TokenData) => (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setTheme(set(theme, tokenData.tokenRef, { ['$value']: value }));
    console.log(theme);
  };

  return (
    <div>
      <h1>Design Tokens</h1>
      <h2>Imported tokens</h2>
      <p>Paste your Project Wallace tokens here:</p>
      <textarea
        onInput={(evt) => {
          try {
            const json = JSON.parse(evt.target.value);
            setProjectWallaceJson(json);
          } catch (e) {
            // TODO: form-error-message
          }
        }}
      ></textarea>
      <h2>Colors</h2>
      <datalist id="color">
        {projectWallaceJson?.Color
          ? Object.values(projectWallaceJson?.Color).map((token, index) => (
              <option key={index}>{token['$value']}</option>
            ))
          : null}
      </datalist>
      <datalist id="font-family">
        {projectWallaceJson?.FontFamily
          ? Object.values(projectWallaceJson?.FontFamily).map((token, index) => (
              <option key={index}>{token['$value']}</option>
            ))
          : null}
      </datalist>
      <datalist id="font-size">
        {projectWallaceJson?.FontSize
          ? Object.values(projectWallaceJson?.FontSize).map((token, index) => (
              <option key={index}>{token['$value']}</option>
            ))
          : null}
      </datalist>
      <datalist id="line-height">
        {projectWallaceJson?.LineHeight
          ? Object.values(projectWallaceJson?.LineHeight).map((token, index) => (
              <option key={index}>{token['$value']}</option>
            ))
          : null}
      </datalist>

      <datalist id="border-radius">
        {projectWallaceJson?.Radius
          ? Object.values(projectWallaceJson?.Radius).map((token, index) => (
              <option key={index}>{token['$value']}</option>
            ))
          : null}
      </datalist>
      <div>
        {[
          {
            name: 'Text',
            tokenRef: 'basis.color.text',
            description: 'Neutrale kleur voor tekst.',
          },
          {
            name: 'Primary',
            tokenRef: 'basis.color.primary',
            description: 'Kleur die de aandacht trekt voor de primaraire acties op de pagina.',
          },
          {
            name: 'Secondary',
            tokenRef: 'basis.color.secondary',
            description: 'Kleur voor de overige acties op de pagina.',
          },
          {
            name: 'Disabled',
            tokenRef: 'basis.color.disabled',
            description: 'Onopvallende kleur voor uitgeschakelde bedieningselementen.',
          },
          {
            name: 'Error',
            tokenRef: 'basis.color.error',
            description: 'Kleur die de aandacht trekt als er iets niet goed gaat.',
          },
          {
            name: 'Warning',
            tokenRef: 'basis.color.warning',
            description: 'Kleur die de aandacht trek om een waarschuwing te geven.',
          },
          {
            name: 'Info',
            tokenRef: 'basis.color.info',
            description: 'Kleur die aangeeft dat er aanvullende informatie is.',
          },
          {
            name: 'Success',
            tokenRef: 'basis.color.success',
            description: 'Kleur die aangeeft dat er een actie, status of proces succesvol is.',
          },
          {
            name: 'Highlight',
            tokenRef: 'basis.color.highlight',
            description: 'Kleur die de aangeeft waar focus is.',
          },
          {
            name: 'Mark',
            tokenRef: 'basis.color.mark',
            description: 'Kleur die de aandacht en markeert wat belangrijk is.',
          },
        ].map((tokenData, index) => (
          <div key={index}>
            <h3>{tokenData.name}</h3>
            {tokenData.description ? <p>{tokenData.description}</p> : null}
            <input
              type="color"
              list="color"
              onInput={(evt) => {
                const radixTheme = generateRadixColors({
                  appearance: 'light',
                  accent: evt.target.value,
                  gray: '#EEEEEE',
                  background: '#FFFFFF',
                });
                const { accentScale } = radixTheme;
                console.log(accentScale);
                const scaleTokens = accentScale.reduce((obj, color, index) => {
                  let colorNumber = index + 1;
                  let scalePrefix = 'color';
                  if ([0, 1].includes(index)) {
                    scalePrefix = 'bg-';
                    colorNumber = index + 1;
                  } else if ([2, 3, 4].includes(index)) {
                    scalePrefix = 'interactive-';
                    colorNumber = index - 1;
                  } else if ([5, 6, 7].includes(index)) {
                    scalePrefix = 'border-';
                    colorNumber = index - 4;
                  } else if ([8, 9].includes(index)) {
                    scalePrefix = 'fill-';
                    colorNumber = index - 7;
                  } else if ([10, 11].includes(index)) {
                    scalePrefix = 'text-';
                    colorNumber = index - 9;
                  }
                  return {
                    ...obj,
                    [`${scalePrefix}${colorNumber}`]: {
                      ['$value']: color,
                    },
                  };
                }, {});
                console.log(scaleTokens);
                setTheme(set(theme, tokenData.tokenRef, scaleTokens));
              }}
            />
          </div>
        ))}
      </div>
      <h2>Fonts</h2>
      <div>
        {[
          {
            name: 'Standaard lettertype',
            tokenRef: 'basis.typography.font-family.default',
            description: 'Lettertype dat voor lopende tekst en bedieningselementen wordt gebruikt.',
          },
          {
            name: 'Heading lettertype',
            tokenRef: 'basis.heading.font-family',
            description: 'Lettertype dat voor Heading componenten wordt gebruikt.',
          },
          {
            name: 'Code',
            tokenRef: 'basis.typography.font-family.code',
            description: 'Monospace lettertype voor code.',
          },
        ].map((tokenData, index) => (
          <div key={index}>
            <h3>{tokenData.name}</h3>
            {tokenData.description ? <p>{tokenData.description}</p> : null}
            <input type="text" list="font-family" onInput={handleSetToken(tokenData)} />
          </div>
        ))}
      </div>
      <h2>Typography scale</h2>
      <p>Vul een font-size in pixels in.</p>
      <div>
        {[
          {
            name: '4XL',
            tokenRef: 'basis.typography.font-size.size-0',
          },
          {
            name: '3XL',
            tokenRef: 'basis.typography.font-size.size-1',
          },
          {
            name: '2XL',
            tokenRef: 'basis.typography.font-size.size-2',
          },
          {
            name: 'X-Large',
            tokenRef: 'basis.typography.font-size.size-3',
          },
          {
            name: 'Large',
            tokenRef: 'basis.typography.font-size.size-4',
          },
          {
            name: 'Medium',
            tokenRef: 'basis.typography.font-size.size-5',
          },
          {
            name: 'Small',
            tokenRef: 'basis.typography.font-size.size-6',
          },
        ].map((tokenData, index) => (
          <div key={index}>
            <h3>{tokenData.name}</h3>
            {tokenData.description ? <p>{tokenData.description}</p> : null}
            <input type="text" list="font-size" onInput={handleSetToken(tokenData)} />
          </div>
        ))}
      </div>
      <h2>Finish making the theme</h2>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          const json = JSON.stringify(theme, null, 2);
          console.log(json);
          navigator.clipboard.writeText(json);
          setJson(json);
        }}
      >
        Download JSON
      </button>
      <button
        onClick={() => {
          if (
            // eslint-disable-next-line no-alert
            prompt('You are going to reset your theme. Are you sure? Type DELETE to confirm.').toUpperCase() ===
            'DELETE'
          ) {
            delete localStorage['theme'];
            // eslint-disable-next-line no-alert
            alert("Poof... and it's gone!");
          } else {
            // eslint-disable-next-line no-alert
            alert('Crisis averted! Theme was not deleted.');
          }
        }}
      >
        Reset theme
      </button>
      <h3>Theme JSON</h3>
      <CodeBlock>{json}</CodeBlock>
    </div>
  );
};
