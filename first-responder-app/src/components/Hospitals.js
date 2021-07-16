import React from 'react'

const Hospital = (props) => {
    console.log(props)
    return(
        <div>
            {props.hospitals.map((hospital, id) => (
                <div key={id}>
                <h1>{hospital.name}</h1>
                <h2>{hospital.address}</h2>
                <h3>{hospital.phone_number}</h3><hr/>
                </div>
            ))}
        </div>
    )
}

export default Hospital