import { useState } from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Login onSwitch={handleLogin} />
      ) : (
        <Register onSwitch={handleLogin} />
      )}
    </>
  );
};

export default LoginPage;
