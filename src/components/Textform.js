import React, { useState } from 'react'


export default function Textform(props) {
   const handleUpclick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Converted to Uppercase', 'success');

   }
   const handleLoclick = () => {
      let newText = text.toLowerCase();
      setText(newText);
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
      navigator.clipboard.writeText(text);
      props.showAlert('Copied to Clipboard', 'success');

   }
   const handleOnChange = (event) => {
      setText(event.target.value);
   }

   const [text, setText] = useState('Enter text here');
   return (
      <>
         <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2 className="mb-4">{props.heading}</h2>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removespaces}>Remove Extra Spaces</button>

         </div>
         <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
         </div>
      </>
   )
}
