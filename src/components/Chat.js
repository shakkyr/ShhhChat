import React, {  useEffect } from "react";
import "./Chat.css";
import ChatInput from "./ChatInput";
// import axios from "axios";
import Users from "./users";
import DialogBox from "./DdialogBox";
const Chat = () => {
  // const [state, setState] = useState([]);
  // const [chat, setChat] = useState([]);

  useEffect(() => {
    // getData();
    // getChat();
  }, []);

  
 

 

  return (
    <div className="chatBox">
      <div className="leftSide">
        <div className="usersList">
          here will be the users
          <Users />
        </div>
        <div className="chatText">
        here i will place my text
        <ChatInput />
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

// (
//   <div className="chat">
//     <div className="chat__header">

//       <div className="chat__headerInfo">

//         <p>last seen </p>
//       </div>

//       <div className="chat__headerRight">

//       </div>
//     </div>

//     <div className="chat__body">

//     </div>
//     <div className="chat__footer">
//       <form onSubmit>

//        <ChatInput id={4}/>
//       </form>

//     </div>
//   </div>
// );
