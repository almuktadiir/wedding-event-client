import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loader) {
        return <div className=" flex justify-center items-center">
            <span className="loading loading-dots loading-lg text-pink-500"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}