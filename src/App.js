import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/home";
import Dashboard from "./screens/dashboard";
import Signup from "./screens/signup";
import Login from "./screens/login";
import CreateInvestment from "./screens/createinvestment";
import Success from "./screens/success";
import Failure from "./screens/failure";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create-investment" component={CreateInvestment} />
          <Route path="/success" component={Success} />
          <Route path="/failure" component={Failure} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
