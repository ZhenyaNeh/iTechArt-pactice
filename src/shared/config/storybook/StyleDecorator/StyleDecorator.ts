import { StoryFn } from '@storybook/react';
import 'app/style/index.scss';

export const StyleDecorator = (story: () => StoryFn) => story();
