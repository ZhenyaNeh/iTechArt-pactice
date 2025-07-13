import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';

const meta = {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
