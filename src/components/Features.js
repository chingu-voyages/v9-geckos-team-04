import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="feature">
      <h1>Features</h1>
      <div className="feature-container">
        <div className="feature-card">
          <img src="https://img.icons8.com/ios/50/000000/microphone.png" alt="transcribe from microphone"/>
          <h2>Speech to text</h2>
          <p>Your voice transcribed, instantly. Never loose a thought, an idea. Just speak your mind.</p>

        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/ios/80/000000/edit-property.png" alt ="Copy to Clipboard"/>
          <h2>Copy to Clipboard</h2>
          <p>All your text ready to be copied and pasted wherever you need it. You can even modify it before taking it elsewhere.</p>

        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/dotty/80/000000/share.png" alt="Share your thoughts"/>
          <h2>Share</h2>
          <p>Get your voice out there! Share your thougths on Facebook, Twitter, Whatsapp or Email with the world.</p>

        </div>
      </div>
    </section>
  )
}


export default Features;
