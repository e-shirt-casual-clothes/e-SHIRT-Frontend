import { createContext } from 'react';
import api from '../services/api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ signed: true, login }}>
      {children}
    </AuthContext.Provider>
  );
};

async function login(){
  const response = await api.post ('/login', {
    email: 'admin@admin.admin',
    password: 'admin',
  });
  console.log(response)
}
export default AuthContext;
