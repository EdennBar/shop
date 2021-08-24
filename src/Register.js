import React, { useState } from "react";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
const Register = () => {

    const [emailReg, setEmail] = useState('');
    const [fnameReg, setFname] = useState('');
    const [lnameReg, setLname] = useState('');
    const [passReg, setPass] = useState('');
    let history = useHistory();

    function register() {
        Axios.post('http://localhost:3001/register',
            {
                email: emailReg,
                fname: fnameReg,
                lname: lnameReg,
                pass: passReg
            }).then((response) => {
               console.log(response);
               history.push("/loginscreen");
            })

    }
    return (

        <div className="register">
            <h1>register</h1>
            <form>

                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
                </div>



                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => { setFname(e.target.value) }}></input>
                </div>

                <div>  <label>Last Name</label>
                    <input type="text" onChange={(e) => { setLname(e.target.value) }}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => { setPass(e.target.value) }}></input>
                </div>

                <div>
                    <button onClick={register} >Register</button>
                </div>

            </form>



          

        </div>
    );
}

export default Register;