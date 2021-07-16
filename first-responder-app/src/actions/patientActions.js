export const getAllPatients = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PATIENTS"})
        fetch("http://localhost:3001/patients")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_PATIENTS", patients: response}))
        // .then(response => console.log("all patients",response))
    }
}

export const addPatient = (patient) => {
    console.log("patient from action", patient)
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