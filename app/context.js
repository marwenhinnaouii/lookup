import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);
  AsyncStorage.getItem('loggedin').then(res =>
    res === 'true' ? setLoggedin(true) : setLoggedin(false)
      



      )

  return (
    <LoginContext.Provider
      value={{ loggedin, setLoggedin }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;