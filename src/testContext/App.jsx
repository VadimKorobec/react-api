import React, { useState } from 'react';
import { Alert } from './Alert';
import { Main } from './Main';

export const Context = React.createContext();

export const App = () => {
  const [toggleAlert, setToggleAlert] = useState(false);
  return (
    <Context.Provider
      value={{ toggleValue: toggleAlert, toggle: setToggleAlert }}
    >
      <div className="container pt-2">
        <Alert />
        <Main />
      </div>
    </Context.Provider>
  );
};
