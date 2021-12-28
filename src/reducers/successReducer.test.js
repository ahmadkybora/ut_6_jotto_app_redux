import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("return false", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
})

test("action type", () => {
    const newState = successReducer(false, { type: 'unknown' });
    expect(newState).toBe(false);
})

test("CURRECT_GUESS", () => {
    const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
})