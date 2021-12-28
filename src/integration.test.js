import { storeFactory } from "../test/testUtil";
import { guessWord } from './actions';

describe("dispatcher", () => {
    const secretWord = 'party';
    const unsuccessfullGuess = 'train';
        describe("no", () => {
            let store;
            const initialState = { secretWord };
            beforeEach(() => {
                store = storeFactory(initialState);
            })
            test("", () => {
                store.dispatch(guessWord(unsuccessfullGuess));
                const expectedState = {
                    ...initialState,
                    success:false,
                    guessWords: [{
                        guessWords: unsuccessfullGuess,
                        letterMatchCount: 3
                    }]
                }
            });
            test("", () => {});
            test("", () => {});
    })
    describe("sum", () => {
        test("", () => {});
        test("", () => {});
        test("", () => {});
    });
});

// import { storeFactory } from '../test/testUtils';
// import { guessWord } from './actions';
// import { setUserSecretWord } from './actions';
// import { storeFactory } from "../test/testUtil";
// import { guessWord } from './actions';

// /* Challenge #3 NOTE: 
//    It's a sign that these tests weren't optimally designed that we had to
//    `giveUp: false` to every `expectedState`. How would you refactor the tests to
//    be more robust when adding new pieces of state? 
// */

// describe('guessWord action dispatcher', () => {
//   const secretWord = 'party';
//   const unsuccessfulGuess = 'train';
//   describe('no guessed words', () => {
//     let store;
//     const initialState = { secretWord };
//     beforeEach(() => {
//       store = storeFactory(initialState);
//     });
//     test('updates state correctly for unsuccessful guess', () => {
//       store.dispatch(guessWord(unsuccessfulGuess));
//       const newState = store.getState()
//       const expectedState = {
//         ...initialState,
//         success: false,
//         // Challenge #3, 4 and 5
//         gaveUp: false,
//         userEnter: null,
//         serverError: false,
//         // END: Challenge #3, 4 and 5
//         guessedWords: [{
//           guessedWord: unsuccessfulGuess,
//           letterMatchCount: 3
//         }]
//       };
//       expect(newState).toEqual(expectedState);
//     });
//     test('updates state correctly for successful guess', () => {
//       store.dispatch(guessWord(secretWord));
//       const newState = store.getState()
//       const expectedState = {
//         secretWord,
//         success: true,
//         // Challenge #3, 4 and 5
//         gaveUp: false,
//         userEnter: null,
//         serverError: false,
//         // END: Challenge #3, 4 and 5
//         guessedWords: [{
//           guessedWord: secretWord,
//           letterMatchCount: 5,
//         }],
//       };
//       expect(newState).toEqual(expectedState);
//     });
//   });
//   describe('some guessed words', () => {
//     const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 } ];
//     const initialState = { guessedWords, secretWord }
//     let store;
//     beforeEach(() => {
//       store = storeFactory(initialState);
//     })
//     test('updates state correctly for unsuccessful guess', () => {
//       store.dispatch(guessWord(unsuccessfulGuess));
//       const newState = store.getState();
//       const expectedState = {
//         secretWord,
//         success: false,
//         // Challenge #3, 4 and 5
//         gaveUp: false,
//         userEnter: null,
//         serverError: false,
//         // END: Challenge #3, 4 and 5
//         guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
//       };
//       expect(newState).toEqual(expectedState);
//     });
//     test('updates state correctly for successful guess', () => {
//       store.dispatch(guessWord(secretWord));
//       const newState = store.getState();
//       const expectedState = {
//         secretWord,
//         success: true,
//         // Challenge #3, 4 and 5
//         gaveUp: false,
//         userEnter: null,
//         serverError: false,
//         // END: Challenge #3, 4 and 5
//         guessedWords: [...guessedWords,
//           { guessedWord: secretWord, letterMatchCount: 5 }]
//       };
//       expect(newState).toEqual(expectedState);
//     });
//   });
// });

// // Challenge #4: Enter Secret Word
// describe('setUserSecretWord action dispatcher', () => {
//   // this is in the integration test section because it
//   // involves the setUserSecretWord action creator and two reducers
//   let store;
//   let newState;
  
//   // this represents the word the user entered
//   const userSecretWord = 'lunch';

//   // this represents the word we got from the server
//   const initialState = { secretWord: 'party' };

//   // here I will run the action in the beforeEach, and
//   // check on each relevant piece of state separately
//   beforeEach(() => {
//     store = storeFactory(initialState);
//     store.dispatch(setUserSecretWord(userSecretWord));
//     newState = store.getState();
//   });

//   test('updates `secretWord` state correctly after entered word', () => {
//     expect(newState.secretWord).toBe(userSecretWord);
//   });
//   test('updates `userEnter` state correctly after entered word', () => {
//     expect(newState.userEnter).toBe('done');
//   });
// });
// // END: Challenge #4: Enter Secret Word


// import React from 'react'; 
// import lightLogo from './../assets/medium_light.png'; 
// import darkLogo from './../assets/medium_dark.png'; 
// export const themeConfig = {
//     light: {
//         headerBg: '#F7B30C', 
//         fontColor: 'black', 
//         bodybg: 'white', 
//         logo: lightLogo
//     }, 
//     dark: {         headerBg: '#3c3c3c',         fontColor: 'white',         bodybg: 'black',         logo: darkLogo     } }; 
    
//     const ThemeContext = React.createContext(themeConfig.light); 
//     export default ThemeContext;


// import React, { Component } from 'react'; 
// import Header from './Header.component'; 
// import Body from './Body.component'; 
// import ThemeContext from './context/ThemeContext'; 
// import {themeConfig} from './context/ThemeContext'; 
// class App extends Component {   
//     constructor() {     
//         super();     
//         this.state = {       
//             theme: 'light'     
//         }     
//         this.toggleTheme = this.toggleTheme.bind(this);   
//     }   
//     toggleTheme(newTheme) {     
//         this.setState({       theme: newTheme     });   
//     }   render() {     
//         return (       
//             <ThemeContext.Provider value={themeConfig[this.state.theme]}}>         
//             <Header toggleTheme={this.toggleTheme}/>         <Body/>       
//             </ThemeContext.Provider>     );   } } 
//             export default App;