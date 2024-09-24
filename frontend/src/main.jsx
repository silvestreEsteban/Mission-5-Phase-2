
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routing from '../routing/Routing'; 
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing /> {/* Use Routing as the top-level component */}
  </StrictMode>,
);

