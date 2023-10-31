import { components } from './endpoints/components';
import { content } from './endpoints/content';

export const api = {
  components,
  content,
};

export type {
  Component,
  ComponentConstructorOptions,
  ComponentsFindOptions,
} from './endpoints/components';

export type { Element, ContentFindOptions, ElementConstructorOptions } from './endpoints/content';
