import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './List';
import { Button } from '../Button/Button';
import { ListProps } from './List.types';

export default {
  title: 'Atoms/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args: ListProps) => (
  <List {...args} />
);

export const Ordered = Template.bind({});
Ordered.args = {
  ordered: true,
  items: [
    <Button variant='secondary' label='BTN 1' />,
    <Button variant='secondary' label='BTN 2' />,
    <Button label='BTN 3' />,
  ],
};

export const Unordered = Template.bind({});
Unordered.args = {
  items: [
    <Button variant='secondary' label='BTN 1' />,
    <Button variant='secondary' label='BTN 2' />,
    <Button label='BTN 3' />,
  ],
};
