import React, { useContext, useState } from "react";

const GlobalContext = React.createContext<any>({});

export const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
  const [langState, setLangState] = useState(
    localStorage.getItem("i18nextLng")
  );

  return (
    <GlobalContext.Provider value={{ langState, setLangState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};
