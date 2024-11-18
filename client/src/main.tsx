import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl!);

import './globals.css';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
