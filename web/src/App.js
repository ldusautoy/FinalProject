
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NoughtsAndCrosses from './components/NoughtsAndCrosses';
import Navigation from './components/Navigation';
import HowTo from './components/HowTo';
 
const App = ()=>{


    return (      
       <>
          <Navigation />
       <Routes>    
             <Route path="/" element={<HomePage />} />
             <Route path="/noughts-and-crosses" element={<NoughtsAndCrosses />}/>   
             <Route path="/how-to" element={<HowTo/>}/>   
       </Routes>
      </>
    );
  }

 
export default App;
