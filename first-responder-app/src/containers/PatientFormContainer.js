import React, {Component} from 'react'
import PatientForm from '../components/PatientForm'
import {connect} from 'react-redux'

class PatientFormContainer extends Component{
    render(){
        return (
            <div>
                <PatientForm />
            </div>
        )
    }
}

// mapStateToProps for Patient Form
const mapStateToProps = (state) => {
    return{
        patients: state.patientReducer.patients
    }
}

export default connect(mapStateToProps)(PatientFormContainer)