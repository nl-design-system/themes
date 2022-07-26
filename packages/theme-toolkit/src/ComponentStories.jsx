import PropTypes from 'prop-types';
import React from 'react';
import { DENHAAG_COMPONENT_STORIES } from './component-stories-denhaag';
import { UTRECHT_COMPONENT_STORIES } from './component-stories-utrecht';
import { CustomStory } from './CustomStory';

export const Heading = ({ level, children }) =>
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

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export const ComponentStories = ({ config, showAll = false }) => {
  const availableComponents = [...UTRECHT_COMPONENT_STORIES, ...DENHAAG_COMPONENT_STORIES];
  if (Array.isArray(config.stories)) {
    // TODO: Add glob option for variants to config https://www.npmjs.com/package/glob
    const components = showAll
      ? availableComponents
      : availableComponents.filter(({ storyId }) => config.stories.includes(storyId));

    const unimplemented = config.stories.filter(
      (storyId) => !availableComponents.find((component) => component.storyId === storyId),
    );

    unimplemented.map((storyId) =>
      console.warn(`No NL Design System Themes story found for ${storyId} from ${config.name} config.json`),
    );

    const UNGROUPED = '_ungrouped';

    const groupedStories = components.reduce((groups, story) => {
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

    return (
      <div>
        {Object.entries(groupedStories).map(([group, stories]) => {
          const isGrouped = group !== UNGROUPED && stories.length > 1;
          return (
            <div key={group}>
              {isGrouped && <Heading level={2}>{group}</Heading>}
              {stories.map((story) => (
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
                  <CustomStory theme={`${config.prefix}-theme`} inline={story.inline}>
                    {story.render()}
                  </CustomStory>
                </section>
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

ComponentStories.propTypes = {
  config: PropTypes.any,
  showAll: PropTypes.bool,
};
