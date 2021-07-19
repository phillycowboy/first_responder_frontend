import React, {Component} from 'react'
import { connect } from 'react-redux'
import {deletePatient} from '../actions/patientActions'

class Hospital extends Component{
    handleOnClick = () => {
        console.log("props from delete function", this.props.patients)
        this.props.deletePatient(this.props.patients.id)
    }

    render(){
        return(
            <div>
                {this.props.hospitals.map((hospital, id) => (
                    <div key={id}>
                    <h1>{hospital.name}</h1>
                    <h2>{hospital.address}</h2>
                    <h3>{hospital.phone_number}</h3>
                    <span>Patients Currently Administered:</span>
                    {hospital.patients.map((patient, id)=> (
                        <div key={id}>
                            <p>{patient.first_name} {patient.last_name}<button onClick={this.handleOnClick}>X</button></p>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePatient: (patient) => dispatch(deletePatient(patient))
    }
}

export default connect(null, mapDispatchToProps)(Hospital)