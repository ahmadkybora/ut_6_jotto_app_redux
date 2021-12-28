import axios from "axios";

export const actionTypes = ({
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
    SET_SECRE_WORD: "SET_SECRE_WORD"
});

export const CORRECT_GUESS = "CORRECT_GUESS";
export const GUESS_WORD = "GUESS_WORD";
export const SET_SECRE_WORD = "SET_SECRE_WORD";

export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {

    }
}

// این یک اکشن است
export function correctGuess() {
    return {
        type: actionTypes.CORRECT_GUESS
    }
}

// return redux thunk function that initites an axios request 
// and dispatches the response as a 'SET_SECRE_WORD' action
// تابع redux thunk را برگرداند که درخواست axios را آغاز می کند
// و پاسخ را به عنوان یک عمل "SET_SECRE_WORD" ارسال می کند

// export const getSecretWord = () => {
//     return axios.get('http://localhost:3030')
//         .then(res => res.data)
// }

export const getSecretWord = () => {
    return function(dispatch) {
        return axios.get('http://localhost:3030')
            .then(response => {
                dispatch({
                    type: SET_SECRE_WORD,
                    payload: response.data
                });
            });
        }
}