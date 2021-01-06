import logo from './logo.svg';
import './App.css';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
