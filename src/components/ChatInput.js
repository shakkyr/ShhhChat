/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import InputEmoji from 'react-input-emoji'


const ChatInput = ({id})=> {
  const [state, setState] = React.useState([]);
const [chatBar, setChatBar] = useState('');
const [text, setText] = useState('');
const [time, setTime] = useState('');
const [didMount, setDidMount] = useState(false); 



useEffect(()=> {
  getData()
  setDidMount(true);
  return () => setDidMount(false);


},[chatBar])

let localStorageName = JSON.parse(localStorage.getItem("tempStorage"))


console.log(didMount);

const getData = async () => {
  if (
    chatBar.trim().length !== 0 &&
    text.trim().length !== 0 
  ) {
    
    let data = {
      input : chatBar,
      createdAt : time,
      userId :  localStorageName.data.username,
    };
    const res = await axios.post(
      "https://617f9299055276001774fb25.mockapi.io/chatbar",
      data
    );
    console.log("status=", res.status);
    if (res.status === 201) {
      let newData = res.data;
      const nameList = [...state];
      nameList.push(newData);
      setState(nameList);
      setChatBar("");
      setText("");
      setTime("");
    }
  }
};

function handleOnEnter (text) {
        console.log('enter', text)
        setText(text)
        setChatBar(text)
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        setTime(dateTime)
      }

     

    return (
      <InputEmoji
      value={text}   
      cleanOnEnter
      id={id}
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
    )
}

export default ChatInput


