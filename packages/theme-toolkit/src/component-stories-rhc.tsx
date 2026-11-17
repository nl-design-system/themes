import { STORY_GROUPS } from './component-stories-util';
import {
  DotBadge,
  Alert,
  FormFieldCheckboxGroup,
  FormFieldCheckboxOption,
  Heading,
  Logo,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';

export const RHC_COMPONENT_STORIES = [
  {
    storyId: 'react-rhc-dot-badge--default',
    component: 'rhc-dot-badge',
    group: STORY_GROUPS['BADGES'],
    name: 'Rijkshuisstijl Dot Badge',
    render: () => <DotBadge label={'Nieuw bericht'} />,
  },
  {
    storyId: 'react-rhc-logo--default',
    component: 'rhc-logo',
    group: STORY_GROUPS['LOGO'],
    name: 'Rijkshuisstijl Logo',
    render: () => <Logo organisation="Rijkshuisstijl-community" />,
  },
  {
    storyId: 'react-rhc-alert--default',
    component: 'rhc-alert',
    group: STORY_GROUPS['ALERTS'],
    name: 'Rijkshuisstijl Alert',
    render: () => (
      <Alert type="info">
        <Heading level={3}>Heading</Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod</Paragraph>
      </Alert>
    ),
  },
  {
    storyId: 'react-rhc-checkbox-group--default',
    component: 'rhc-checkbox-group',
    group: STORY_GROUPS['CHECKBOX_GROUP'],
    name: 'Rijkshuisstijl Checkbox Group',
    render: () => (
      <FormFieldCheckboxGroup
        label="Hoe wilt u dat wij contact met u opnemen?"
        description="Wij nemen alleen contact met u op via de manieren die u kiest."
      >
        <FormFieldCheckboxOption name="contact" value="telefoon" label="Telefoon" defaultChecked />
        <FormFieldCheckboxOption name="contact" value="e-mail" label="E-mail" />
        <FormFieldCheckboxOption name="contact" value="brief" label="Brief" />
      </FormFieldCheckboxGroup>
    ),
    detectTokens: {
      anyOf: [
        'rhc.checkbox-group.padding-block-end',
        'rhc.checkbox-group.padding-block-start',
        'rhc.checkbox-group.row-gap',
      ],
    },
  },
];
