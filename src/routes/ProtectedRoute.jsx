import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import ROUTES from "./RouteConstants";

function ProtectedRoute({ children }) {
  const location = useLocation();

  const auth = useAuth();

  /*
   * Fail safe:
   * If AuthProvider is missing,
   * don't crash the application.
   */
  if (!auth) {
    return <Navigate to={ROUTES.ROOT} replace />;
  }

  const { isAuthenticated } = auth;

  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTES.ROOT}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;