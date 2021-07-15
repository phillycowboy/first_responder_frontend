import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import AboutContainer from './containers/AboutContainer'
import ContactContainer from './containers/ContactContainer'
import HospitalContainer from './containers/HospitalContainer'
import PatientContainer from './containers/PatientContainer'
import PatientFormContainer from './containers/PatientFormContainer'
import {connect} from 'react-redux'
import {getAllHospitals} from './actions/hospitalActions'
// import Contact from './components/Contact';

class App extends Component{

      componentDidMount(){
        console.log(this.props)
        this.props.getAllHospitals()
    }

  render(){
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

}
// const mapStateToProps = (state) => {
//   console.log("mapstate state",state)
//     return {
//       hospitals: state.hospitalReducer.hospitals,
//       loading: state.loading
//     }
//   }

const mapDispatchToProps = (dispatch) => {
    return{
        getAllHospitals: () => dispatch(getAllHospitals())
    }
}

export default connect(null, mapDispatchToProps)(App);
