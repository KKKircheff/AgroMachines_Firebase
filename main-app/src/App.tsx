import React, { createContext, useState, useContext, useEffect } from "react";
import './App.scss';
import AOS from 'aos';
import Layout from './Layout/Layout.component';

import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
// import { Item } from './application-data/navbar-config';
// import { items } from './application-data/navbar-config';

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
                        <Route path={`/*`} element={<Home />} />
                    </Route>
                </Routes>
            </ToggleContext.Provider>
        </div>
    )
}

export default App;

export { ToggleContext };