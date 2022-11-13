import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'PRIMARY',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'SECONDARY',
  variant: 'secondary',
};
