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
            // const hospitals = state.hospitals.filter(hospital => hospital.id === action.id)
            // const patients = hospitals.patients.slice(0, action.hospital)
            const hospitals = state.hospitals.filter(hospital => hospital.id !== action.id)
            return{
                // patients,
                // ...state.hospitals.slice(0, action.hospital),
                // ...state.hospitals.slice(action.hospital + 1)
                ...state,
                hospitals 
            }
        default:
            return state;
    }
}

// need to find nested patients array from hospitals 

export default hospitalReducer