export const getAllHospitals = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_HOSPITALS"})
        fetch("http://localhost:3001/hospitals")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_HOSPITALS", hospitals: response}))
    }
}

// make fetch DELETE to delete patients from hospitals 