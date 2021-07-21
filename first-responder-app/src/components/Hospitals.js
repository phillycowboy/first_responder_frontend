import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import { connect } from 'react-redux'


class Hospital extends Component{

    handleStartTime = () => {
        console.log("This should START the timer")
    }
    handleStopTime = () => {
        console.log("This should STOP the timer")
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
                    {this.props.patients.filter((patient)=> ( patient.hospital_id === hospital.id)).map((patient, id) => (

                        <div key={id}>
                            <Link to={{pathname:`/patients/${patient.id}`}}><p>{patient.first_name} {patient.last_name}</p></Link>
                            {/* this is where you need to add Moment, see how you would make it increment */}
                            <button onClick={this.handleStartTime}>Patient Arrived</button>  <button onClick={this.handleStopTime}>Patient Seen</button>
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        )

    }
}


export default Hospital