import React from 'react';
import { useState } from 'react';

export const Counter = () => {
  const [total, setTotal] = useState(0);

  const handleClickPlus = () => {
    setTotal(total + 1);
  };

  const handleClickMinus = () => {
    if (total === 0) {
      return;
    }
    setTotal(total - 1);
  };
  return (
    <div>
      <button type="button" onClick={handleClickPlus}>
        Plus
      </button>
      <p>{total}</p>
      <button type="button" onClick={handleClickMinus}>
        Minus
      </button>
    </div>
  );
};
