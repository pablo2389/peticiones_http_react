import axios from 'axios'

// Aquí colocamos la URL base del servidor de backend
// que luego utilizaremos para construir la URL completa
// junto al endpoint
const baseURL = `http://miblog.inovecode.com/api/v1.0`;

// Cremos un cliente que utilice esa URL base
export const client = axios.create({
    baseURL: baseURL,
});


export const updateToken = (newToken) => {
  sessionStorage.setItem('token', newToken);
}

export const removeToken = () => {
  sessionStorage.removeItem('token');
}
