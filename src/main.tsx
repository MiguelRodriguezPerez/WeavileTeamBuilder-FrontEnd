import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { WeavileTeamBuilderApp } from './WeavileTeamBuilderApp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <WeavileTeamBuilderApp/>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
