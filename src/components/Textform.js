import React, { useState } from 'react'


export default function Textform(props) {
   const handleUpclick = () => {
      // console.log('Uppercase was clicked '+ text);
      let newText = text.toUpperCase();
      setText(newText);
      // setText('You have clicked on handleUpclick');
      props.showAlert('Converted to Uppercase', 'success');

   }
   const handleLoclick = () => {
      // console.log('Uppercase was clicked '+ text);
      let newText = text.toLowerCase();
      setText(newText);
      // setText('You have clicked on handleUpclick');
      props.showAlert('Converted to Lowercase', 'success');

   }
   const handleclearclick = () => {
      let newText = '';
      setText(newText);
      props.showAlert('Text Cleared', 'success');

   }
   const removespaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('Removed Extraspaces', 'success');
   }

   const handleCopy = () => {
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to Clipboard', 'success');

   }
   const handleOnChange = (event) => {
      // console.log('on change');
      setText(event.target.value);
   }

   const [text, setText] = useState('Enter text here');
   // text = "new text"; //wrong way to change the state
   // setText("new text"); //correct way to change the state
   return (
      <>
         <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={removespaces}>Remove Extra Spaces</button>

         </div>
         <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.0008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
         </div>
      </>
   )
}
