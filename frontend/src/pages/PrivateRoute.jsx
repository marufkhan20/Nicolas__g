import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const user = useAuth();

  return user?._id ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
