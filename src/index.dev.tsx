import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

createRoot(document.getElementById('cv') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
