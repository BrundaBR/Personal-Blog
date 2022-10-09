
import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { AiFillGithub,AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';

const FooterBar = () => {
   
  return (
   <div>
      <footer className='footbar'>
        <div className="socials">
                <a href="https://linkedin.com/in/brundarevadi" target="__blank"><AiFillLinkedin /></a>
                <a href="https://github.com/BrundaBR"><AiFillGithub/></a>
                <a href="https://linkedin.com/in/brundarevadi"><AiFillInstagram/></a>
                
                 
            </div>
              <p className='copywrite'>Copywrite @ Brunda Revadi</p>
              
    </footer>
   </div>
  );
}

export default FooterBar;