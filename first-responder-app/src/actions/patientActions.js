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
    return (dispatch) => {
        fetch("http://localhost:3001/patients", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                patient
            })
        })
        .then(response => response.json())
        .then(response => console.log(response))
    }
}