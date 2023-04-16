import React from 'react';
import './Navigation.css'

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className='Nav'>
         <NavLink to="/" className="navLink"  > Home</NavLink >
         <NavLink to="/noughts-and-crosses" className="navLink">Play</NavLink>
         <NavLink to="/how-to" className="navLink">Learn</NavLink>
      </div >
   );
}

export default Navigation;
