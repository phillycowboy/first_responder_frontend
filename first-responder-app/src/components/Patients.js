import React from 'react'

const Patients = (props) => {
    console.log(props)

    return (
        <div>
            {props.patients.map((patient, id) => (
                <div key={id}>
                    <h1>First Name:{patient.first_name}</h1>
                    <h1>Last Name:{patient.last_name}</h1><hr/>
                    <h3>Age:{patient.age}</h3>
                    <h3>Gender:{patient.gender}</h3>
                    <h3>Pronouns:{patient.pronouns}</h3>
                    <h4>Heart Rate:{patient.heart_rate}</h4>
                    <h4>Blood Pressure:{patient.blood_pressure}</h4>
                    <h4>Respiration Rate:{patient.respiration_rate}</h4>
                    <h4>Temperature:{patient.temperature}</h4>
                    <h4>Blood Glucose Level:{patient.blood_glucose_level}</h4>
                    <h4>End Tidal:{patient.end_tidal}</h4>
                    <h4>Chief Complaint:{patient.chief_complaint}</h4>
                    <h4>On Scene Description:{patient.on_scene_description}</h4>
                    <h4>Located at Hospital:{patient.hospital.name}</h4><hr/>
                </div>
            ))}
        </div>
    ) 
}

export default Patients