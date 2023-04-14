
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NoughtsAndCrosses from './components/NoughtsAndCrosses';
import Navigation from './components/Navigation';
 
const App = ()=>{


    return (      
       <>
          <Navigation />
       <Routes>    
             <Route path="/" element={<HomePage />} />
             <Route path="/noughts-and-crosses" element={<NoughtsAndCrosses />}/>   
       </Routes>
      </>
    );
  }

 
export default App;
