export const getAllPatients = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PATIENTS"})
        fetch("http://localhost:3001/patients")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_PATIENTS", patients: response}))
        // .then(response => console.log("all patients",response))
    }
}