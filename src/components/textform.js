import React, { useState } from 'react'
export default function Textform(props) {
  onchange = (event) => {
    setText(event.target.value)
  }

  let uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Changed to UPPER CASE","Success.! ")
  }
  let lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Changed to lower case","Success.! ")
  }
  let cleartext = ()=>{
    setText("")
    props.showalert("Cleared text.! ")
  }
  let removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showalert("Removed extra space","Success.! ")
  }
  let copyText = ()=>{
    var txt = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(text);
    props.showalert("Text copied..!")
  }
  const [text, setText] = useState(" ");
//   function lengthOfWord() {
//     let count = 0
//     for (let i = 0; i < text.split(" ").length; i++) {
//         if (text.split(" ")[i] == "") {
//             count++
//         }
//     }
//     return text.split(" ").length - count
// }
  return (
    <>
      <div className="container" style ={{color: props.darkMode==='light'?'black':'white'}}>
        <div>
          <div className="mb-3" >
            <label for="exampleFormControlTextarea1" className="form-label my-3"> <h3>Enter the text below </h3> </label>
            <textarea className="form-control" style = {{backgroundColor: props.darkMode==='light'?'white':'black', color: props.darkMode==='light'?'black':'white'}} onChange={onchange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>

          <button type="button" className="btn btn-primary" onClick={uppercase} disabled={text.length===0}>Convert to UPPER CASE</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary mx-3" onClick={lowercase} >Convert to lower case</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary mx-3" onClick={cleartext} >Clear text</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary mx-3" onClick={copyText} >Copy text</button>
          <button type="button" disabled={text.length===0} className="btn btn-primary mx-3" onClick={removeExtraSpace} >Remove Extra space</button>
        </div>
      </div>
      <div className="container my-3" style ={{color: props.darkMode==='light'?'black':'white'}}>
        <h4>Your Text Summary :</h4>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>Read time : {0.008*text.split(" ").filter((text)=>{return text.length!==0}).length} min</p>
        <h5>Preview of your text - </h5>
        <p>{text}</p>
      </div>
    </>

  )
}
