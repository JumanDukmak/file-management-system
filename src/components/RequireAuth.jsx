import storage from "../utils/storage";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({allowedRoles}) => {
    const role = storage.getRole();
    return (
        allowedRoles.includes(role)
        ? <Outlet />
        : <Navigate to="/login" />
    )
}

export default RequireAuth