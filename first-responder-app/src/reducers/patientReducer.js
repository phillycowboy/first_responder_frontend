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
        case "DELETE_PATIENT":
            console.log('delete action', action)
            const patients = state.patients.filter(patient => patient.id !== action.patient.id)
            return{
                ...state,
                patients 
            }
        default:
            return state
    }
}
export default patientReducer