import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.access_token);
  const { state } = useLocation();

  return !isAuth ? children : <Navigate to={state ? state : '/'} />;
};
