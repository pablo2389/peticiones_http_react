export const getToken = () => {
  const token = sessionStorage.getItem('token');
  console.log(`token disponible: ${token}`)
  return String(token); // Forzar que el dato sea interpretado como string
}
  
export const setToken = (token) => {
  console.log(`token almacenado: ${token}`)
  sessionStorage.setItem('token', token);
}
  
export const removeToken = () => {
  sessionStorage.removeItem('token');
}