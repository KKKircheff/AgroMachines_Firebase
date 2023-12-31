import React, { createContext, useState, useContext, useEffect } from "react";
import { lazy, Suspense } from 'react';

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Layout from './Layout/Layout.component';

import Home from './routes/home/home.component';
// import Offers from "./routes/offers/Offers.component";
// import Gallery from "./routes/gallery/Gallery.component";
// import Contact from "./routes/contact/Contact.component";

const Offers = lazy(() => import('./routes/offers/Offers.component'));
const Gallery = lazy(() => import('./routes/gallery/Gallery.component'));
const Contact = lazy(() => import('./routes/contact/Contact.component'));
const GalleryItemPage = lazy(() => import('./routes/galleryItemPage/GalleryItemPage.component'));

export type ToggleContextType = {
    toggleView: boolean;
    setToggleView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const useToggleContext = (): ToggleContextType | undefined => {
    return useContext(ToggleContext);
};


function App() {
    const [toggleView, setToggleView] = useState(false);

    useEffect(() => {
        /* ! important how to init AOS in Vite */
        AOS.init({
            easing: 'ease-in',
            delay: 50,
            duration: 300
        })
    }, []);


    return (
        <div className="App">
            <ToggleContext.Provider value={{ toggleView, setToggleView }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={`/offers`} element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Offers />
                            </Suspense>
                        } />
                        <Route path={`/gallery`} element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Gallery />
                            </Suspense>
                        } />
                        <Route path={`/gallery/:id`} element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <GalleryItemPage />
                            </Suspense>
                        } />
                        <Route path={`/gallery/*`} element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Gallery />
                            </Suspense>
                        } />
                        <Route path={`/contact`} element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Contact />
                            </Suspense>
                        } />
                        <Route path={`/*`} element={<Home />} />
                    </Route>
                </Routes>
            </ToggleContext.Provider>
        </div>
    )
}

export default App;

export { ToggleContext };