import React from 'react';
import './Footer.css';

var FontAwesome = require('react-fontawesome');

function Footer(){
    return(
        <footer className="footer">
         <FontAwesome
        className="icon"
         name="github"
         size="2x"
      />
       <FontAwesome
        className="icon"
         name="linkedin"
         size="2x"
      />
       
         <p>Copyright &copy; {new Date().getFullYear()} </p>
         </footer>
    )
}
export default Footer;