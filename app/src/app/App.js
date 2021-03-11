import routes from '../app/config/routes'
import Home from './containers/Home';
import Items from './containers/Items';
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.items} component={Items} />
      </Switch>
    </Router>
  );
}

export default App;
