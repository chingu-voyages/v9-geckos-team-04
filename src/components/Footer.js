import React from 'react';
import './Footer.css';

function Footer (){
    return(
     
        <footer className="footer">
        <p>Copyright &copy; {new Date().getFullYear()} </p>
        </footer>
    )
}


export default Footer;