import routes from '../app/config/routes'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Containers
import Home from './containers/Home';
import Items from './containers/Items';
import Product from './containers/Product';

//Styles
import './App.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.items} component={Items} />
        <Route exact path={routes.product} component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
