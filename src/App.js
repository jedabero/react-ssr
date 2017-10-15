import React from 'react';

export default function App({ items }) {
  return (
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}