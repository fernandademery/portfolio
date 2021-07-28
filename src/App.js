import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import BackToTop from "./components/BackToTop/index";
import Home from "./components/Home/index";
import { Projects } from "./components/Projects/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BackToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
