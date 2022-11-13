import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Molecules/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Number = Template.bind({});
Number.args = {
  value: '',
  type: 'number',
  label: 'Age',
  placeholder: '18',
  onChange: () => null,
};

export const Text = Template.bind({});
Text.args = {
  value: '',
  type: 'text',
  label: 'Name *',
  placeholder: 'Anton',
  onChange: () => null,
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  type: 'password',
  label: 'Password *',
  onChange: () => null,
};

export const Tel = Template.bind({});
Tel.args = {
  value: '',
  type: 'tel',
  label: 'Phone number *',
  placeholder: '+46',
  onChange: () => null,
};

export const Email = Template.bind({});
Email.args = {
  value: '',
  type: 'email',
  label: 'Email *',
  placeholder: 'john@doe.com',
  onChange: () => null,
};
