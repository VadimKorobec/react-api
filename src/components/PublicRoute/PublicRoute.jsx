import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.access_token);

  return !isAuth ? children : <Navigate to="/" />;
};
