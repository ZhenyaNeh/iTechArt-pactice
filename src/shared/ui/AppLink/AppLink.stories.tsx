import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "test",
    to: "/some/path"
    
  },
};

export const Dark: Story = {
  args: {
    children: "test",
    to: "/some/path"
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
