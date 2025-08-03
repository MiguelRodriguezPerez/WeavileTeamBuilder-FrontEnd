import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { globalQueryClient, globalQueryPersister } from './cache';
import { WeavileTeamBuilderApp } from './WeavileTeamBuilderApp';

import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistQueryClientProvider
      client={ globalQueryClient }
      persistOptions={ { persister : globalQueryPersister } }>
      <BrowserRouter>
        <WeavileTeamBuilderApp/>
      </BrowserRouter>
    </PersistQueryClientProvider>
  </StrictMode>,
)
