import React, { createContext } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { KindeContextProps } from '@kinde-oss/kinde-auth-react/dist/types/state/KindeContext';

export interface IAuthContext extends KindeContextProps {
  loginHandler: () => void;
  logoutHandler: () => void;
  registerHandler: () => void;
}

export const AuthContext = createContext<IAuthContext>(null);

function AuthContextProvider({ children }) {
  const auth = useKindeAuth();

  function loginHandler() {
    auth.login().then((res) => {
      console.log('LOGIN: ', res);
    });
  }

  function logoutHandler() {
    auth.logout().then((res) => {
      console.log('LOGOUT: ', res);
    });
  }

  function registerHandler() {
    auth.register().then((res) => {
      console.log('REGISTER: ', res);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        loginHandler,
        logoutHandler,
        registerHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
