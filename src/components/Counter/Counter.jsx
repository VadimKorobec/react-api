import React from 'react';
import { useState } from 'react';

export const Counter = () => {
  const [total, setTotal] = useState(0);

  const handleClickPlus = () => {
    setTotal(total + 1);
  };

  const handleClickMinus = () => {
    setTotal(total - 1);
  };
  return <div></div>;
};
