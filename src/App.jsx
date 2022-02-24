import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import ProfileForm from './views/ProfileForm/ProfileForm';
import Home from './views/Home/Home';
import UserProfile from './views/UserProfile/UserProfile';
import { UserProvider } from './context/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth isSigningUp />
          </Route>
          <Route exact path="/confirm-email">
            <ConfirmEmail />
          </Route>
          <PrivateRoute exact path="/profile">
            <UserProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/create">
            <ProfileForm isCreating />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/edit">
            <ProfileForm />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}
