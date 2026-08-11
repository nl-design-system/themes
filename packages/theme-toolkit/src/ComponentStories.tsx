import { AMS_COMPONENT_STORIES } from './component-stories-ams';
import { DENHAAG_COMPONENT_STORIES } from './component-stories-denhaag';
import { UTRECHT_COMPONENT_STORIES } from './component-stories-utrecht';
import { CANDIDATE_COMPONENT_STORIES } from './component-stories-candidate';
import { RHC_COMPONENT_STORIES } from './component-stories-rhc';
import { CustomStory } from './CustomStory';
// eslint-disable-next-line no-unused-vars
import { type PropsWithChildren } from 'react';
import { ComponentStory } from './component-stories-util';
import { DesignToken, StyleDictionaryDesignToken } from '@nl-design-system-unstable/tokens-lib/src/design-tokens';
import { tokenRef } from '@nl-design-system-unstable/tokens-lib/src/util';
import { DesignTokensTable } from '@nl-design-system-unstable/design-tokens-table-react/css';

interface HeadingProps {
  level?: number;
}

export const Heading = ({ level, children }: PropsWithChildren<HeadingProps>) =>
  level === 1 ? (
    <h1>{children}</h1>
  ) : level === 2 ? (
    <h2>{children}</h2>
  ) : level === 3 ? (
    <h3>{children}</h3>
  ) : level === 4 ? (
    <h4>{children}</h4>
  ) : level === 5 ? (
    <h5>{children}</h5>
  ) : level === 6 ? (
    <h6>{children}</h6>
  ) : (
    <p>{children}</p>
  );

interface ComponentStoriesProps {
  config: {
    name?: string;
    prefix?: string;
    stories: string[];
  };
  showAll?: boolean;
  theme?: string;
  tokens?: StyleDictionaryDesignToken[];
  tokensDefinition?: StyleDictionaryDesignToken[];
  displayDesignTokens?: boolean;
  start?: number;
  end?: number;
}

const arrayToMap = <T extends DesignToken>(tokens: T[]) =>
  new Map(tokens.map((token) => [tokenRef((token as any).path), token]));

export const ComponentStories = ({
  config,
  showAll = false,
  theme,
  tokens = [],
  displayDesignTokens = false,
  tokensDefinition,
  start = 0,
  end = undefined,
}: ComponentStoriesProps) => {
  const availableComponents = [
    ...CANDIDATE_COMPONENT_STORIES,
    ...AMS_COMPONENT_STORIES,
    ...UTRECHT_COMPONENT_STORIES,
    ...DENHAAG_COMPONENT_STORIES,
    ...RHC_COMPONENT_STORIES,
  ];

  // TODO: Add glob option for variants to config https://www.npmjs.com/package/glob

  const hasDetectedTokens = (storyObj: ComponentStory, tokens: StyleDictionaryDesignToken[]) => {
    if (storyObj.detectTokens && Array.isArray(storyObj.detectTokens.allOf)) {
      return storyObj.detectTokens.allOf.every((tokenRef) => tokens.some((token) => token.path.join('.') === tokenRef));
    } else if (storyObj.detectTokens && Array.isArray(storyObj.detectTokens.anyOf)) {
      return storyObj.detectTokens.anyOf.some((tokenRef) => tokens.some((token) => token.path.join('.') === tokenRef));
    } else {
      return false;
    }
  };

  let components = showAll
    ? availableComponents
    : availableComponents.filter(
        (storyObj) => config.stories.includes(storyObj.storyId) || (!!tokens && hasDetectedTokens(storyObj, tokens)),
      );

  if (Array.isArray(config.stories)) {
    const unimplemented = config.stories.filter(
      (storyId) => !availableComponents.find((component) => component.storyId === storyId),
    );

    unimplemented.map((storyId) =>
      console.warn(`No NL Design System Themes story found for ${storyId} from ${config.name || 'theme'} config.json`),
    );
  }

  const UNGROUPED = '_ungrouped';

  interface StoryGroups {
    [index: string]: ComponentStory[];
  }

  components = components.slice(start, end);

  const groupedStories: StoryGroups = components.reduce((groups: StoryGroups, story: ComponentStory) => {
    if (story.group) {
      const group = groups[story.group] || [];
      group.push(story);
      groups[story.group] = group;
    } else {
      const group = groups[UNGROUPED] || [];
      group.push(story);
      groups[UNGROUPED] = group;
    }
    return groups;
  }, {});

  const tokensMap = arrayToMap(tokens || []);

  return (
    <div>
      {Object.entries(groupedStories).map(([group, stories]) => {
        const isGrouped = group !== UNGROUPED && stories.length > 1;
        return (
          <div key={group} className="nlds-component-story">
            {isGrouped && <Heading level={2}>{group}</Heading>}
            {stories.map((story) => {
              const relatedTokens =
                story.detectTokens?.anyOf?.map((ref) => tokensMap.get(ref)).filter((x) => !!x) || [];

              return (
                <section key={story.storyId}>
                  <Heading level={isGrouped ? 3 : 2}>{story.name}</Heading>
                  {showAll && !config.stories.includes(story.storyId) ? (
                    <p>
                      <strong>Let op</strong>: Story{' '}
                      <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>{story.storyId}</span>{' '}
                      staat nog niet in config.json en wordt dus niet getest
                    </p>
                  ) : showAll ? (
                    <p>
                      Story{' '}
                      <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>{story.storyId}</span>{' '}
                      wordt getest
                    </p>
                  ) : null}
                  {/* TODO: Implement `theme` and `inline` properties again */}
                  {/* <CustomStory theme={`${config.prefix}-theme`} inline={story.inline}> */}
                  <CustomStory className={theme || `${config.prefix}-theme`}>{story.render()}</CustomStory>
                  {displayDesignTokens && relatedTokens.length >= 1 ? (
                    <DesignTokensTable tokens={relatedTokens} tokensDefinition={tokensDefinition}></DesignTokensTable>
                  ) : null}
                </section>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
