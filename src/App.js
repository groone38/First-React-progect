import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./Main/Main.js";
import One from "./Main/One/One";
import Two from "./Main/Two/Two";


function App() {
  return (
    <>
    <Router>
      <div className="content">
      <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/One" component={One} />
          <Route path="/Two" component={Two} />
        </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
