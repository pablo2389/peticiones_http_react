import { useState } from "react";
import axios from "axios";

const AxiosGet = () => {
  const [data, setData] = useState(null)

  const getUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log(response);
      setData(response.data)
    })
    .catch((error) => {
      console.error(error);
      alert(`Error al ejecutar la petición: ${error.response.status}`)
    });
  }

  return (
    <div style={{maxWidth: "600px", padding: "50px"}}>
      <button onClick={() => getUser()}>Obtener datos</button>
      <ul style={{ textAlign: "start", color: "white"}}>
        <li>userId: {data? data.userId : "No Data"}</li>
        <li>id: {data? data.id : "No Data"}</li>
        <li>title: {data? data.title : "No Data"}</li>
        <li>completed: {data? String(data.completed) : "No Data"}</li>
      </ul>
    </div>
  )
};
export default AxiosGet;
