/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import axios from 'axios'


const ChatInput = ({id})=> {
const [chatBar, setChatBar] = useState('');
const [text, setText] = useState('');
const [time, setTime] = useState('');

useEffect(()=> {

    getData()

},[chatBar])

const getData = async () => {
    let data = {
        input : `${chatBar}`,
        createdAt : `${time}`,
        userId :  `${id}`
    }

    await axios.post(`https://617f9299055276001774fb25.mockapi.io/chatbar`,data);
  
}


  const textHandler =(e)=>{
      if (e.key=== 'Enter')
      setChatBar(text)
      let today = new Date();
        setTime(today)
  }

  const typingHandler = (e)=> {
    setText(e.target.value)
    
  }

  console.log(chatBar);


    return (
        <div>
           
<input type="text" placeholder="send..." onKeyPress={(e)=>textHandler(e)} onChange={(e)=>typingHandler(e)}/>
        </div>
    )
}

export default ChatInput

