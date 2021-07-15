const hospitalReducer = (state = {hospitals: []}, action) => {
    switch(action.type){
        case "GET_HOSPITALS":
            return {...state, hospitals: action.hospitals}
        default:
            return state;
    }
}

export default hospitalReducer