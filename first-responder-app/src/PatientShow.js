import React from 'react'
import { connect } from 'react-redux'
// import Patients from './components/Patients'

const PatientShow = (props) => {
    console.log("PatientShow", props)
    const patient = props.patients.find((patient) => patient.id === parseInt(props.match.params.id, 10))
    console.log("this is the patient from Patient show", patient)
    return (
        <div>
            <h1>{patient.first_name} {patient.last_name}</h1>
            <h3>Gender:{patient.gender} Pronouns:{patient.pronouns}</h3>
            <h4>Heart Rate: {patient.heart_rate}</h4>
            <h4>Blood Pressure: {patient.blood_pressure}</h4>
            <h4>Respiration Rate: {patient.respiration_rate}</h4>
            <h4>Temp: {patient.temperature}</h4>
            <h4>Blood Glucose Level: {patient.blood_glucose_level}</h4>
            <h4>End Tidal: {patient.end_tidal}</h4>
            <h4>Chief Complaint: {patient.chief_complaint}</h4>
            <h4>On Scene Description: {patient.on_scene_description}</h4>
            <h4>Currently Admitted At: {patient.hospital.name}</h4>
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