import { Navigate, Outlet } from "react-router-dom";

import { useUserContext } from "../../contexts/userContext";


export const RouteGuard = ({
    children,
}) => {

    const { isAuthenticated } = useUserContext();


    if(!isAuthenticated) {
        return <Navigate to='/login'/>
    }

    return children ? children : <Outlet /> 
}