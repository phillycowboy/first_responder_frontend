const hospitalReducer = (state = {hospitals: [], loading: false}, action) => {
    console.log("state from hospitalRedcer", state.hospitals)
    switch(action.type){
        case "LOADING_HOSPITALS":
            return {
                ...state,
                hospitals: [...state.hospitals],
                loading: true
            }
        case "GET_HOSPITALS":
            return {
                ...state, 
                hospitals: action.hospitals,
                loading: false
            }
        case "DELETE_PATIENT_FROM_HOSPITAL":
            const hospitals = state.hospitals.patients.filter(patient => patient.id !== action.patient.id)
            return{
                ...state,
                hospitals 
            }
        default:
            return state;
    }
}

// need to find nested patients array from hospitals 

export default hospitalReducer