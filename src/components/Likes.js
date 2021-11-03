/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';


const Likes = () => {
    const [likes, setLikes] = useState(0);
    const [updated , setUpdates] = useState(true);

    useEffect(() =>{
    },[] )


    const updateLikes = () => {
        if (updated) {
            setLikes(likes +1);
            setUpdates(false)
        }
        if (!updated){
            setLikes(likes -1);
            setUpdates(true)
        }
    }

    return (
        <div>
            <p onClick={updateLikes} > ☑️{likes} </p>
        </div>
        )
}
export default Likes;
