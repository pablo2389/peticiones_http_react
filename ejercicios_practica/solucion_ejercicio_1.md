# Solución del ejercicio de práctica
En este archivo encontrará la solución del paso a paso del ejercicio en cuestion. Utilice este archivo como ayuda en caso de quedar bloqueado en algún punto del desafio.

## Consigna: 
Utilizar la API ReqRes para realizar una solicitud GET con Axios y renderizar los datos recibidos utilizando el método map(). Luego, crear un componente para realizar una solicitud POST y mostrar un mensaje indicando si la solicitud fue exitosa o no. Por último, crea un componente que tome los datos del usuario a crear desde un formulario.

Las peticiones se harán a "https://reqres.in/api/users"

Paso a paso:

1. Asegúrate de tener instalado React Router y Axios en tu proyecto. Puedes instalarlos ejecutando los siguientes comandos en tu terminal:

```bash
npm install react-router-dom axios

```

2. Crea tres componentes en la carpeta "components": GetUsers.js, CreateUsers.js y CreateUsersForm.js. Estos componentes serán responsables de mostrar la lista de usuarios, crear un usuario y mostrar un formulario para crear un usuario, respectivamente. Copia y pega el código correspondiente para cada componente.

- GetUsers.jsx

```js
import { useState, useEffect } from "react";
import axios from "axios";

export default function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        alert("An error occurred: ", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <p>
              Name: {user.first_name} {user.last_name} | Email: {user.email}
            </p>
            <img src={user.avatar} alt={user.first_name + "'s foto"} />
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
```

- CreateUsers.jsx

```js
import { useState } from "react";
import axios from "axios";

export default function CreateUsers() {
  const [message, setMessage] = useState("");

  function handleCreateUser() {
    const newUser = {
      name: "Juan Carlos",
      job: "Developer",
    };

    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        setMessage("User created successfully!");
      })
      .catch((error) => {
        setMessage("Failed to create user.");
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Create User</h1>
      <button onClick={handleCreateUser}>Create User</button>
      <p>{message}</p>
    </div>
  );
}
```

- CreateUsersForm.jsx

```js
import React, { useState } from "react";
import axios from "axios";

export default function CreateUsersForm() {
  const [message, setMessage] = useState("");

  function handleReset() {
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      job: e.target.job.value,
    };
    if (!user.name || !user.job) {
      setMessage("Please fill in all the fields.");
      return;
    }

    axios
      .post("https://reqres.in/api/users", user)
      .then((response) => {
        setMessage("User created successfully!");
      })
      .catch((error) => {
        setMessage("Failed to create user.");
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <br />
        <label>
          Job:
          <input type='text' name='job' />
        </label>
        <br />

        <input type='submit' value='Create User' />
        <input type='reset' value='Reset' onClick={handleReset} />
      </form>

      <p>{message}</p>
    </div>
  );
}
```

3. En el archivo App.js, importa los componentes y las dependencias necesarias. Reemplaza el código existente con el siguiente:

```js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import GetUsers from "./components/GetUsers";
import CreateUsers from "./components/CreateUsers";
import CreateUsersForm from "./components/CreateUsersForm";
import "./App.css";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              GetUsers
            </NavLink>
          </li>
          <li>
            <NavLink to='/post' activeClassName='active'>
              CreateUsers
            </NavLink>
          </li>
          <li>
            <NavLink to='/post2' activeClassName='active'>
              CreateUsersForm
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<GetUsers />} />
        <Route path='/post' element={<CreateUsers />} />
        <Route path='/post2' element={<CreateUsersForm />} />
      </Routes>
    </Router>
  );
}

export default App;
```

4. En el archivo index.css, puedes utilizar los estilos proporcionados o personalizarlos según tus preferencias.

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
}

nav ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}

li {
  margin: 10px;
}
a {
  text-decoration: none;
  height: 20%;
  color: blueviolet;
}
a:active {
  color: yellowgreen;
}

.container {
  background-color: blue;
  padding: 20px;
}

label,
input {
  display: inline-block;
  margin: 5px;
}
```

Con estos pasos, has configurado correctamente la aplicación de React para utilizar Axios y React Router. Ahora podrás realizar solicitudes GET y POST a la API y navegar entre diferentes componentes utilizando las rutas definidas.

## Resultado final

![ResultadoFinalPeticiones](peticiones.gif)
