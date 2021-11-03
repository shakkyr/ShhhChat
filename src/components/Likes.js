/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';


const Likes = ({howManyLikes}) => {
    const [likes, setLikes] = useState(0);
    const [updated , setUpdates] = useState(true);

    useEffect(() =>{
        pushLikes()
    },[] )


    const updateLikes = () => {
        if (updated) {
            setLikes(likes +1);
            setUpdates(false)
            pushLikes()
        }
        if (!updated){
            setLikes(likes -1);
            setUpdates(true)
            pushLikes()
        }
    }

    const pushLikes = async () => {
        let data2 = {
           likes: likes
        };
        if (true) {
          localStorage.setItem("tempStorage2", JSON.stringify({ data2: data2 }));

        }
    }

    return (
        <div>
            <p onClick={updateLikes} howManyLikes={pushLikes()} > ☑️ howManyLikes = {likes} </p>
        </div>
        )
}
export default Likes;
