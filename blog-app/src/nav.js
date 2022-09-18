
import React from 'react';
const NavBar = () => {
  return (
   <div className='Nav'>
    <nav id="navbar" className="navbar">
        <h3>Brunda Revadi</h3>
        <div className="links">

            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link</a>
        </div>
        <div className="search">
            <input class="form"></input>
            <button type='submit'>Submit</button>
        </div>
    </nav>
   </div>
  );
}

export default NavBar;