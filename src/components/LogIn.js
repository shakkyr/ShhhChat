/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import "./LogIn.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';
const Login =() => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [time, setTime] = useState('');
    let history = useHistory();
    
useEffect(()=> {
    signIn();
},[])


const signIn = async () => {
  let data = {
    name : `${name}`,
    password: `${password}`,
    username: `${username}`,
    createdAt : `${time}`,
  }
  
  await axios.post('https://617f9299055276001774fb25.mockapi.io/chat',data);
  
}


const handleSubmit = (event) => {
    event.preventDefault();
    let today = new Date();
    setTime(today)
    signIn()
    history.push('/Chat')
    
  }


  return (
    <div className="login">
      <div className="login__container">
       
        <div className="login__text">
          <h2>Sign in to <h1 style={{color:"tomato"}}> ShhhChat </h1></h2>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)}>
      <label>
        <input 
          type="text" 
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="enter your username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
      </div>
    </div>
  );
}

export default Login;


    

