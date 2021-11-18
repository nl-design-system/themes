import PropTypes from 'prop-types';
import React from 'react';

const demoCharacters = [
  'Aa',
  'Bb',
  'Cc',
  'Dd',
  'Ee',
  'Ff',
  'Gg',
  'Hh',
  'Ii',
  'IJij',
  'Ĳĳ',
  'Jj',
  'Kk',
  'Ll',
  'Mm',
  'Nn',
  'Oo',
  'Pp',
  'Qq',
  'Rr',
  'Ss',
  'Tt',
  'Uu',
  'Vv',
  'Ww',
  'Xx',
  'Yy',
  'Zz',
];

const commonLigatures = ['if', 'fi', 'ff', 'tf', 'ft', 'jf', 'fj'];

export const FontDemo = ({ fontFamily, fontFamilyFallbacks, textContent }) => (
  <div>
    <div
      style={{
        fontFamily: fontFamily,
      }}
    >
      {textContent}
    </div>
    {fontFamilyFallbacks.map((fallback) => (
      <div key={fallback} style={{ fontFamily: fallback }}>
        {textContent}
      </div>
    ))}
    <h2>Comparison with fallback font</h2>
    <h3>Letters</h3>
    <table>
      <thead>
        <tr>
          {[fontFamily, ...fontFamilyFallbacks].map((font) => (
            <th key={font} scope="col">
              <div
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                }}
              >
                {font}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {demoCharacters.map((letter) => (
          <tr key={letter}>
            {[fontFamily, ...fontFamilyFallbacks].map((font) => (
              <td key={font} style={{ fontFamily: font, fontSize: '32px' }}>
                {letter}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Common Ligatures</h2>
    <table>
      <thead>
        <tr>
          {[fontFamily, ...fontFamilyFallbacks].map((font) => (
            <th key={font} scope="col" colspan="2">
              <div
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                }}
              >
                {font}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {commonLigatures.map((letter) => (
          <tr key={letter}>
            {[fontFamily, ...fontFamilyFallbacks].map((font) => (
              <>
                <td key={font} style={{ fontFamily: font, fontSize: '32px' }}>
                  <span style={{ fontVariantLigatures: 'common-ligatures' }}>{letter}</span>
                </td>
                <td key={font} style={{ fontFamily: font, fontSize: '32px' }}>
                  <span style={{ fontVariantLigatures: 'none' }}>{letter}</span>
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Readability at various font-weights</h2>
    {[fontFamily, ...fontFamilyFallbacks].map((font) => (
      <>
        <p>{font}</p>
        <div style={{ fontFamily: font }}>
          <div style={{ paddingBlockStart: '10px', paddingBlockEnd: '10px' }}>{textContent}</div>
          <div style={{ filter: 'blur(1px)', paddingBlockStart: '10px', paddingBlockEnd: '10px' }}>{textContent}</div>
          <div style={{ filter: 'blur(2px)', paddingBlockStart: '10px', paddingBlockEnd: '10px' }}>{textContent}</div>
        </div>
      </>
    ))}
    <h2>Numeric data</h2>
    {[fontFamily, ...fontFamilyFallbacks].map((font) => (
      <table style={{ fontFamily: font }}>
        <caption>{font}</caption>
        <thead>
          <tr>
            <th>Example text</th>
            <th>text formatting</th>
            <th>numeric formatting</th>
          </tr>
        </thead>
        <tbody>
          {[
            { text: 'lorem ipsum', number: '€ 9.876,54' },
            { text: 'lorem ipsum', number: '€ 123,45' },
            { text: 'lorem ipsum', number: '€ 111,11' },
            { text: 'lorem ipsum', number: '€ 100,00' },
          ].map(({ text, number }) => (
            <tr>
              <td>{text}</td>
              <td style={{ fontVariantNumeric: 'normal', textAlign: 'right' }}>{number}</td>
              <td style={{ fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ))}
    <h2>Unamibiguous data</h2>
    <p>
      Sometimes data is important to display without any ambiguity between characters. For example when displaying a
      password, it is important to see the differents between l, I, 1 (lowercase letter L, uppercase letter I and number
      one) and between O, 0 and o (uppercase letter O, number zero, and lowercase letter O).
    </p>
    <p>
      The <code>slashed-zero</code> font-variant can help with this. You can see below if the variant is supported. The
      first zero should not have a diagonal line, the second zero should have a diagonal line. If both look the same,
      the <code>slashed-zero</code> feature is not supported.
    </p>
    {[fontFamily, ...fontFamilyFallbacks].map((font) => (
      <>
        <p>{font}</p>
        <div style={{ fontFamily: font }}>
          <div style={{ fontVariantNumeric: 'normal' }}>0</div>
          <div style={{ fontVariantNumeric: 'slashed-zero' }}>0</div>
        </div>
      </>
    ))}
    <h2>Wishlist</h2>
    <ul>
      <li>
        Is <code>font-variant-numeric: slashed-zero</code> supported?
      </li>
      <li>Does the font support common ligatures?</li>
      <li>Are the lowercase and uppercase Dutch IJ characters rendered correctly?</li>
      <li>Does the font provide readable italic variants?</li>
      <li>Is an italic variant available for every font-weight you use?</li>
      <li>Does the font have a reasonably similar and widely installed fallback font?</li>
      <li>Does the font have a serif variant that could be used for print, or for headings and quotes?</li>
      <li>
        Does the font have a <code>.woff2</code>, in addition to .ttf/.eot/.woff? This new format is more compressed and
        helps load your pages load faster, compared to the other font file types.
      </li>
    </ul>
    <p>Fallback font checklist:</p>
    <ul>
      <li>
        Do the fallback fonts have similar dimensions for font-relative units such as `em`, `ex` and `ch`? If you rely
        on these values, the layout can be quite different depending on the font.
      </li>
    </ul>
  </div>
);

FontDemo.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontFamilyFallbacks: PropTypes.array.isRequired,
  textContent: PropTypes.string.isRequired,
};
