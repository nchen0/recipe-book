import React, { Component, createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [loginData, setLogin] = useState({
    loggedIn: false
  });
  const [clickRegister, setClickRegister] = useState(false);

  return (
    <AuthContext.Provider value={{ loginData, setLogin }}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
