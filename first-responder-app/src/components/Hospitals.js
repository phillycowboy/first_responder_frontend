import React, {Component} from 'react'
// import { connect } from 'react-redux'
// import {deletePatient} from '../actions/patientActions'

class Hospital extends Component{
    // handleOnClick = (id) => {
    //     console.log("props from delete function", this.props.patients.id)
    //     this.props.deletePatient(id)
    // }

    render(){
        return(
            <div>
                {this.props.hospitals.map((hospital, id) => (
                    <div key={id}>
                    <h1>{hospital.name}</h1>
                    <h2>{hospital.address}</h2>
                    <h3>{hospital.phone_number}</h3>
                    <span>Patients Currently Administered:</span>
                    {this.props.patients.filter((patient)=> ( patient.hospital_id === hospital.id)).map((patient, id) => (

                        <div key={id}>
                            <p>{patient.first_name} {patient.last_name}</p>
                            {/* <button onClick={() => this.handleOnClick(patient.id)}>X</button></p> */}
                            {/* DELETE PATIENT */}
                            {/* add delete button that has a function that dispatches an action, and talks to a reducer, need to connect to store */}
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        )

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletePatient: (patient) => dispatch(deletePatient(patient))
//         // need to make an action to delete a patient from hospitalReducer, it is deleting from patientsReducer
//     }
// }

// const mapStateToProps = (state) => {
//     return{
//         patients: state.patientReducer.patients
//     }
// }

export default Hospital