import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'
import HospitalContainer from './containers/HospitalContainer'
import PatientContainer from './containers/PatientContainer'
import PatientFormContainer from './containers/PatientFormContainer'
import HomeContainer from './containers/HomeContainer';
import PatientShow from './PatientShow'
import {connect} from 'react-redux'
import {getAllHospitals} from './actions/hospitalActions'
import {getAllPatients} from './actions/patientActions'

class App extends Component{

      componentDidMount(){
        // console.log(this.props)
        this.props.getAllHospitals()
        this.props.getAllPatients()
    }

  render(){
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomeContainer/>
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
            <Route path="/patients/:id" render={(routerProps) => <PatientShow {...routerProps} />}/>
             
            
          </Switch>
        </Router>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
    return{
        getAllHospitals: () => dispatch(getAllHospitals()),
        getAllPatients: () => dispatch(getAllPatients())
    }
}

export default connect(null, mapDispatchToProps)(App);
