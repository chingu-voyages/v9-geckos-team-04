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
  }

  handleListen = () => {
    if (this.state.live) {
      recognition.start();
      recognition.onend = () => {
      recognition.start();
      }
    } else {
      recognition.stop();
      recognition.onend = () => {
        console.log("Speech recognition stopped");
      }
    }

    recognition.onstart = () => {
      console.log('Speech recognition service is Running...');
    };

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      if (e.results[0].isFinal) {
        this.setState(prevState => ({textarea: prevState.textarea !== "" ? prevState.textarea + "\n" + transcript : transcript})); //"*** NO SPEECH RECOGNIZED ***"
        console.log(`You said: ${transcript}`);
      }
    }

  }


  handleStart = () => {
    this.setState({
      live: true
    }, this.handleListen)
  }

  handleStop = () => {
    this.setState({
      live: false
    }, this.handleListen)
  }

  handleCopy = (event) => {
    const targetTextarea = document.querySelector('.textarea');
    if (targetTextarea.value !== "" ) {
      targetTextarea.select();
      document.execCommand('copy');
      // event.target.focus();  //this make the focus set to the button and not the textarea (on mbile it's kinda akward..,)
    }
  }

  handleClear = (event) => {
    this.setState({
      textarea: ""
    })
  }
  // Method that will update both state and the textarea.value
  handleChange = (event) => {
    const {name, value} = event.target; //destructuring
    this.setState(prevState => ({
      [name]: value //calling "name" will make sure we target the right element
    }));
  }


  render() {
    return (
      <div className="App">
      <h1 className="title">Vext</h1>
      <div className="container">
      <div className="content">
        {
          this.state.live
            ? <Recording live={this.state.live}/>
            : <h2 className="subTitle">Speak your mind</h2>
        }
        {this.state.live? <button value="stop" className="stop" onClick={this.handleStop}>
          Stop recording
        </button>:<button value="start" className="start" onClick={this.handleStart}>
          Start recording
        </button>}
        <br/>
        <textarea className="textarea" name="textarea" onChange={this.handleChange} value={this.state.textarea}></textarea>
        <br/>

        <button className="btn" onClick={this.handleClear}>Clear</button>

        <button className="btn" onClick={this.handleCopy}>Copy text</button>

      </div>
      </div>
      
      </div>
    );
  }

}

export default App;
