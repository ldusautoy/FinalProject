import React from "react";
import './TxtInput.css'


const TextInput = ({ label, setWord, word, disabled }) => {
    return (
        <div className='LabelContainer'>
            <label className="TxtInLbl">{label}</label>
            <input className="TxtIn" type="text" value={word} onChange={(event) => setWord(event.target.value)} disabled={disabled}></input>


        </div>
    );
}

export default TextInput;