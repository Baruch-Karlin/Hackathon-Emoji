import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Upload from "./components/Upload";
import PrevResults from "./components/PrevResults";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/prev_results">
            <PrevResults />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
