import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputErrorMessage, InputErrorMessageProps } from './InputErrorMessage';

export default {
  title: 'Atoms/InputErrorMessage',
  component: InputErrorMessage,
} as ComponentMeta<typeof InputErrorMessage>;

const Template: ComponentStory<typeof InputErrorMessage> = (
  args: InputErrorMessageProps
) => <InputErrorMessage {...args} />;

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  message: 'Oops! Something went wrong...',
};
