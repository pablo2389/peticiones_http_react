import React, { useState, useEffect } from 'react';
import { PruebaContext } from './context/PruebaContext';
import AppRouter from './routes/AppRouter';

function App() {
  const [user, setUser] = useState({ nombre: "", email: "" });

  // Cargar el usuario del localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Guardar el usuario en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(user));
  }, [user]);

  return (
    <PruebaContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </PruebaContext.Provider>
  );
}

export default App;
