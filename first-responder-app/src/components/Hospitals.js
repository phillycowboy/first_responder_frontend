import React, {Component} from 'react'

class Hospital extends Component{
    render(){
        console.log(this.props.hospitals)
        return(
            <div>
                {this.props.hospitals.map((hospital, id) => (
                    <div key={id}>
                    <h1>{hospital.name}</h1>
                    <h2>{hospital.address}</h2>
                    <h3>{hospital.phone_number}</h3>
                    <span>Patients Currently Administered:</span>
                    {hospital.patients.map((patient, id)=> (
                        <div>
                            <p>{patient.first_name} {patient.last_name}</p>
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

export default Hospital