/*eslint-disable react/prop-types*/
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {

    const { role, token  } = useContext(authContext);

    console.log(authContext);

    console.log('Role:', role);
    console.log('Token:', token);
    console.log('Allowed Roles:', allowedRoles);

    const isAllowed = allowedRoles.includes(role);

    console.log('isAllowed:', isAllowed);

    const accessibleRoute = token && isAllowed ? children : <Navigate to="/login" replace={true} />;

    console.log(accessibleRoute);

    return accessibleRoute
}

export default ProtectedRoute