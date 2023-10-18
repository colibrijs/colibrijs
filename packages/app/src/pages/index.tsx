import { Remote } from '@colibrijs/core';
import React, { useMemo } from 'react';

export default function PageIndex() {
  const props = useMemo(() => ({}), []);

  return (
    <Remote
      componentName="Example"
      packageName="@colibrijs/example"
      src="https://colibrijs.github.io/colibrijs/main/example/"
      ssr={typeof window === 'undefined'}
      props={props}
    />
  );
}
