import React, { useState, useEffect } from "react";
import Input from "src/components/Input";
import Button from "src/components/Button";
import "./Login.style.scss";

import loginWithEmail from "../services/fetch/queries/loginWithEmail";

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("oliverjones@gmail.com");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userUID");
  }, []);

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Input type="text" name="email" onChange={setEmail} value={email} />
      <Input
        type="password"
        name="password"
        onChange={setPassword}
        value={password}
      />

      <Button
        center
        onClick={() =>
          loginWithEmail(email, password).then((uid: string) =>
            props.onLogin(uid)
          )
        }
      >
        Login
      </Button>
    </div>
  );
};

interface LoginProps {
  onLogin: (uid: string) => any;
}

export default Login;
