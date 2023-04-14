import React from "react";

const TextInput = ({label, setWord, word, disabled}) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={word} onChange={(event) => setWord(event.target.value)} disabled={disabled}></input>

        
        </div>
    );
}

export default TextInput;