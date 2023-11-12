import { ComponentsLibrary, Layout } from '@colibrijs/core';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Components',
};

export default function PageComponents() {
  return (
    <Layout>
      <ComponentsLibrary editable />
    </Layout>
  );
}
