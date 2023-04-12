import Layout from "./Layout";
import { Context } from "./UserContext";
import { useContext } from "react";
import { useState } from "react";

const Signup = () => {
  // You have to pass data to signup() function to successful registration.
  const { signup } = useContext(Context);

  const [username, setUserName] = useState();
  const [password, setUserPassword] = useState();
  const [fullname, setFullName] = useState();
  const [organization, setOrganization] = useState();

  // example of signup with button onClick event listerner.
  // <button onClick={() => signup({
  //     username: 'mock',
  //     password: 'mock',
  //     fullname: 'mock',
  //     organization: 'mock'
  // })}>Text</button>

  return (
    <Layout>
      <div>
        <label>Username</label>
        <br />
        <input
          onChange={(event) => setUserName(event.target.value)}
          type="Text"
          placeholder="Username"
          style={{ margin: "0px" }}
        ></input>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          onChange={(event) => setUserPassword(event.target.value)}
          type="password"
          placeholder="Password"
          style={{ margin: "0px" }}
        ></input>{" "}
        <br />
        <br />
        <label>Fullname</label>
        <br />
        <input
          onChange={(event) => setUserFullname(event.target.value)}
          type="Text"
          placeholder="Fullname"
          style={{ margin: "0px" }}
        ></input>
        <br />
        <br />
        <label>Organization</label>
        <br />
        <input
          onChange={(event) => setOrganization(event.target.value)}
          type="Text"
          placeholder="Organization"
          style={{ margin: "0px" }}
        ></input>
        <br />
        <br />
        <button
          onClick={() =>
            signup({
              username: username,
              password: password,
              fullname: fullname,
              organization: organization,
            })
          }
        >
          Save
        </button>
      </div>
    </Layout>
  );
};

export default Signup;
