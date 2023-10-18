import { Remote } from '@colibrijs/core';
import React, { useMemo } from 'react';

export default function PageIndex() {
  const props = useMemo(() => ({}), []);

  return (
    <Remote
      componentName="Example"
      packageName="@colibrijs/example"
      src="http://localhost:3001/"
      ssr={typeof window === 'undefined'}
      props={props}
    />
  );
}
