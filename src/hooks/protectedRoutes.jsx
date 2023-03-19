import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' />;
  }

  const coderToken = localStorage.getItem('coderToken');

  if (coderToken === null) {
    return <Navigate to='/login' />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;