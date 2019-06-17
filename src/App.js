import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textarea: ""
    }
  }

 // Method that will update both state and the textarea.value
  handleChange = (event) => {
    const {name, value} = event.target; //destructuring
    this.setState(prevState => (
      {
        [name]: value //calling "name" will make sure we target the right element
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Vext</h1>
        <h2 className="subTitle">Speak your mind</h2>
        <button value="start" className="start">Start recording</button>
        <button value="stop" className="stop">Stop</button>
        <br/>
        <textarea className="textarea" name="textarea" onChange={this.handleChange} value={this.state.textarea}></textarea>
        <br/>
        <button className="btn">Copy text</button>
      </div>
    );
  }
}

export default App;
