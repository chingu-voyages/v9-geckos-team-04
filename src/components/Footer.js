import React from 'react';
import './Footer.css';

var FontAwesome = require('react-fontawesome');

function Footer(){
    return(
        <footer className="footer">
          <div className="profiles">
            
          <div className="pablo">
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
          </div>


          <div className="hemlata">
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

          </div>
        </div>

          <p>Copyright &copy; {new Date().getFullYear()} </p>


        </footer>
    )
}
export default Footer;
