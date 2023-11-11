import { ContentEditor, Layout } from '@colibrijs/core';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Content',
};

export default function PageContent() {
  return <Layout sidebar={<ContentEditor />}>Content</Layout>;
}
