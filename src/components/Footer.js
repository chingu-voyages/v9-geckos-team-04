import React from 'react';
import './Footer.css';

var FontAwesome = require('react-fontawesome');

function Footer(){
    return(
  
        <footer className="footer">
        <h2 className="creators">Development Team</h2>
          <div className="profiles">      
          <div className="profile">
              <FontAwesome
              className="icon"
              name="github"
              size="2x"
            /> 
            <a href="https://github.com/pablowbk" target="_blank">Pablo Wiebek</a>
          </div>

          <div className="profile">
            <FontAwesome
              className="icon"
              name="github"
              size="2x"
            />
            <a href="https://github.com/Hemlatab" target="_blank">Hemlata Bhundhoo</a>
          </div>
        </div>
        <br/>

          <p>Copyright &copy; {new Date().getFullYear()} </p>

        </footer>
    )
}
export default Footer;
