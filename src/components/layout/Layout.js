import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import {useLocation} from 'react-router-dom';
import Footer from "./Footer";

const Layout = () => {
    const location = useLocation();

    return (
        <main>
            {(location.pathname !== "/" && location.pathname !== "/connection") && <Sidebar/>}
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Layout;
