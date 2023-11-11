import type { Component } from './components';
import { client } from '../client';

export interface Element<T extends object = object> {
  id: string;
  component: Component;
  props: T;
}

export type ContentFindOptions = Omit<Partial<Element>, 'component'>;
export interface ElementConstructorOptions extends Omit<Element, 'id' | 'component'> {
  componentId: string;
}

export const content = {
  async create(options: ElementConstructorOptions): Promise<Element> {
    const response = await client.post('/content', options);
    return response.data;
  },

  async findBy(options: ContentFindOptions): Promise<Element[]> {
    const response = await client.get('/content', { params: options });
    return response.data;
  },

  async updateProps(id: string, newProps: object): Promise<Element> {
    const response = await client.put(`/content/${id}/props`, newProps);
    return response.data;
  },

  async remove(id: string): Promise<Element> {
    const response = await client.delete(`/content/${id}`);
    return response.data;
  },
};
