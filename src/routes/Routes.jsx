import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Invitations from "../Components/Pages/Invitations/Invitations";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import ServiceCardDetails from "../Components/Pages/Services/ServiceCardDetails";


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
                element: <ServiceCardDetails></ServiceCardDetails>
            },
            {
                path: '/invitation',
                element: <Invitations></Invitations>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;