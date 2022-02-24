import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import CreateProfile from './views/CreateProfile/CreateProfile';
import Edit from './views/Edit/Edit';
import Register from './views/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ConfirmEmail from './views/Auth/ConfirmEmail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Auth isSigningUp />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/confirm-email">
          <ConfirmEmail />
        </Route>
        <PrivateRoute exact path="/create-profile">
          <CreateProfile />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/profile/edit">
          <Edit />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
