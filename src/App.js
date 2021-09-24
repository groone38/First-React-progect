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
import Chat from './Main/Chat/Chat';


function App() {
  return (
    <>
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/One" component={One} />
          <Route path="/Two" component={Two} />
          <Route path="/Chat" component={Chat} />
        </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
