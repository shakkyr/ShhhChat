/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Likes from './Likes';
import ReactScrollableFeed from 'react-scrollable-feed';

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
// // let colors = ['green', 'blue','orange','teal','tomato']
// const getRandomColor=()=> {
//    let letters = '0123456789ABCDEF';
//    let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
window.scrollTo(0,document.body.scrollHeight);


const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

    return <ReactScrollableFeed>
         {messages.map(msg=>{
        return <div className='messages' key={msg.id}>
            <h4>{msg.input}</h4>
            <h6><span style={{color:"brown"}}> From: </span><span style={{color:generateColor(),fontWeight:"bold", fontSize:"1.2rem"}}>{msg.userId}</span> recived at: {msg.createdAt}<Likes /></h6>
        </div>
    })}
    </ReactScrollableFeed>
    
}

export default DialogBox;
