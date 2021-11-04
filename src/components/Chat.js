import React, {  useEffect,useRef  } from "react";
import "./Chat.css";
import ChatInput from "./ChatInput";
import Users from "./users";
import DialogBox from "./DdialogBox";
import { useHistory } from 'react-router-dom';



const Chat = () => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  let history = useHistory();

  useEffect(scrollToBottom, []);

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
        <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="rightSide">
          <p className="appName">Keep it Clean <span style={{color:"tomato"}}>ShhhChat.....</span></p>
          <DialogBox  ref={messagesEndRef} />
          <div />
      </div>
    </div>
  );
};

export default Chat;
