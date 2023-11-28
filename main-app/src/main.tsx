import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Layout/ScrollToTop.component';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/soho-light/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <PrimeReactProvider>
                <ScrollToTop />
                <App />
            </PrimeReactProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
