import React from 'react';
import './Footer.css';
// var React = require('react')
var FontAwesome = require('react-fontawesome');

// var MyComponent = React.createClass({
// render: function() {
// function Footer (){
//     return(
     
//         <footer className="footer">
//         <FontAwesome
//         className="super-crazy-colors"
//         name="rocket"
//         size="2x"
//         spin
//         style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
//       />
       
//         <p>Copyright &copy; {new Date().getFullYear()} </p>
//         </footer>
//     )
// }
// }
// })
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