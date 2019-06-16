import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Vext</h1>
     <h2>Speak your mind</h2>
     <button value="start">Start recording</button>
     <button value="stop">Stop</button>
     <br/>
     <textarea></textarea>
     <br/>
     <button>Copy text</button>
    </div>
  );
}

export default App;
