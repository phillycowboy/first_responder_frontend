import React from 'react'

const Hospital = (props) => {
    console.log(props)
    return(
        <div>
            {props.hospitals.map((hospital, id) => (
                <div key={id}>
                <h1>{hospital.name}</h1>
                <h2>{hospital.address}</h2>
                <h3>{hospital.phone_number}</h3>
                <span>Patients Currently Administered:</span>
                {hospital.patients.map((patient, id)=> (
                    <div>
                        <p>{patient.first_name} {patient.last_name}</p>
                    </div>
                ))}
                </div>
            ))}
        </div>
    )
}

export default Hospital