import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className="title">Vext</h1>
     <h2 className="subTitle">Speak your mind</h2>
     <button value="start" className="start">Start recording</button>
     <button value="stop" className="stop">Stop</button>
     <br/>
     <textarea className="textarea"></textarea>
     <br/>
     <button className="btn">Copy text</button>
    </div>
  );
}

export default App;
