import React,{useEffect, useState} from 'react'
import axios from 'axios'

const DialogBox = ()=> {
const [messages, setMessages] = useState([]);

useEffect(()=>{
    const intervalId = setInterval(() => {
        getMessages()
      }, 5000) // in milliseconds
      return () => clearInterval(intervalId)
},[])

const getMessages = async ()=> {
    await axios.get('https://617f9299055276001774fb25.mockapi.io/chatbar')
    .then(res=>{
        setMessages(res.data)
    })
}

    return messages.map(msg=>{
        return <div className='messages' key={msg.id}>
            <h3>{msg.input}</h3>
            <h6><span style={{color:"brown"}}> From: </span>{msg.userId} recived at: {msg.createdAt}</h6>
        </div>
    })
}

export default DialogBox;
