import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router';

import Master from './Layout/Master';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Master />}>
          <Route index element={<h1>yo</h1>} />
          <Route path="/song" element={<h1>yo1</h1>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
