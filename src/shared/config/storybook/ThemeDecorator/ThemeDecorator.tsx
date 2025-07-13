import type { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (StoryFn) => (
    <div className={`app ${theme}`}>
      <StoryFn />
    </div>
  );
