import amsterdam from "@nl-design-system-unstable/amsterdam-design-tokens/src/config.json" assert { type: "json" };
import bodegraven from "@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/src/config.json" assert { type: "json" };
import buren from "@nl-design-system-unstable/buren-design-tokens/src/config.json" assert { type: "json" };
import drechterland from "@nl-design-system-unstable/drechterland-design-tokens/src/config.json" assert { type: "json" };
import duiven from "@nl-design-system-unstable/duiven-design-tokens/src/config.json" assert { type: "json" };
// import duo from '@nl-design-system-unstable/duo-design-tokens/src/config.json' assert { type: "json" };
import enkhuizen from "@nl-design-system-unstable/enkhuizen-design-tokens/src/config.json" assert { type: "json" };
import groningen from "@nl-design-system-unstable/groningen-design-tokens/src/config.json" assert { type: "json" };
import haarlem from "@nl-design-system-unstable/haarlem-design-tokens/src/config.json" assert { type: "json" };
import haarlemmermeer from "@nl-design-system-unstable/haarlemmermeer-design-tokens/src/config.json" assert { type: "json" };
import hoorn from "@nl-design-system-unstable/hoorn-design-tokens/src/config.json" assert { type: "json" };
import horstaandemaas from "@nl-design-system-unstable/horstaandemaas-design-tokens/src/config.json" assert { type: "json" };
import leidschendam from "@nl-design-system-unstable/leidschendam-voorburg-design-tokens/src/config.json" assert { type: "json" };
import noordoostpolder from "@nl-design-system-unstable/noordoostpolder-design-tokens/src/config.json" assert { type: "json" };
import rotterdam from "@nl-design-system-unstable/rotterdam-design-tokens/src/config.json" assert { type: "json" };
import stedebroec from "@nl-design-system-unstable/stedebroec-design-tokens/src/config.json" assert { type: "json" };
import tilburg from "@nl-design-system-unstable/tilburg-design-tokens/src/config.json" assert { type: "json" };
import venray from "@nl-design-system-unstable/venray-design-tokens/src/config.json" assert { type: "json" };
import vught from "@nl-design-system-unstable/vught-design-tokens/src/config.json" assert { type: "json" };
import westervoort from "@nl-design-system-unstable/westervoort-design-tokens/src/config.json" assert { type: "json" };
import zevenaar from "@nl-design-system-unstable/zevenaar-design-tokens/src/config.json" assert { type: "json" };
import zwolle from "@nl-design-system-unstable/zwolle-design-tokens/src/config.json" assert { type: "json" };
import utrecht from "../../../documentation/utrecht/config.json" assert { type: "json" };
import denhaag from "../../../documentation/denhaag/config.json" assert { type: "json" };
import openforms from "../../../documentation/open-forms/config.json" assert { type: "json" };

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
  haarlem,
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
  openforms,
]
  .map(({ cdn, name, fullName, prefix, npm }) => ({
    className: `${prefix}-theme`,
    title: fullName || name,
    href: cdn || `https://unpkg.com/${npm}/dist/index.css`,
    package: npm,
  }))
  .sort((a, b) => stringSort(a.className, b.className));

console.log(JSON.stringify(themes, null, "  "));
