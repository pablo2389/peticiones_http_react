import "./App.css";

import AxiosGet from "./components/AxiosGet";
import AxiosPost from "./components/AxiosPost";
import RouterPrincipal from "./routes/RouterPrincipal";

function App() {

  return (
    <div className="App">
      {/* 1 - Ejemplo con Axios y petición GET */}
      <AxiosGet />

      {/* 2 - Ejemplo con Axios y petición POST */}
      {/* <AxiosPost /> */}

      {/* 3 y 4 - Ejemplo de la página de posteos con AXIOS + backend */}
      {/* <RouterPrincipal /> */}
    </div>
  );
}

export default App;
