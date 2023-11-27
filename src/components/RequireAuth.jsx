import { Outlet } from "react-router-dom";

const RequireAuth = ({allowedRoles, children}) => {
    return children ? children : <Outlet />;
}


export default RequireAuth