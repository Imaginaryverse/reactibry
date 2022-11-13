import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputLabel, InputLabelProps } from './InputLabel';

export default {
  title: 'Atoms/InputLabel',
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args: InputLabelProps) => (
  <InputLabel {...args} />
);

export const Label = Template.bind({});
Label.args = {
  label: 'Input label',
};
