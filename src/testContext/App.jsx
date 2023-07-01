import React from 'react';
import { Alert } from './Alert';
import { Main } from './Main';
import { Context } from './Context/Context';

export const App = () => {
  return (
    <Context>
      <div className="container pt-2">
        <Alert />
        <Main />
      </div>
    </Context>
  );
};
