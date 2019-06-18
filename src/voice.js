

//Voice Recognition Logic STARTS here

// check for availability
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// initial set up
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;

recognition.onresult = (e) => {
  const transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')

  if (e.results[0].isFinal) {
    // this.setState(prevState => (
    //   {
    //     textarea: transcript
    //   }
    // ));
    console.log(transcript);
  }
}

recognition.onstart = function() {
  console.log('Speech recognition service has started');
};
recognition.onend = function() {
  console.log('Speech recognition service disconnected');
};
