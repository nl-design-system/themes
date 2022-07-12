import React from 'react';
import PropTypes from 'prop-types';
import amsterdamConfig from '@nl-design-system-unstable/amsterdam-design-tokens/src/config.json';
import denhaagConfig from '../denhaag/config.json';
import utrechtConfig from '../utrecht/config.json';
import bodegravenConfig from '@nl-design-system-unstable/bodegraven-reeuwijk-design-tokens/src/config.json';
import borneConfig from '@nl-design-system-unstable/borne-design-tokens/src/config.json';
import burenConfig from '@nl-design-system-unstable/buren-design-tokens/src/config.json';
import demodamConfig from '@nl-design-system-unstable/demodam-design-tokens/src/config.json';
import drechterlandConfig from '@nl-design-system-unstable/drechterland-design-tokens/src/config.json';
import duivenConfig from '@nl-design-system-unstable/duiven-design-tokens/src/config.json';
import enkhuizenConfig from '@nl-design-system-unstable/enkhuizen-design-tokens/src/config.json';
import groningenConfig from '@nl-design-system-unstable/groningen-design-tokens/src/config.json';
import haarlemmermeerConfig from '@nl-design-system-unstable/haarlemmermeer-design-tokens/src/config.json';
import hoornConfig from '@nl-design-system-unstable/hoorn-design-tokens/src/config.json';
import horstaandemaasConfig from '@nl-design-system-unstable/horstaandemaas-design-tokens/src/config.json';
import leidschendamConfig from '@nl-design-system-unstable/leidschendam-voorburg-design-tokens/src/config.json';
import nijmegenConfig from '@nl-design-system-unstable/nijmegen-design-tokens/src/config.json';
import noordoostpolderConfig from '@nl-design-system-unstable/noordoostpolder-design-tokens/src/config.json';
import provincieConfig from '@nl-design-system-unstable/provincie-zuid-holland-design-tokens/src/config.json';
import rotterdamConfig from '@nl-design-system-unstable/rotterdam-design-tokens/src/config.json';
import stedebroecConfig from '@nl-design-system-unstable/stedebroec-design-tokens/src/config.json';
import tilburgConfig from '@nl-design-system-unstable/tilburg-design-tokens/src/config.json';
import venrayConfig from '@nl-design-system-unstable/venray-design-tokens/src/config.json';
import vughtConfig from '@nl-design-system-unstable/vught-design-tokens/src/config.json';
import westervoortConfig from '@nl-design-system-unstable/westervoort-design-tokens/src/config.json';
import zevenaarConfig from '@nl-design-system-unstable/zevenaar-design-tokens/src/config.json';
import zwolleConfig from '@nl-design-system-unstable/zwolle-design-tokens/src/config.json';
import { DENHAAG_COMPONENT_STORIES } from '@nl-design-system-unstable/theme-toolkit/src/component-stories-denhaag';
import { UTRECHT_COMPONENT_STORIES } from '@nl-design-system-unstable/theme-toolkit/src/component-stories-utrecht';
import { CustomStory } from '@nl-design-system-unstable/theme-toolkit/src/CustomStory';

export const configs = [
  amsterdamConfig,
  denhaagConfig,
  utrechtConfig,
  bodegravenConfig,
  borneConfig,
  burenConfig,
  demodamConfig,
  drechterlandConfig,
  duivenConfig,
  enkhuizenConfig,
  groningenConfig,
  haarlemmermeerConfig,
  hoornConfig,
  horstaandemaasConfig,
  leidschendamConfig,
  nijmegenConfig,
  noordoostpolderConfig,
  provincieConfig,
  rotterdamConfig,
  stedebroecConfig,
  tilburgConfig,
  venrayConfig,
  vughtConfig,
  westervoortConfig,
  zevenaarConfig,
  zwolleConfig,
];

export const stories = [...DENHAAG_COMPONENT_STORIES, ...UTRECHT_COMPONENT_STORIES];

export const ComponentPage = ({ component }) => (
  <div>
    {configs
      .map((config) => {
        const componentStories = config.stories
          .map((storyId) => {
            const story = stories.find((story) => story.storyId === storyId);
            return story && story.component === component ? story : null;
          })
          .filter(Boolean);
        return componentStories.length >= 1 ? { config, stories: componentStories } : null;
      })
      .filter(Boolean)
      .map(({ config, stories }) => (
        <section key={config.prefix}>
          <h2>{config.fullName}</h2>
          {stories.map((story) => (
            <section key={story.storyId}>
              <h3>{story.name}</h3>
              <div className={`${config.prefix}-theme utrecht-document`}>
                <CustomStory>{story.render()}</CustomStory>
              </div>
            </section>
          ))}
        </section>
      ))}
  </div>
);

ComponentPage.propTypes = {
  component: PropTypes.string,
};
