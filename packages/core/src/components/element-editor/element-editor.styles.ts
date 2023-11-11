import type { CSSProperties } from 'react';

export const styles: Record<'editor' | 'actions', CSSProperties> = {
  editor: {
    position: 'relative',
  },

  actions: {
    position: 'absolute',
    top: -16,
    right: 28,
    transform: 'translateY(-100%)',
  },
};
