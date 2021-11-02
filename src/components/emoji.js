// import React, { useState } from 'react'
//     import InputEmoji from 'react-input-emoji'

//     const Emoji = ()=> {
//       const [ text, setText ] = useState('')

//       function handleOnEnter (text) {
//         console.log('enter', text)
//       }

//       return (
//         <InputEmoji
//           value={text}
//           onChange={setText}
//           cleanOnEnter
//           onEnter={handleOnEnter}
//           placeholder="Type a message"
//         />
//       )
//     }

//     export default Emoji;


// import React, { useState } from 'react';
// import Picker from 'emoji-picker-react';

// const Emoji = () => {
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//   };

//   return (
//     <div>
//       {chosenEmoji ? (
//         <span>You chose: {chosenEmoji.emoji}</span>
//       ) : (
//         <span>No emoji Chosen</span>
//       )}
//       <Picker onEmojiClick={onEmojiClick} />
//     </div>
//   );
// };

// export default Emoji;


// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";

// function Emoji() {
//   return (
//     <Editor
//       apiKey="no-api-key"
//       init={{
//         plugins: "emoticons",
//         toolbar: "emoticons",
//         toolbar_location: "bottom",
//         menubar: false,
//       }}
//     />
//   );
// }

// export default Emoji;