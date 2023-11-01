import { client } from '../client';

export interface Component {
  id: string;
  componentName: string;
  packageName: string;
  src: string;
}

export type ComponentsFindOptions = Partial<Component>;
export type ComponentConstructorOptions = Omit<Component, 'id'>;

export const components = {
  async create(options: ComponentConstructorOptions): Promise<Component> {
    const response = await client.post('/components', options);
    return response.data;
  },

  async findBy(options: Partial<Component>): Promise<Component[]> {
    const response = await client.get('/components', { params: options });
    return response.data;
  },

  async findById(id: string): Promise<Component> {
    const response = await client.get(`/components/${id}`);
    return response.data;
  },

  async remove(id: string): Promise<Component> {
    const response = await client.delete(`/components/${id}`);
    return response.data;
  },
};
