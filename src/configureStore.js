// import { createStore, applyMiddleware } from "redux";
// import rootReducer from './reducers';
// import ReduxThunk from 'redux-thunk';

// export const middleware = [ReduxThunk];
// // export default createStore(rootReducer, {}, applyMiddleware(...middleware));
// export default createStore(rootReducer);


import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];

export default createStore(rootReducer, {}, applyMiddleware(...middlewares));
