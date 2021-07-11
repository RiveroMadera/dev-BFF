import Home from '../containers/Home';
import Player from '../containers/Player';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';


const serverRoutes = (isLogged) => [
  {
    path: '/',
    exact: true,
    component: isLogged ? Home : Login,
  },
  {
    path: '/player/:id',
    exact: true,
    component: isLogged ? Player : Login,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    name: 'NotFound',
    component: NotFount,
  },
]

export default serverRoutes;
