/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import "./LogIn.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';
const Login =() => {
  const [state, setState] = React.useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [time, setTime] = useState('');
    let history = useHistory();
    
useEffect(()=> {
  signIn()
},[])


const signIn = async () => {
  if (
    name.trim().length !== 0 &&
    password.trim().length !== 0 &&
    username.trim().length !== 0
  ) {
    let newState = [...state];
    let find = newState.find(usr => {
      if (usr.name ===username && usr.username === username){
        return usr;
      }
    })
    console.log(find);
    if (find !== undefined){
      alert('user exists')
    }


    
    let data = {
      name: name,
      password: password,
      username: username,
      createdAt : time,
    };
    const res = await axios.post(
      "https://617f9299055276001774fb25.mockapi.io/chat",
      data
    );
    console.log("status=", res.status);
    if (res.status === 201) {
      let newData = res.data;
      const nameList = [...state];
      nameList.push(newData);
      setState(nameList);
      setName("");
      setPassword("");
      setUserName("");
      setTime("");
    }
  }
};



const handleSubmit = (event) => {
    event.preventDefault();
    signIn()
    history.push('/Chat')
    
  }

  const textHandler =(e)=>{
    let today = new Date();
      setTime(today)
}



  return (
    <div className="login">
      <div className="login__container">
       
        <div className="login__text">
          <h2>Sign in to <p style={{color:"tomato"}}> ShhhChat </p></h2>
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
      <input type="submit" onClick={(e)=>textHandler(e)} />
    </form>
      </div>
    </div>
  );
}

export default Login;


    

