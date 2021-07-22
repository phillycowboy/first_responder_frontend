import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Timer from './Timer'



class Hospital extends Component{



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
                            {/* <Timer /> */}
                            
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        )

    }
}


export default Hospital