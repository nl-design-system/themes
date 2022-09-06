import React from 'react';
import PropTypes from 'prop-types';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';

export const ComponentPage = ({ children }) => {
  return (
    <>
      <Title />
      <Subtitle />

      {children}

      <Description />

      <Primary />

      <ArgsTable story={PRIMARY_STORY} />
    </>
  );
};

ComponentPage.propTypes = {
  children: PropTypes.any,
};
