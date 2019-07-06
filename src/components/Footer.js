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
           <p> <a href="https://github.com/pablowbk" target="_blank" title="github profile">Pablo Wiebek</a></p>
          </div>

          <div className="profile hemlata">
          
            <FontAwesome
              className="icon"
              name="github"
              size="2x"
            />
           <p>  <a href="https://github.com/Hemlatab" target="_blank" title="github profile">Hemlata Bhundhoo</a></p>
          </div>
        </div>
        <br/>
<a className="repo" href="https://github.com/chingu-voyages/v9-geckos-team-04" target="_blank">Project Github Repo</a>
          <p className="copyright">Copyright &copy; {new Date().getFullYear()} </p>

        </footer>
    )
}
export default Footer;
