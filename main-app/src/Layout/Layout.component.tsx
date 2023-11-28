import { Outlet } from "react-router-dom";
// import './Layout.styles.scss';

import { items } from "../application-data/navbar-config";
import Navigation from "../components/navigation/navigation.component";

export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}

function Layout() {

    return (
        <div className='nav-wrapper' style={{ width: '100%' }}>
            <Navigation items={items} />
            <Outlet />
        </div>
    );
}

export default Layout;
