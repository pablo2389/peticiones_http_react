import { createContext } from "react";

export const PruebaContext = createContext({
  user: { nombre: "", email: "" },
  setUser: () => {},
});
