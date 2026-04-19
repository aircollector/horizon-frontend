import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [urlData, setUrlData] = useState("");
  const [data, setData] = useState({});
  const [examination, setExamination] = useState("");
  const [myAnswer, setMyAnswer] = useState(0);

  const secData = {};
  return (
    <MyContext.Provider
      value={{
        value,
        setValue,
        urlData,
        setUrlData,
        data,
        setData,
        secData,
        examination,
        setExamination,
        myAnswer,
        setMyAnswer,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
