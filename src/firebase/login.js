import React, {useState, useEffect} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDVWVKKDhRCr7Pcr3EZeIPgDgBMPq25HFY",
    authDomain: "login15601-9f102.firebaseapp.com",
    projectId: "login15601-9f102",
    storageBucket: "login15601-9f102.appspot.com",
    messagingSenderId: "425090708690",
    appId: "1:425090708690:web:b152b1cdbb5f1d4297a90b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const Login = () => {
const [email, setEmail] = useState('');
const [password, setpssword] = useState('');


useEffect (() => {
    if (!firebase.apps.length) {
        initializeApp(firebaseConfig);
    }
}, []);

const handleLogin = async () => {
try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    alert('Bienvenido');
    console.log('Inicio de sesion exitoso:', response.user);
} catch (error) {
    alert('usuario y/o contraseña invalidos');
    console.error('error durante el incio de sesion:', error.message);
}
};
    return(
        <div>

            <fieldset>

            <legend>Login</legend>
            <label>email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setpssword(e.target.value)}></input>
            <br></br>
            <button onClick={handleLogin}>Login</button>

            </fieldset>

         



        </div>
    );

  };

  export default Login;