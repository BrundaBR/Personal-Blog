
import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
   
  return (
   <div>
    <nav id="navbar"  className='Nav'>
        <Link to='/'><h3>Brunda Revadi</h3></Link>
        <div className="links">

                  <ul>
                      <Router><Link  to='./about'><li>About</li></Link></Router>
                      <Router><Link to='/contact'><li>Contact</li></Link></Router>
                     <Router> <Link to='/portfolio'><li>Portfolio</li></Link></Router>
                             
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