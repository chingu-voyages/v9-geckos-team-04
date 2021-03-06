import React from 'react';
import './App.css';
import Recording from './Recording';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import About from './About';
import Features from './Features';
import { languages } from './langs';
import LangSelect from './LangSelect';
import Share from './Share';

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
      lang: recognition.lang,
      live: false
    }
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

      // Pseudo-command
      if (transcript.includes("up up down down left right left right")) {
        console.log("KONAMIIIIIIIIIIIIIIIIIIIIIIII");
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

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(prevState => ({
      [name]: value
    }));
  }

  handleLangChange = (event) => {
    this.setState({lang: event.target.value});
    recognition.lang = event.target.value;
    console.log(recognition.lang)
  }

  render() {
    const {textarea, live, lang} = this.state;
    return (
      <div className="App">
        <Header />
        <main className="container">

          <div className="col-1"></div>

          <div className="col-2">

            { // Record icon flash when recording starts
              live
                ? <Recording live={live}/>
                : <h2 className="subTitle">Speak your mind</h2>
            }

            <LangSelect langs={languages} language={lang} handleLangChange={this.handleLangChange}/>

            { // toggle between record/stop buttons
              this.state.live
                ? <Button styles="stop" title="Stop recording" value="stop" handleClick={this.handleStop}/>
                : <Button styles="start" title="Start recording" value="start" handleClick={this.handleStart}/>
            }

            <textarea className="textarea" name="textarea" onChange={this.handleChange} value={textarea}></textarea>

            <div className="buttons">
              <Button title="Clear" styles="btn" handleClick={this.handleClear}/>
              <Button  title="Copy text" styles="btn" handleClick={this.handleCopy}/>
            </div>

            <Share text={textarea}/>

          </div>
        </main>
        <Features />
        <About />
        <Footer />
      </div>
    );
  }

}

export default App;
