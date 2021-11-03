/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Likes from './Likes';

const DialogBox = ()=> {
const [messages, setMessages] = useState([]);

useEffect(()=>{
    const intervalId = setInterval(() => {
        getMessages()
        cheMessages()
      }, 5000) // in milliseconds
      return () => clearInterval(intervalId)
},[])

const getMessages = async ()=> {
    await axios.get('https://617f9299055276001774fb25.mockapi.io/chatbar')
    .then(res=>{
       
        setMessages(res.data)
    })
}

//! ====================== deleting function if the array length arrived the  max limit on api======
const cheMessages = async ()=> {
    if(messages.length > 90){
        for(let i =1 ; i<10; i++){
            await axios.delete(
                `https://617f9299055276001774fb25.mockapi.io/chatbar/${i}`

                );
        }
    }
}
//! ============================================================================================

    return messages.map(msg=>{
        return <div className='messages' key={msg.id}>
            <h3>{msg.input}</h3>
            <h6><span style={{color:"brown"}}> From: </span>{msg.userId} recived at: {msg.createdAt}<Likes/></h6>
        </div>
    })
}

export default DialogBox;
