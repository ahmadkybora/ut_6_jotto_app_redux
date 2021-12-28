import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';

// برای دسترسی به state ها باید یک create Store بسازید به همراه یک initialState وانها راداخل provider بگذارید
import rootReducer from '../src/reducers';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
  // return createStore(rootReducer, initialState)
};

// export const findByTestAttr = (wrapper, val) => {
//     return wrapper.find(`[data-test="${val}"]`);
// }

// export const findByTestName = (wrapper, val) => {
//     return wrapper.find(`${val}`);
// }

// export const findByTestClass = (wrapper, val) => {
//     return wrapper.find(`${val}`);
// }

// export const findByTestId = (wrapper, val) => {
//     return wrapper.find(`${val}`);
// }

// export const checkProps = (component, conformingProps) => {
//     const propError = checkPropTypes(
//         component.propTypes, 
//         conformingProps, 
//         'prop', 
//         component.name);
//     expect(propError).toBeUndefined();
// }

// ---------------------------------------------

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
 export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }
  
  
  /**
   * Assert that expected conforming props conform to propTypes definiton.
   * @param {React.Component} component - React component.
   * @param {object} conformingProps - Object of conforming props.
   * @returns {undefined} - Throws error if props do not conform.
   */
  export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
      component.propTypes,
      conformingProps,
      'prop',
      component.name);
    expect(propError).toBeUndefined();
  }