import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Sidebar />
            <div style={{ marginLeft: '15vh', flexGrow: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
