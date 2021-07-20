import React from 'react'
import { connect } from 'react-redux'
// import Patients from './components/Patients'

const PatientShow = (props) => {
    console.log("PatientShow", props)
    const patient = props.patients.find((patient) => patient.id === props.match.params.id)
    // console.log("this is the patient from Patient show", this.patient)
    return (
        <div>
            {patient}
            {/* {props.patients.map((p) => (
                p.first_name
            ))} */}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("patients in patient show", state)
    return {
        patients: state.patientReducer.patients
    }
}

export default connect(mapStateToProps)(PatientShow)