import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, password, ...rest }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' />;
  }

  const storedPassword = localStorage.getItem('password');

  if (password !== storedPassword) {
    return <Navigate to='/login' />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;