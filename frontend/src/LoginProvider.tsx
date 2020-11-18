import React, { useState, createContext, useContext } from 'react';

interface ILoginStatus {
  isLogged: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const existsToken = () =>
  localStorage.getItem('x-access-token') ? true : false;

const LoginContext = createContext<ILoginStatus | null>(null);
export const useLogin = () => useContext(LoginContext);

const LoginProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() => existsToken());

  const login = (token: string) => {
    localStorage.setItem('x-access-token', token);

    setIsLogged(() => existsToken());
  };

  const logout = () => {
    localStorage.removeItem('x-access-token');

    setIsLogged(() => existsToken());
  };

  return (
    <LoginContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
