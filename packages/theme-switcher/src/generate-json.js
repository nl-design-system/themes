const amsterdam = require('@nl-design-system-unstable/amsterdam-design-tokens/src/config.json');
const bodegraven = require('@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/src/config.json');
const buren = require('@nl-design-system-unstable/buren-design-tokens/src/config.json');
const drechterland = require('@nl-design-system-unstable/drechterland-design-tokens/src/config.json');
const duiven = require('@nl-design-system-unstable/duiven-design-tokens/src/config.json');
// const duo = require('@nl-design-system-unstable/duo-design-tokens/src/config.json');
const enkhuizen = require('@nl-design-system-unstable/enkhuizen-design-tokens/src/config.json');
const groningen = require('@nl-design-system-unstable/groningen-design-tokens/src/config.json');
const haarlemmermeer = require('@nl-design-system-unstable/haarlemmermeer-design-tokens/src/config.json');
const hoorn = require('@nl-design-system-unstable/hoorn-design-tokens/src/config.json');
const horstaandemaas = require('@nl-design-system-unstable/horstaandemaas-design-tokens/src/config.json');
const leidschendam = require('@nl-design-system-unstable/leidschendam-voorburg-design-tokens/src/config.json');
const noordoostpolder = require('@nl-design-system-unstable/noordoostpolder-design-tokens/src/config.json');
const rotterdam = require('@nl-design-system-unstable/rotterdam-design-tokens/src/config.json');
const stedebroec = require('@nl-design-system-unstable/stedebroec-design-tokens/src/config.json');
const tilburg = require('@nl-design-system-unstable/tilburg-design-tokens/src/config.json');
const venray = require('@nl-design-system-unstable/venray-design-tokens/src/config.json');
const vught = require('@nl-design-system-unstable/vught-design-tokens/src/config.json');
const westervoort = require('@nl-design-system-unstable/westervoort-design-tokens/src/config.json');
const zevenaar = require('@nl-design-system-unstable/zevenaar-design-tokens/src/config.json');
const zwolle = require('@nl-design-system-unstable/zwolle-design-tokens/src/config.json');
const utrecht = require('../../../documentation/utrecht/config.json');
const denhaag = require('../../../documentation/denhaag/config.json');

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const themes = [
  amsterdam,
  bodegraven,
  buren,
  drechterland,
  duiven,
  // duo,
  enkhuizen,
  groningen,
  haarlemmermeer,
  hoorn,
  horstaandemaas,
  leidschendam,
  noordoostpolder,
  rotterdam,
  stedebroec,
  tilburg,
  venray,
  vught,
  westervoort,
  zevenaar,
  zwolle,
  denhaag,
  utrecht,
]
  .map(({ cdn, name, fullName, prefix, npm }) => ({
    className: `${prefix}-theme`,
    title: fullName || name,
    href: cdn || `https://unpkg.com/${npm}/dist/index.css`,
  }))
  .sort((a, b) => stringSort(a.className, b.className));

console.log(JSON.stringify(themes, null, '  '));
