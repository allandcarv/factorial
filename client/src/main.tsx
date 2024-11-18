import React from 'react';
import { createRoot } from 'react-dom/client';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl!);

import './globals.css';

root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>
);
