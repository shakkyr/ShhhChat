import React from "react";

const InputButtons = ( inputHandlerCallback,
    clickHandlerCallback,)=> {
 

  return (
    <div>
      <input
        type="text"
        placeholder="Write name"
        data-whatToAdd={"name"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      <input
        type="text"
        placeholder="Enter Your Password"
        data-whatToAdd={"password"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      <input
        type="button"
        value="add person"
        onClick={() => clickHandlerCallback()}
      />
    </div>
  );
}

export default InputButtons;
 