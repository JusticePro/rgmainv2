import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router';

import Master from './Layout/Master';
import { PageSongView } from './Pages/PageSongView';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Master />}>
        <Route index element={<h1>yo</h1>} />
        <Route path="/song/:songId" element={<PageSongView />} />
        <Route path="/song/:songId/edit" element={<PageSongView editing={true} />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
)
