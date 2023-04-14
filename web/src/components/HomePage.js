import React, { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
 
const HomePage = () => {
    const [ word1, setWord1] = useState("")
  const [ word2, setWord2] = useState("")
  const [ word3, setWord3] = useState("")
  const [ word4, setWord4] = useState("")
  const [ word5, setWord5] = useState("")
  const [ word6, setWord6] = useState("")
  const [ word7, setWord7] = useState("")
  const [ word8, setWord8] = useState("")
  const [ word9, setWord9] = useState("")
  const [save, setSave] = useState(false);
    return (
       <div>
           <TextInput label="Word one:" setWord={setWord1} word={word1} disabled={save}></TextInput>
      <TextInput label="Word two:" setWord={setWord2} word={word2} disabled={save}></TextInput>
      <TextInput label="Word three:" setWord={setWord3} word={word3} disabled={save}></TextInput>
      <TextInput label="Word four:" setWord={setWord4} word={word4} disabled={save}></TextInput>
      <TextInput label="Word five:" setWord={setWord5} word={word5} disabled={save}></TextInput>
      <TextInput label="Word six:" setWord={setWord6} word={word6} disabled={save}></TextInput>
      <TextInput label="Word seven:" setWord={setWord7} word={word7} disabled={save}></TextInput>
      <TextInput label="Word eight:" setWord={setWord8} word={word8} disabled={save}></TextInput>
      <TextInput label="Word nine:" setWord={setWord9} word={word9} disabled={save}></TextInput>
      <Button title={save===false ? "Save words" : "Edit Words"} onClick={() => setSave(!save)}></Button>
       </div>
    );
}
 
export default HomePage;