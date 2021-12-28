import { combineReducers } from "redux";
import success from './successReducer';
import gussed from './gussedWordsReducer';
import secret from './secretWordReducer';

// reducers باید یک آبجکت باشد
export default combineReducers({
    secret,
    success,
    gussed,
});

// export default combineReducers = () => {
//     success
// }

// export default combineReducers = combineReducers({
//     success
// })
