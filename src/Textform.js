import React, { useState } from 'react'

export default function Textform(props) {
  const handleupclick = () => {

    let newtext = text.toUpperCase();
    setText(newtext)

  }
  const handleclear = () => {

    let newtext = (" ");
    setText(newtext)

  }
  const copybutton = () => {
    var copyText = document.getElementById("textbox");
  /* Select the text field */
  copyText.select();
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  }
  const handleloclick = () => {

    let newtext = text.toLowerCase();
    setText(newtext)

  }
  const handleonchange = (event) => {

    setText(event.target.value)

  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="textboxdiv my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>{props.heading}</h2>

        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?"white":"grey" , color:props.mode==="dark"?"black":"white"}}  onChange={handleonchange} id="textbox" rows="8"></textarea>



        <button className="btn btn-primary my-3 " onClick={handleupclick}>convert to Uppertext</button>

        <button className="btn btn-primary mx-3 my-3  " onClick={handleclear}>clear</button>

        <button className="btn btn-primary mx-3 my-3" onClick={handleloclick}>convert to Lowertext</button>

        <button className="btn btn-primary mx-3 my-3"id='myInput' onClick={copybutton}>copy to clipboard</button>
        <div className="textword"  style={{color:props.mode==="dark"?"white":"black"}} >
          <h2>No of character and words </h2>
          <p>{text.length} character {text.split(" ").length}Words</p>
        </div>
      </div>
    </>
  )
}

