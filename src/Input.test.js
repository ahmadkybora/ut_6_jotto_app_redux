import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtil';

import Input from './Input';
import { Provider } from 'react-redux';

//-------------------------------------------------------
// مهم
// اگر میخواهسد useState را بدون React فراخوانی کنید
// ابتدا بصورت گلوبال یک متغییر بسازید و jest.fn را داخل آن بریزید
// سپس از متد jest.mock استفاده کنید طبق زیر
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual(),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }));
// //-------------------------------------------------------

// اگر میخواهسد useState را بدون React فراخوانی کنید
// ابتدا بصورت گلوبال یک متغییر بسازید و jest.fn را داخل آن بریزید
// سپس از متد jest.mock استفاده کنید طبق زیر
// mock entire module for destructuring useState on import
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))


//-----------------------------------------------------------------------

// but if we want to be able to run use seletor, that hook wont run unless we put the input component inside a redux provider
// and if we do that, we need to mount because if we use shallow, it will  only show us the provider and just give a shell for the input child
// if we want to see whats inside the input child  we need to mount so we get the whole thing
// mock or Provider
// two choices for testing state accessed with useSelector]
// wrap component in provider and use mount

// اما اگر بخواهیم بتوانیم استفاده از سلکتور را اجرا کنیم، آن قلاب اجرا نمی شود مگر اینکه جزء ورودی را در یک ارائه دهنده redux قرار دهیم.
// و اگر این کار را انجام دهیم، باید mount کنیم زیرا اگر از shallow استفاده کنیم، فقط ارائه دهنده را به ما نشان می دهد و فقط یک پوسته برای فرزند ورودی می دهد.
// اگر می‌خواهیم ببینیم چه چیزی در فرزند ورودی وجود دارد، باید آن را سوار کنیم تا همه چیز را دریافت کنیم
// مسخره یا ارائه دهنده
// دو گزینه برای آزمایش وضعیت قابل دسترسی با useSelector]
// کامپوننت را در ارائه دهنده قرار دهید و از mount استفاده کنید


// برای تست کردن کامپوننت
const setup = (initialState={}, secretWord='party') => {
// const setup = (secretWord='party') => {
  // بوسیله روش زیر میتوانیددسترسی رسیدن به state را به کامپوننت مورد نظرتان بدهید
    const store = storeFactory(initialState);
    // return shallow(<Input secretWord={secretWord}/>);
    return mount(<Provider store={store}><Input secretWord={secretWord}/></Provider>);
}

describe('render', () => {
    describe('success is false', () => {
    //   const wrapper = setup();
    //   let wrapper;
    //   beforeEach(() => {
    //     wrapper = setup({ success: false });
    //   })
    //   test('Input renders without error', () => {
    //     const inputComponent = findByTestAttr(wrapper, 'component-input');
    //     expect(inputComponent.length).toBe(1);
    //   });
    //   test('input box displays', () => {
    //     const inputBox = findByTestAttr(wrapper, 'input-box');
    //     expect(inputBox.exists()).toBe(true);
    //   });
        let mockSetCurrentGuess;
        let wrapper;
        beforeEach(() => {
            mockSetCurrentGuess = jest.fn();
            React.useState = () => ["", mockSetCurrentGuess];
            wrapper = setup({ success: false });
        })
      test('display change ', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' } };
    
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
      });
    });
});



// 1 بوسیله این متد می توان یک متد را تست کرد آنرا داخل یک متغییر بریزید
// 2 متد useState را شبیه سازی کنید و مقدار اولیه متغییر را یک رشته خالی انتخاب کنید
// 3 
// 4 
// 5 مقدار تارگت مورد نظر را بوسیله این متد بگیرید
// 6 رویداد چنج را شبیه سازی کنید
// 7  استفاده کنید تا مطمئن شوید که یک تابع ساختگی با آرگومان های خاص فراخوانی شده است
// test('display change ', () => {
//     // let mockSetCurrentGuess = jest.fn(); // 1
//     // React.useState = () => ["", mockSetCurrentGuess]; // 2
//     const wrapper = setup(); // 3
//     const inputBox = findByTestAttr(wrapper, 'input-box'); // 4
//     const mockEvent = { target: { value: 'train' } }; // 5

//     inputBox.simulate("change", mockEvent); // 6
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith('train'); // 7
// });


