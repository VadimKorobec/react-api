import React, { useContext, useState } from 'react';

const ContextAlert = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextAlert);
};

export const Context = ({ children }) => {
  const [toggleAlert, setToggleAlert] = useState(false);
  const [news, setNews] = useState([]);

  return (
    <ContextAlert.Provider
      value={{
        toggleValue: toggleAlert,
        toggle: setToggleAlert,
        news: news,
        setNews: setNews,
      }}
    >
      {children}
    </ContextAlert.Provider>
  );
};
