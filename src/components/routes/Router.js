import {lazy} from "react";
import {Navigate} from "react-router-dom";
import SecuredRoute from "./SecuredRoute";

const FullLayout = lazy(() => import("../layout/Layout"));

const Home = lazy(() => import("../home/Home"));
const SignIn = lazy(() => import("../SignIn"));
const WhoAreWe = lazy(() => import("../WhoAreWe"));
const EventDetails = lazy(() => import("../EventDetails"));
const PartnershipCreator = lazy(() => import("../PartnershipCreator"));
const Shop = lazy(() => import("../Shop"));
const Tickets = lazy(() => import("../Tickets"));
const AdminConsole = lazy(() => import("../admin/AdminConsole"));

const ThemeRoutes = [
    {
        path: "/",
        element: <FullLayout/>,
        children: [
            {path: "/", element: <Navigate to="/accueil"/>},
            {path: "/connection", exact: true, element: <SignIn/>},
            {path: "/accueil", exact: true, element: <Home/>},
            {path: "/qui-sommes-nous", exact: true, element: <WhoAreWe/>},
            {path: "/organisation", exact: true, element: <EventDetails/>},
            {path: "/partenariats&créateurs", exact: true, element: <PartnershipCreator/>},
            {path: "/boutique", exact: true, element: <Shop/>},
            {path: "/billeterie", exact: true, element: <Tickets/>},
            {
                path: "/administration", exact: true, element: <SecuredRoute childrenName="Home" children={<AdminConsole/>}></SecuredRoute>
            },
        ],
    },
];

export default ThemeRoutes;
