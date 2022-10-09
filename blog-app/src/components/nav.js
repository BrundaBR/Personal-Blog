
import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
   
  return (
   <div>
    <nav id="navbar"  className='Nav'>
        <Link to='/'><h5 className='icon-name'>Brunda Revadi</h5></Link>
        <div className="links">

                  <ul>

            <Router> <Link to='/portfolio'><li>Portfolio</li></Link></Router>
            <div className='SearchField'>
                  <form className='SearchForm'>
            <input className="Inputform" placeholder='Search'></input>
            <button type='submit'>Submit</button></form></div>
                             
            </ul>
        </div>
              
    
    </nav>
   </div>
  );
}

export default NavBar;