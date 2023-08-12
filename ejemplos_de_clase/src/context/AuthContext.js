import { createContext } from 'react';

const defaultValue = {
    auth: false,
    userName: ""
}

export const AuthContext = createContext(defaultValue);

export function initAutenticacion() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    console.log(`autenticación almacenada: ${isAuthenticated}`)
    return Boolean(isAuthenticated);  // FOrzar que el dato sea interpretado como true/false (boolean)
  }
  
  export function initUser() {
    const userName = sessionStorage.getItem('userName');
    console.log(`userName almacenado: ${userName}`)
    return String(userName); // Forzar que el dato sea interpretado como string
  }
