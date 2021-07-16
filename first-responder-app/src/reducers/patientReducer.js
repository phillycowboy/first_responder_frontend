const patientReducer = (state = {patients: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_PATIENTS":
            return{
                ...state,
                patients: [...state.patients],
                loading: true
            }
        case "GET_PATIENTS":
            return{
                ...state, 
                patients: action.patients,
                loading: false
            }
        case "ADD_PATIENT":
            return{
                ...state,
                patients: [...state.patients, action.patient]
            }
        default:
            return state
    }
}
export default patientReducer