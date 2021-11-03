import React, {useState} from 'react'

function Avatar({avtr,id}) {

    const [show, setShow] = useState(true);

    const func = (id) => {
        console.log(id);
        setShow(!show);
      };
    return (
        <div>
            <img
          alt="user"
          className="userImage"
          src={avtr}
          show={show}
          style={{ width: "10%", height: "10%", borderRadius: "50%" }}
          onClick={(id)=>func(id)}
        ></img>
        </div>
    )
}

export default Avatar
