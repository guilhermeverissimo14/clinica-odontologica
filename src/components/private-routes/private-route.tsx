import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ path, element, isAuthenticated }) {
  // Se o usuário estiver autenticado, renderize o elemento, caso contrário, redirecione para a página de login
  return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/" />;
}

export default PrivateRoute;