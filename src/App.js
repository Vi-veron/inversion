import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Register from "./screens/Register";
import Login from "./screens/Login";
import CreateInvestment from "./screens/CreateInvestment";
import Profile from "./screens/Profile";
import Contact from "./screens/Contact";
import ResetPassword from "./screens/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/create-investment" component={CreateInvestment} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/password/reset" component={ResetPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
