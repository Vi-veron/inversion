import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import Signup from "./screens/signup";
import Login from "./screens/login";
import CreateApplication from "./screens/createapplication";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/register" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/createapplication"
            exact
            component={CreateApplication}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
