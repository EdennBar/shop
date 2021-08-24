import React, { useState, useContext, useEffect } from "react";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { navigationLinks, AfterLogin } from './Links';

const Loginscreen = () => {
  let history = useHistory();
  const [emailLog, setEmail] = useState('');
  const [passLog, setPass] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  var context = useContext(navigationLinks);
  Axios.defaults.withCredentials = false;
  function login() {
    Axios.post('http://localhost:3001/login',
      {
        email: emailLog,
        pass: passLog
      }).then((response) => {
        if (response.data[0]) {
          context.setLinks(AfterLogin)
          setLoginStatus("Welcome" + response.data[0].first_name);
          setTimeout(() => {
            history.push("/Home");
          }, 2000)

        } else {
          setLoginStatus("User Not Logged in");
        }

      })
    return false;
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].email)

      }

    });

  }, []);


  return (
    <div className="loginscreen">

      <div>
        <h1>Loginscreen</h1>
        <form className="" onSubmit={e => e.preventDefault()}>
          <div>
            <label>Email</label>
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }}>

            </input>
          </div>

          <div>
            <label>Password</label>
            <input type="password" onChange={(e) => { setPass(e.target.value) }}>

            </input>
          </div>

          <div>
            <button type="submit" onClick={login}>Login</button>
          </div>

        </form>
        <h1>{loginStatus}</h1>
      </div>

    </div>
  );
}

export default Loginscreen;