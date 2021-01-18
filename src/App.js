import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/library">
            <Library/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
