/* eslint-disable no-undef */
import React, { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css"
import "./HowTo.css"

const HomePage = () => {
  const [word1, setWord1] = useState("")
  const [word2, setWord2] = useState("")
  const [word3, setWord3] = useState("")
  const [word4, setWord4] = useState("")
  const [word5, setWord5] = useState("")
  const [word6, setWord6] = useState("")
  const [word7, setWord7] = useState("")
  const [word8, setWord8] = useState("")
  const [word9, setWord9] = useState("")
  const [save, setSave] = useState(false);
  const wordBank = [word1, word2, word3, word4, word5, word6, word7, word8, word9]
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='bg'>
        <div className="sea"></div>
        <div className="crab">
          <img src={require('./images/transparent.png')}></img>
        </div>
        <div className="main">
          <p>Welcome! This app is designed around reading and crabbing.</p>
          <p>Enter and save words below that you find tricky to read.</p>
          <div className="wordInputContainer">
            <TextInput label="Word one:" setWord={setWord1} word={word1} disabled={save}></TextInput>
            <TextInput label="Word two:" setWord={setWord2} word={word2} disabled={save}></TextInput>
            <TextInput label="Word three:" setWord={setWord3} word={word3} disabled={save}></TextInput>
            <TextInput label="Word four:" setWord={setWord4} word={word4} disabled={save}></TextInput>
            <TextInput label="Word five:" setWord={setWord5} word={word5} disabled={save}></TextInput>
            <TextInput label="Word six:" setWord={setWord6} word={word6} disabled={save}></TextInput>
            <TextInput label="Word seven:" setWord={setWord7} word={word7} disabled={save}></TextInput>
            <TextInput label="Word eight:" setWord={setWord8} word={word8} disabled={save}></TextInput>
            <TextInput label="Word nine:" setWord={setWord9} word={word9} disabled={save}></TextInput>
          </div>
          <Button title={save === false ? "Save words" : "Edit Words"} onClick={() => setSave(!save)}></Button>
          <p>Click the crab below to play noughts and crosses with your words</p>
          <button className='PlayBttn' onClick={() => navigate('/noughts-and-crosses', { state: { wordBank: wordBank } })} />
        </div>
      </div>
    </div >

  );
}

export default HomePage;