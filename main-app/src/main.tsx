import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Layout/ScrollToTop.component';
import { PrimeReactProvider } from 'primereact/api';

import './sass/primeTheme.scss'


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
