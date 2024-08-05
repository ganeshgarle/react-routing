import React, { useState, createContext } from "react";

export const CounterContext = createContext();
export const UserContext = createContext();
export const UserProvider = (props) => {
  const userDetails = {
    name: "user name",
    id: 12,
    isAdmin: true,
  };
  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
};
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
