import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    };
    const handleCopy = () => {
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    };
    const [text, setText] = useState('');
    const getWordCount = (str) => {
        return str.split(/\s+/).filter((word) => word.length > 0).length;
    };
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? 'orange' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#4d7ea6' : 'white',
                            color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? 'orange' : '#042743'
                        }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}
                    style={{ backgroundColor: props.mode === 'green' ? 'darkgreen' : 'blue', border: props.mode === 'green' ? 'black' : 'blue', color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? 'orange' : '#042743' }}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}
                    style={{ backgroundColor: props.mode === 'green' ? 'darkgreen' : 'blue', border: props.mode === 'green' ? 'black' : 'blue', color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? 'orange' : '#042743' }}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}
                    style={{ backgroundColor: props.mode === 'green' ? 'darkgreen' : 'blue', border: props.mode === 'green' ? 'black' : 'blue', color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? 'orange' : '#042743' }}>Copy to Clipboard</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? 'orange' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{getWordCount(text)} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? 'Enter some text to preview' : text}</p>
            </div>
        </>
    )
}
