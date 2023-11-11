import type { CSSProperties } from 'react';

export const styles: Record<'root' | 'sidebar' | 'content', CSSProperties> = {
  root: {
    minHeight: '100vh',
  },

  sidebar: {
    padding: '20px 8px',
  },

  content: {
    padding: 20,
  },
};
