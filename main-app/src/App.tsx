import { createContext, useState, useContext, useEffect } from "react";
import { lazy, Suspense } from 'react';

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Layout from './Layout/Layout.component';

import PageLoaderSkeleton from "./components/layout/pageLoaderSkeleton/PageLoaderSkeleton.component";

// import Home from './routes/home/home.component';
const Home = lazy(() => import('./routes/home/home.component'));
const Offers = lazy(() => import('./routes/offers/Offers.component'));
const Gallery = lazy(() => import('./routes/gallery/Gallery.component'));
const Contact = lazy(() => import('./routes/contact/Contact.component'));
const GalleryItemPage = lazy(() => import('./routes/galleryItemPage/GalleryItemPage.component'));
const OfferItemPage = lazy(() => import('./routes/offerItemPage/OfferItemPage.component'));

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
            duration: 300,
            offset: 50,
            anchorPlacement: 'bottom-center',
        })
    }, []);

    return (
        <div className="App">
            <ToggleContext.Provider value={{ toggleView, setToggleView }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Home />
                            </Suspense>} />
                        <Route path={`/offers`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Offers />
                            </Suspense>} />
                        <Route path={`/offers/:id`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <OfferItemPage />
                            </Suspense>} />
                        <Route path={`/offers/* `} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Offers />
                            </Suspense>} />
                        <Route path={`/gallery`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Gallery />
                            </Suspense>
                        } />
                        <Route path={`/gallery/:id`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <GalleryItemPage />
                            </Suspense>
                        } />
                        <Route path={`/gallery/*`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Gallery />
                            </Suspense>
                        } />
                        <Route path={`/contact`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Contact />
                            </Suspense>
                        } />
                        <Route path={`/*`} element={
                            <Suspense fallback={<PageLoaderSkeleton />}>
                                <Home />
                            </Suspense>} />
                    </Route>
                </Routes>
            </ToggleContext.Provider>
        </div>
    )
}

export default App;

export { ToggleContext };