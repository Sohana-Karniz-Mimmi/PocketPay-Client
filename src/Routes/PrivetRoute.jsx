import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../AuthProvider/AuthProvider";

function ProtectedRoute({ children }) {
    const { currentUser, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center mt-10">

                <div className="flex items-center justify-center space-x-2 h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#FD4C5C]"></div>
                </div>

            </div>
        );
    }
    if (!currentUser) {
        return <Navigate to="/login" state={location.pathname}></Navigate>;
    }
    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;