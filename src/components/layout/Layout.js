import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';

const Layout = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const divMargin = windowWidth < 800 ? "20vw" : "15vh";

    return (
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Sidebar />
            <div style={{ marginLeft: divMargin, flexGrow: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
