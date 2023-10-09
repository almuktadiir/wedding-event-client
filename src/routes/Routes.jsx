import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Invitations from "../Components/Pages/Invitations/Invitations";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import ServiceCardDetails from "../Components/Pages/Services/ServiceCardDetails";
import InviteCardDetails from "../Components/Pages/Invitations/InviteCardDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import WedCakes from "../Components/Pages/WedCake/WedCakes";
import WedCakesDetails from "../Components/Pages/WedCake/WedCakesDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                element: <PrivateRoutes><ServiceCardDetails></ServiceCardDetails></PrivateRoutes>,
                loader: ()=> fetch('/wedService.json')
            },
            {
                path: '/invitation',
                element: <Invitations></Invitations>
            },
            {
                path: '/invite/:id',
                element: <PrivateRoutes><InviteCardDetails></InviteCardDetails></PrivateRoutes>,
                loader: () => fetch('/cakeInvite.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/wedcake',
                element: <WedCakes></WedCakes>
            },
            {
                path: '/wedcake/:id',
                element: <PrivateRoutes><WedCakesDetails></WedCakesDetails></PrivateRoutes>,
                loader: () => fetch('/wedcake.json')
            }
        ]
    }
])

export default router;