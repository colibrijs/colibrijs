import React from 'react';

const style = { paddingLeft: 20 };

export function Example(props) {
  const { children, text } = props;

  return (
    <div style={style}>
      {text}
      {children}
    </div>
  );
}
