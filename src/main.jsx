import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter }  from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { MySpaceProvider } from "./context/MySpaceContext.jsx";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <ThemeProvider>
              <MySpaceProvider>
                  <App />
              </MySpaceProvider>
          </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
);
