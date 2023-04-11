import React, { useState } from "react";
import {db, provider} from "../firebase";
import { useEffect } from "react";
import "./login.css";
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginContext } from "../LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import SideBar from "./SideBar";

export default function Login(){
    const {setUserLogin,setUserName} = useContext(LoginContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")  

    function signUpWithGoogle(){    
        const promise = signInWithPopup(auth,provider).then((userCredential)=>{
            const user = userCredential.user;
            setUserName(email.substring(0,[4]))
            setUserLogin(true)
        })    
        
    }
    const signUp = () =>{
        const promise = signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserName(email.substring(0,[4]))
        setUserLogin(true)
        // Log out

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
  });
    }

    return(
        <div className="login">
            <div className="form">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" alt="" />
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" placeholder="Enter your email here" />
                </div>  
                <div>
                    <label htmlFor="password"></label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <button onClick={signUp} id="submit-btn">Sign Up</button>
                <Link to={"/register"}>
                <p>Still do not have an account ?</p>
                <span>Create an Account</span>
                </Link>
                <div>
                    <p>Begin with an existing account</p>
                    <div className="LoginImg">
                        {<button style={{border:"none",borderRadius:"6px",cursor:"pointer"}} onClick={signUpWithGoogle}>
                            <img  className="goimg" src="https://s.pximg.net/www/images/accounts_index/icon-google.svg?nR1kTLxK2dJqLO0A" alt="" /> 
                        </button>}
                    </div>
                </div>
            </div>    
        </div>
    )
}