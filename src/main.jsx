import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider.jsx';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhBYVF1WmFZfVpgdVdMY1hbRn5PIiBoS35RckVrWHlfcndRRGhUU0Bx');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider> 
    <App />
    </ContextProvider>
  </StrictMode>,
)
