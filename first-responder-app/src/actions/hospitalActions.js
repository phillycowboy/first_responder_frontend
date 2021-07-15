export const getAllHospitals = () => {
    return (dispatch) => {
        dispatch({type: "GET_HOSPITALS"})
        fetch("http://localhost:3001/hospitals")
        .then(response => response.json())
        .then(response => console.log("all hospitals",response))
    }
}