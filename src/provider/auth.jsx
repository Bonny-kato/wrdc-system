import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
import useLocalStorageState from '../hooks/useLocalStorageState';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [authUser, setAuthUser] = useLocalStorageState('authUser', null);
  const [authToken, setAuthToken] = useLocalStorageState('authToken', null);

  function signOut() {
    setAuthToken(null);
    setAuthUser(null);

    navigate('/login');
  }

  function saveAuthUser(user, token) {
    setAuthToken(token);
    setAuthUser(user);

    navigate(from);
  }

  const value = {
    authUser,
    authToken,
    saveAuthUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}