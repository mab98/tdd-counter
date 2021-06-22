import React from 'react'
import Counter from '../Counter'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('should render header text', () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId('header');
  expect(headerEl.textContent).toBe('My Counter');
})

test('counter initially starts with test of 0', () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId('counter');
  expect(counterEl.textContent).toBe('0');
})

test('input contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe("1");
})

test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  expect(addBtnEl.textContent).toBe("+");
})

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId('subtract-btn');
  expect(subtractBtnEl.textContent).toBe("-");
})

test('change value of input works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');
  expect(inputEl.value).toBe('1');
  fireEvent.change(inputEl, { target: { value: "5" } });
  expect(inputEl.value).toBe('5');
})

test('click on + button adds 1 to counter-value', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  expect(counterEl.textContent).toBe('0');
  fireEvent.click(addBtnEl)
  expect(counterEl.textContent).toBe('1')
})

test('click on - button subtracts 1 from counter-value', () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');
  expect(counterEl.textContent).toBe('0');
  fireEvent.click(subtractBtnEl)
  expect(counterEl.textContent).toBe('-1')
})

test('change input-value and then click on + button adds input-value to counter-value', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  expect(counterEl.textContent).toBe('0');
  expect(inputEl.value).toBe('1');
  fireEvent.change(inputEl, { target: { value: "5" } });
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe('5')
})

test('change input-value and then click on - button subtracts input-value to counter-value', () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  expect(counterEl.textContent).toBe('0');
  expect(inputEl.value).toBe('1');
  fireEvent.change(inputEl, { target: { value: "5" } });
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe('-5')
})

test('adding and then subtracting leads to the correct counter-value', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  const subtractBtnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  fireEvent.change(inputEl, { target: { value: "5" } });
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe('10')
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe('-5')
  fireEvent.change(inputEl, { target: { value: "-1" } });
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe('-7')
})

test('counter-value-classname becomes green for value over 99 and red for value below -99', () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId('add-btn');
  const subtractBtnEl = getByTestId('subtract-btn');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  expect(counterEl.className).toBe('');
  fireEvent.change(inputEl, {
    target
      : { value: "50" }
  });
  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  expect(counterEl.className).toBe('green')
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe('')
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe('red')
})

