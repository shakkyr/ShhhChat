/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */

import React, { useEffect, useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {
  const [state, setState] = React.useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUserName] = useState("");
  const [time, setTime] = useState("");
  const [userExistsWarning , setUserExistsWarning] = useState(true)
  const [didMount, setDidMount] = useState(false)
  const [countryName, setCountryName] = useState('')

  let history = useHistory();

  useEffect(() => {
    setDidMount(true);
    signIn();
    getGeoInfo()
    return () => setDidMount(false);

  }, []);

  console.log(didMount);

  // const checkLocalStorage = () => {
  //   if (!localStorage.getItem("tempStorage")) {
  //     localStorage.setItem("tempStorage", JSON.stringify({ data: "" }));
  //   }
  // }
//! ============================ location function ========================
const getGeoInfo = () => {
  axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      setCountryName(data.country_name)
    });
  }
      
//! ======================================================================

  const signIn = async () => {
    let data = {
      name: name,
      password: password,
      username: username,
      createdAt: time,
      country : countryName,
    };
    if (true) {
      localStorage.setItem("tempStorage", JSON.stringify({ data: data }));
    }
    if (
      name.trim().length !== 0 &&
      password.trim().length !== 0 &&
      username.trim().length !== 0
    ) {
      let newState = [...state];
      let find = newState.find((usr) => {
        if (usr.name === username && usr.username === username) {
          return usr;
        }
      });
      console.log(find);
      if (find !== undefined) {
        alert("user exists");
      }

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
    signIn();
    let localStorageName = JSON.parse(localStorage.getItem("tempStorage"))
    if(localStorageName.data.username ===username && localStorageName.data.name ===name){
    history.push("/Chat");
    }
    else {
      setUserExistsWarning(!userExistsWarning)
    }
  };

  const textHandler = (e) => {
     let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        setTime(dateTime)
  };

  const showHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__text">
          <h2>
            Sign in to <p style={{ color: "tomato" }}> ShhhChat </p>
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="loginInputs">
            <input
              required
              type="text"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <input
                required
                type={hidePassword ? "password" : "text"}
                placeholder="enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={showHidePassword}>
                {hidePassword ? (
                  <span style={{ color: "green" }}> show </span>
                ) : (
                  <span style={{ color: "red" }}> hide </span>
                )}
              </span>
            </div>
            <input
              required
              type="text"
              placeholder="enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <input type="submit" onClick={(e) => textHandler(e)} />
        </form>
        <div className="warningMessage">
          {userExistsWarning ? "" :
          <div style={{color:"red"}}>user name or password already exists</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
