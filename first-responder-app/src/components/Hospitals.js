import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Timer from './Timer'
import moment from 'moment'



class Hospital extends Component{
    constructor(props){
        super(props);
        this.state = {
            like: 0
        }
    }

    handleClick = (e) => {
        console.log("liked")
        this.setState(prevState => {
            return{
                like: prevState.like + this.props.likedAmount  

            }
        })
    }

    render(){
        return(
            <div>
                {this.props.hospitals.map((hospital, id) => (
                    <div key={id}>
                    <h1>{hospital.name}</h1>
                    <h2>{hospital.address}</h2>
                    <h3>{hospital.phone_number}</h3>
                    <span>Patients Currently Admitted:</span><br/><br/>
                    {this.props.patients.filter((patient)=> ( patient.hospital_id === hospital.id)).map((patient, id) => (

                        <div key={id} className="patient-card">
                            <Link to={{pathname:`/patients/${patient.id}`}}><p>{patient.first_name} {patient.last_name}</p></Link>
                            <div>Patient Arrival Time: {patient.arrival_time}</div>
                            {/* <div>Patient Arrival Date: {patient.date_of_arrival}</div> */}
                            <div>Patient Arrival Time: </div>{moment(patient.date_of_arrival).format("MMM Do YY")}<br/>
                            {/* <Timer /> */}
                            
                            {this.state.like}<br/>
                            <button onClick={this.handleClick}>Like</button>
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        )

    }
}


export default Hospital