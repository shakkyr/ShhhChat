import React, {  useEffect } from "react";
import "./Chat.css";
import ChatInput from "./ChatInput";
import Users from "./users";
import DialogBox from "./DdialogBox";
import { useHistory } from 'react-router-dom';


const Chat = () => {
  let history = useHistory();

  useEffect(() => {
    
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault();
    history.push('/')
    
  }

  return (
    <div className="chatBox">
      <div className="leftSide">
        <div className="usersList">
          <input type="button" value="logOut" onClick={(e)=>handleLogOut(e)}/>
          <Users />
        </div>
        <div className="chatText">
        <ChatInput/>
          {/* <ChatInput /> */}
        </div>
      </div>
      <div className="rightSide">
          <p className="appName">Keep it Clean <span style={{color:"tomato"}}>ShhhChat.....</span></p>
          <DialogBox />
      </div>
    </div>
  );
};

export default Chat;
