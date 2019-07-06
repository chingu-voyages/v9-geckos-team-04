import React from 'react';
import './Features.css';

function Features(){
    return(
        <section className="features" id="feature">
        <h1>Features</h1>
        <div className="feature-container">
        <div className="feature-card">
        <img src="https://img.icons8.com/ios/50/000000/microphone.png" />
        <h2>Speech to text</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        
        </div>
        <div className="feature-card">
        <img src="https://img.icons8.com/ios/80/000000/edit-property.png" />
        <h2>Copy to Clipboard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        
        </div>
        <div className="feature-card">
        <img src="https://img.icons8.com/dotty/80/000000/share.png" />
        <h2>Share</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        
        </div>
        </div>
        </section>
    )
}




export default Features;