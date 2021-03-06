export const getAllPatients = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PATIENTS"})
        fetch("http://localhost:3001/patients")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_PATIENTS", patients: response}))
        
    }
}

export const addPatient = (patient) => {
    
    return (dispatch) => {
        fetch("http://localhost:3001/patients", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                patient: patient
            })
        })
        .then(response => response.json())
        .then(response => dispatch({type: "ADD_PATIENT", patient: response}))
    }
}

export const deletePatient = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/patients/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(response => dispatch({type: "DELETE_PATIENT", patient: response}))
    }

}

// export const findPatient = (e) => {
//     return (dispatch) => {
//         dispatch({type: "FIND_PATIENT", patient: e})
//     }
// }