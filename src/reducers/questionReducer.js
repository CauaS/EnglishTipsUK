import { CHECK, DISABLED} from '../actions/types.js'

const INITIAL_STATE = {
    check: false,
    disabled: false,
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type) {
        case CHECK:
            return {...state, check: action.payload, disabled: true }
        default:
            return state;
    }
    
}