import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'
import HospitalContainer from './containers/HospitalContainer'
import PatientContainer from './containers/PatientContainer'
import PatientFormContainer from './containers/PatientFormContainer'
import {connect} from 'react-redux'

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
          <Route exact path="/hospitals">
            <HospitalContainer />
          </Route>
          <Route exact path="/patients">
            <PatientContainer />
          </Route>
          <Route exact path="/patient-form">
            <PatientFormContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
