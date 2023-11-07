import { Outlet } from "react-router-dom";
// If you use CSS/SCSS vs. styled components
import "../index.scss";
import Navigation from "../components/navigation/navigation.component";

import { items } from "../application-data/navbar-config";
export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}


function Layout() {
    return (
        <div className='layout-div' style={{ width: '100%' }}>
            <Navigation items={items} />
            <Outlet />
        </div>
    );
}

export default Layout;
