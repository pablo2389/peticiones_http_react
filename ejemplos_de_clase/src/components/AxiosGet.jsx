import { useState } from "react";
import axios from "axios";

const AxiosGet = () => {
  const [data, setData] = useState({});

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert(`Error al ejecutar la petición: ${error.response.status}`);
      });
  };

  return (
    <div style={{ maxWidth: "600px", padding: "50px", fontSize: "28px" }}>
      <button onClick={() => getUser()}>Obtener datos</button>
      <ul style={{ textAlign: "start", color: "white" }}>
        <li>userId: {data.userId ? data.userId : "No data"}</li>
        <li>id: {data.id ? data.id : "No data "}</li>
        <li>title: {data.title ? data.title : "No data"}</li>
        <li>completed: {data.completed ? "Completado" : "Incompleto"}</li>
      </ul>
    </div>
  );
};
export default AxiosGet;
