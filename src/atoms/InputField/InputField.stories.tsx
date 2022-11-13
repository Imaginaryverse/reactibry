import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField, InputFieldProps } from './InputField';

export default {
  title: 'Atoms/InputField',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args: InputFieldProps) => (
  <InputField {...args} />
);

export const Number = Template.bind({});
Number.args = {
  value: '',
  type: 'number',
  placeholder: 'enter number',
  onChange: () => null,
};

export const Text = Template.bind({});
Text.args = {
  value: '',
  type: 'text',
  placeholder: 'enter text',
  onChange: () => null,
};

export const Password = Template.bind({});
Password.args = {
  value: '',
  type: 'password',
  placeholder: 'enter password',
  onChange: () => null,
};

export const Tel = Template.bind({});
Tel.args = {
  value: '',
  type: 'tel',
  placeholder: 'enter phone',
  onChange: () => null,
};

export const Email = Template.bind({});
Email.args = {
  value: '',
  type: 'email',
  placeholder: 'john@doe.com',
  onChange: () => null,
};
