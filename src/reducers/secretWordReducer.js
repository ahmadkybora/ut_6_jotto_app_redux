import { actionTypes, SET_SECRE_WORD } from "../actions";

export default (state = '', action) => {
    switch(action.type) {
        case SET_SECRE_WORD:
            return action.payload;
        default:
            return state;
    }
}