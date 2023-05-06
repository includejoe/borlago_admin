import { Navigate } from "react-router-dom";

import { useAuthContext } from "@contexts/authContext";

interface AuthRouteProps {
  children: React.ReactNode;
  checkAuthenticated: boolean;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  children,
  checkAuthenticated,
}) => {
  const { token } = useAuthContext();

  if (checkAuthenticated) {
    return token ? <>{children}</> : <Navigate to="/login" />;
  } else {
    return token ? <Navigate to="/" /> : <>{children}</>;
  }
};

export default AuthRoute;
