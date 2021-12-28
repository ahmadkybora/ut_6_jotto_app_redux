import moxios from "moxios";
import { getSecretWord, correctGuess, actionTypes } from './';
import { storeFactory } from '../../test/testUtil';

describe("correctGuess", () => {
    test("return action correctGuess", () => {
        const action = correctGuess();
        expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
    })
});

describe("getSecretWord", () => {
    // تنظیمات اولیه مورد نیاز را اینجا انجام میدهیم
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test("secredWord is returned", () => {
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party'
            })
        });
        return store.dispatch(getSecretWord())
            .then(() => {
                const secretWord = store.getState().secretWord;
                expect(secretWord).toBe('party');
            })
        // return getSecretWord()
        //     .then((secretWord) => {
        //         expect(secretWord).toBe('party');
        //     })
    })  
})