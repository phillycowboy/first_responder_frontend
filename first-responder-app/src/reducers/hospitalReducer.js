const hospitalReducer = (state = {hospitals: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_HOSPITALS":
            return {
                ...state,
                hospitals: [...state.hospitals],
                loading: true
            }
        case "GET_HOSPITALS":
            return {...state, hospitals: action.hospitals, loading: false}
        default:
            return state;
    }
}

export default hospitalReducer