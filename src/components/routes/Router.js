import {lazy} from "react";
import {Navigate} from "react-router-dom";
import SecuredRoute from "./SecuredRoute";

const FullLayout = lazy(() => import("../layout/Layout"));

const Home = lazy(() => import("../home/Home"));
const SignIn = lazy(() => import("../SignIn"));
const AdminConsole = lazy(() => import("../admin/AdminConsole"));

const ThemeRoutes = [
    {
        path: "/",
        element: <FullLayout/>,
        children: [
            {path: "/", element: <Navigate to="/accueil"/>},
            {path: "/connection", exact: true, element: <SignIn/>},
            {path: "/accueil", exact: true, element: <Home/>},
            {
                path: "/administration", exact: true, element: <SecuredRoute childrenName="Home" children={<AdminConsole/>}></SecuredRoute>
            },
        ],
    },
];

export default ThemeRoutes;
