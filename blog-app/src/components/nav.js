
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
   
  return (
   <div>
    <nav id="navbar"  className='Nav'>
        <Link to='/'><h3>Brunda Revadi</h3></Link>
        <div className="links">

                  <ul>
                      <Link  to='/about'><li>About</li></Link>
                      <Link to='/contact'><li>Contact</li></Link>
                      <Link to='/portfolio'><li>Portfolio</li></Link>
                             
            </ul>
        </div>
              <div className='SearchField'>
                  <form className='SearchForm'>
            <input className="Inputform"></input>
            <button type='submit'>Submit</button></form></div>
    
    </nav>
   </div>
  );
}

export default NavBar;