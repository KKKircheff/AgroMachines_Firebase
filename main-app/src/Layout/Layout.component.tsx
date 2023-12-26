import { Outlet } from "react-router-dom";

// import './Layout.styles.scss';
// import { itemsPrime } from "../application-data/navbar-config";
// import { MegaMenu } from "primereact/megamenu";

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
            {/* <MegaMenu 
                model={itemsPrime}
                breakpoint="720px"
                pt={{
                    menuButton: (e) => ({ className: e?.state.mobileActive ? 'p-megamenu-button--active' : '' })

                }}
            /> */}
            <Navigation items={items} />
            <Outlet />
        </div>
    );
}

export default Layout;
