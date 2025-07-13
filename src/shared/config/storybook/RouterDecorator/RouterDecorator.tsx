import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router';

export const RouterDecorator: Decorator = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
);
