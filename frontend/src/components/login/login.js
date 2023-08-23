import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Login(){

    const navigate = useNavigate()
    const [login,setLogin] = useState({
        username:"",
        password:""
    })

    const handleLoginInput = async (e)=>{
        setLogin((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handlelogin = async (e) =>{
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "" || username === undefined) {
            alert("Invalid Username");
        } else if (password === "" || password === undefined) {
            alert("Invalid Password");
        } else {
            try{
                const response = await axios.post("http://localhost:3012/login",username,password)
                if(response.data.code === 200){
                    navigate("/admin")
                }
            } catch(error){
                console.log(error);
            }
        }
    }
 
    return(
        <div className="loginDiv">
            <div className="loginInnerDiv container p-5">
                <div className="loginTitleDiv p-2">
                    <h1 className="text-light text-center">Login</h1>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="loginFormDiv p-2">
                    <div>
                        <form>
                            <table className="m-auto text-light">
                                <tbody>
                                <tr>
                                    <td className="col-6 loginuname"><label for="username">Email ID</label></td>
                                    <td className="col-6"><input type="text" name="username" id="username" className="form-control" onChange={handleLoginInput} placeholder="admin@example.com" required/></td>
                                </tr>
                                <br/>
                                <tr>
                                    <td className="col-6 loginpwd"><label ffor="password">Password</label></td>
                                    <td className="col-6"><input type="password" name="password" id="password" className="form-control" onChange={handleLoginInput} placeholder="password" required/></td>
                                </tr>
                                <br/>
                                <tr>
                                    <td className="col-6"></td>
                                    <td className="col-6"><Link to='/admin'><button  className="btn btn-primary">Login</button></Link></td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div>
                        <br/>
                        <a href="/passwordreset"><h5 className="text-light text-center">Forgot Password ?</h5></a>
                    </div>
                </div>
            </div>
        </div>
    );
}