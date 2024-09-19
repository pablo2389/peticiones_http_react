import { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(PruebaContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
    };
    setUser(obj);
    navigate('/'); // Redirige al inicio después de iniciar sesión
  }

  return (
    <>
      <h1>Login</h1>
      <span>Página de Login</span>
      <div className='formulario'>
        <form onSubmit={handleSubmit} className='login'>
          <input type='text' placeholder='Nombre:' name='nombre' />
          <input type='email' placeholder='Email:' name='email' />
          <input type='submit' value={"Enviar"} />
        </form>
      </div>
    </>
  );
}
