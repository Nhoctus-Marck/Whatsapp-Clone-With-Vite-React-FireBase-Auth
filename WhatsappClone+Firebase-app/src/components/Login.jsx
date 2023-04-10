import React, { useState } from "react";
import {db} from "../firebase";
import { useEffect } from "react";
import "./login.css";
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginContext } from "../LoginContext";
import { useContext } from "react";

export default function Login(){
    const {setUserLogin} = useContext(LoginContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const signUp = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserLogin(true)
        // ...
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
                <button onClick={signUp()} id="submit-btn">Sign Up</button>
                <p>Already have an account ?</p>
                <span>Sign In</span>
            </div>    
        </div>
    )
}