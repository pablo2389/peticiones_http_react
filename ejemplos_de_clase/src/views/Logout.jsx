import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react"
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  // Tomar datos del contexto
  const { setAuth, setUserName } = useContext(AuthContext);

  const navigate = useNavigate();

  const handler = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userName");
    setAuth(false);
    setUserName("");
    navigate("/login");
  }

  useEffect(() => {
    handler()
  }, [])


  return <></>
};
export default Logout;
