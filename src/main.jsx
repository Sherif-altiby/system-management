import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './components/context/Context.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider >
        <App />
    </ProductProvider>
  </StrictMode>,
)
