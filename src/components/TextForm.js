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
    };
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? 'Enter some text to preview' : text}</p>
            </div>
        </>
    )
}
