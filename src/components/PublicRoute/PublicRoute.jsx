import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.access_token);
  const location = useLocation();
  console.log('location', location);

  return !isAuth ? children : <Navigate to="/" />;
};
