import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import CreateProfile from './views/CreateProfile/CreateProfile';
import Edit from './views/Edit/Edit';
import Register from './views/Register/Register';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/create-profile">
          <CreateProfile />
        </Route>
        <Route exact path="/edit">
          <Edit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
