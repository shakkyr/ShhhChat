import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
        getUsers()
      }, 5000) // in milliseconds
      return () => clearInterval(intervalId)
  }, []);

  const getUsers = async () => {
    await axios
      .get("https://617f9299055276001774fb25.mockapi.io/chat")
      .then((res) => {
        setUsers(res.data);
      });
  };

  const userInfo = (id) => {
    console.log(id);
    setShow(!show);
  };

  return users.map((usr) => {
    return (
      <div className="users" key={usr.id}>
        <img
          alt="user"
          className="userImage"
          src={usr.avatar}
          style={{ width: "10%", height: "10%", borderRadius: "50%" }}
          onClick={() => userInfo(usr.id)}
        ></img>
        {show ? (
          <>
            {" "}
            <h3 style={{ color: "brown" }}>{usr.username}</h3>
            <h5>loged at {usr.createdAt}</h5>{" "}
          </>
        ) : (
          <>
            {" "}
            <h3 style={{ color: "brown" }}>User id: {usr.id}</h3>
            <h3 style={{ color: "brown" }}>User name: {usr.name}</h3>
            <h3 style={{ color: "brown" }}>User password: {usr.password}</h3>
            
            
          </>
        )}
      </div>
    );
  });
};

export default Users;
