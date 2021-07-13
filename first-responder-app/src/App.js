
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">

          </Route>
          <Route exact path="/about">
            <AboutContainer />
          </Route>
          <Route exact path="/contact">
            <ContactContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
