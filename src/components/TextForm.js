import React, {useState} from "react";

export default function (props) {
// useState is always defined inside the function. If you declare it outside the function you get the error in the console.
    
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state.
    // setText("Enter new text here"); // Correct way to change the state.
    const HandleUpclick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER CASE", "success");
    }
    const HandleUp2click = () =>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to lower case", "success");
    }
    const HandleClearclick = () =>{
        let newText3 = '';
        setText(newText3);
    }
    const HandleOnChange = (event) =>{
        setText(event.target.value);
    }
    const HandleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const HandleExtraSpace = () => {
        let newTxt = text.split(/[ ]+/)
        setText(newTxt.join(" "))
        props.showAlert("Extra space removed", "success");
    }
    return (
        <>
    <div className="container" style={{color: props.mode === 'light'?'#042743':'white'}}>
        <h1 className="mb-2">{props.heading}</h1>
      <div className="form-group">
        <textarea className="form-control rounded-0"  onChange={HandleOnChange} value={text} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode === 'light'?'white':'#13466e', color: props.mode === 'light'?'#042743':'white'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mt-3 mx-1" onClick={HandleUpclick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-danger mt-3 mx-1" onClick={HandleUp2click}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-warning mt-3 mx-1" onClick={HandleClearclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-1" onClick={HandleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-secondary mt-3 mx-1" onClick={HandleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2 mt-4">
        <h1 style={{color: props.mode === 'light'?'#042743':'white'}}>Your text summary</h1>
        <p style={{color: props.mode === 'light'?'#042743':'white'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p style={{color: props.mode === 'light'?'#042743':'white'}}>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read this.</p>
        <h2 style={{color: props.mode === 'light'?'#042743':'white'}}>Preview</h2>
        <p style={{color: props.mode === 'light'?'#042743':'white'}}>{text.length>0 ?text: "Nothing to preview!"}</p>
    </div>
    </>
  );
}
