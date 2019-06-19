import React from 'react';
import './App.css';
import Recording from './Recording.js'

//----------WEB SPEECH API------------------
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// initial set up
var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;
// ------------------------------------------

//---------Main Component-------------------
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textarea: "",
      copied: false,
      live: false
    }
  }

  componentDidMount() {
    console.log("App mounted. Proceed...")
    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      if (e.results[0].isFinal) {
        this.setState(prevState => ({textarea: transcript}));
        console.log(`You said: ${transcript}`);
      }
    }

    recognition.onstart = () => {
      this.setState(prevState => ({live: true}));
      console.log('Speech recognition started');
    };

    recognition.onend = () => {
      this.setState(prevState => ({live: false}));
      console.log('Speech recognition stopped');
    };
  }

  handleListen = () => {

  }

  // Method that will update both state and the textarea.value
  handleChange = (event) => {
    const {name, value} = event.target; //destructuring
    this.setState(prevState => ({
      [name]: value //calling "name" will make sure we target the right element
    }));
  }

  handleStart = () => {
    recognition.start();
  }

  handleStop = () => {
    recognition.abort();
  }

  handleCopy = () => {
    const targetTextarea = document.querySelector('.textarea');
    if (targetTextarea.value !== "" ) {
      targetTextarea.select();
      document.execCommand('copy');
    }
  }

  render() {

    return (<div className="App">
      <h1 className="title">Vext</h1>
      {
        this.state.live
          ? <Recording live={this.state.live}/>
          : <h2 className="subTitle">Speak your mind</h2>
      }
      <button value="start" className="start" onClick={this.handleStart}>
        Start recording
      </button>
      <button value="stop" className="stop" onClick={this.handleStop}>
        Stop
      </button>
      <br/>
      <textarea className="textarea" name="textarea" onChange={this.handleChange} value={this.state.textarea}></textarea>
      <br/>
      <button className="btn" onClick={this.handleCopy}>Copy text</button>
    </div>);
  }
}

export default App;
