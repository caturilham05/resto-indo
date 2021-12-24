import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* navbar to use all components */}
      <Navbar />
      {/* Switch */}
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
