import * as React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid='counter'>{counterValue}</h2>
      <button data-testid='subtract-btn'>-</button>
      <input style={{ textAlign: 'center' }} data-testid='input' type="number" defaultValue={inputValue} />
      <button data-testid='add-btn'>+</button>
    </div>
  )
}

export default Counter
