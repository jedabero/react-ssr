import "whatwg-fetch";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';

import App from './App';
import getItems from './items';

getItems().then(items => {
  render(
    <App items={items} />,
    document.getElementById('root')
  );
});