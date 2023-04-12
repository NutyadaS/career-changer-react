import Layout from "./Layout";
import { useContext } from "react";
import { Context } from "./UserContext";
import { useState } from "react";

const Login = () => {
  // You have to pass data to signup() function to successful login.
  const [username, setUserName] = useState();
  const [password, setUserPassword] = useState();
  const { login } = useContext(Context);
  // example of login with button onClick event listerner.
  // <button onClick={() => signup({
  //     username: 'mock',
  //     password: 'mock',
  // })}>Text</button>

  //   const handleChangeName = function (event) {
  //     setUserName(event.target.value);
  //   };

  //   const handleChangePassword = function (event) {
  //     setUserPassword(event.target.value);
  //   };

  return (
    <Layout>
      <div>
        <label>Username</label>
        <br />
        <input
          onChange={(event) => setUserName(event.target.value)}
          type="Text"
          placeholder="Username"
          style={{ margin: "5px" }}
        ></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          onChange={(event) => setUserPassword(event.target.value)}
          type="password"
          placeholder="Password"
          style={{ margin: "5px" }}
        ></input>
        <br />
        <br />
        <button
          onClick={() =>
            login({
              username: username,
              password: password,
            })
          }
        >
          Login
        </button>
      </div>
    </Layout>
  );
};

export default Login;
