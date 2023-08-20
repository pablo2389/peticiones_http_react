import { useState } from "react";
import axios from "axios";

const userData = {
  title: 'POST test con axios',
  body: 'Este es el body',
  userId: 1,
}

const AxiosPost = () => {
  const [data, setData] = useState(null);

  const setUser = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts/", userData)
    .then((response) => {
      console.table(response.data)
      setData(response.data)
    })
    .catch((error) => {
      console.error(error);
      alert(`Error al ejecutar la petición: ${error.response.status}`)
    });
  }

  return (
    <div style={{ textAlign: "left", padding: "50px", fontSize: "28px" }}>
      <button onClick={() => setUser(userData)}> Inserte usuario </button>
      <ul style={{ textAlign: "start", color: "white"}}>
        <li>userId: {data? data.userId : "No Data"}</li>
        <li>id: {data? data.id : "No Data"}</li>
        <li>title: {data? data.title : "No Data"}</li>
      </ul>
    </div>
  );
};
export default AxiosPost;