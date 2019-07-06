import React from 'react';
import './Footer.css';

var FontAwesome = require('react-fontawesome');

function Footer(){
    return(
  
        <footer className="footer">
          <div className="profiles">
          <div className="creators-section">
          <h2 className="creators">Creators</h2>
          </div>
          <div className="pablo">
          <h3><a href="https://github.com/pablowbk" target="_blank">Pablo Wiebek</a></h3>
            <FontAwesome
              className="icon"
              name="github"
              size="2x"
            /> 
          </div>

          <div className="profiles">
          <div className="hemlata">
          <h3><a href="https://github.com/Hemlatab" target="_blank">Hemlata Bhundhoo</a></h3>
            <FontAwesome
              className="icon"
              name="github"
              size="2x"
            />
          </div>
        </div>
        </div>

          <p>Copyright &copy; {new Date().getFullYear()} </p>

        </footer>
    )
}
export default Footer;
