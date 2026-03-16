import './ColorSampleList.css';
import { ColorContrastCanvasElement } from './example-rendering.mjs';
import { ColorSampleElement } from './color-sample.mjs';
// eslint-disable-next-line no-unused-vars
import React from 'react';

ColorContrastCanvasElement.define();
ColorSampleElement.define();

export const ColorSample = ({ color }: { color: string }) => (
  <nldesignsystem-color-sample color={color}></nldesignsystem-color-sample>
);
