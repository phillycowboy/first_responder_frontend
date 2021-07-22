import React, {Component} from 'react'
import PatientForm from '../components/PatientForm'
import {connect} from 'react-redux'

class PatientFormContainer extends Component{
    render(){
        return (
            <div className="patient-form-container">
                <PatientForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        patients: state.patientReducer.patients
    }
}

export default connect(mapStateToProps)(PatientFormContainer)