import App from './App'
import { mount } from "enzyme"
import { findByTestAttr, storeFactory } from '../test/testUtil';

// activate global mock to make sure getSecretWord doesnt make network call 
// برای اطمینان از اینکه getSecretWord تماس شبکه ای برقرار نمی کند، mock جهانی را فعال کنید
jest.mock('./actions');

import { getSecretWord as mockGetSecretWord } from './actions'
import { Provider } from 'react-redux';

// هوک useEffect نمیتواند بوسیله متد shallow تست شود و باید کامپوننت mount شود
const setup = () => {
    const store = storeFactory();
    return mount(<Provider store={store}><App /></Provider>)
    // return mount(<App />);
}

test("-1", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent).toHaveLength(1);
});

describe.skip("0", () => {
    beforeEach(() => {
        // متد زیر داده ها را پاک میکند
        // mockGetSecretWord.mockClear();
    })
    test("1", () => {
        const wrapper = setup();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })
    test("2", () => {
        const wrapper = setup();
        // mockGetSecretWord.mockClear();
        
        wrapper.setProps();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
    })
})