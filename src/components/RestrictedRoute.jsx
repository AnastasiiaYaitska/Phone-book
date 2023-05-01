import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selecros';

const RestrictedRoute = ({ redirectTo = '/', component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
  //Otherwise render the component

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
