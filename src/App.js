import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import CreateInvestment from "./screens/CreateInvestment";
import Success from "./screens/Success";
import Failure from "./screens/Failure";
import Profile from "./screens/Profile";
import MyInvestments from "./screens/MyInvestments";
import Contact from "./screens/Contact";

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
          <Route path="/profile" component={Profile} />
          <Route path="/my-investments" component={MyInvestments} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
