import React from 'react';
import { Redirect } from 'react-router-dom';
import WPMCounter from "./WPMCounter"

class TypeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadyTypedText: "",
      currentLetter: this.props.text.charAt(0),
      screenText: this.props.text.substr(1),
      arrayOfWordWPMs: [],
      arrayOfMistakes: [],
      charTypedSinceStart: 0,//used for wmp counter,
      timeOfStart: -999,
      numberOfWordRepeater: 0,
      curentWordGettingRepeated: "",
      timeCurrentWordStarted: null,
      redirectSet: false,

    };

    this.cursorBackgroundRef = React.createRef();
    this.cursorBackgroundMarkerRef = React.createRef();

    this.updateBackgroundCursor = this.updateBackgroundCursor.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this.handleKeyTyped = this.handleKeyTyped.bind(this);
    this.moveCurrentLetterToNextLetter = this.moveCurrentLetterToNextLetter.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
    this.addLetterToTypedText = this.addLetterToTypedText.bind(this);

  }
  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.setState({
        alreadyTypedText: "",
        currentLetter: this.props.text.charAt(0),
        screenText: this.props.text.substr(1),
        arrayOfMistakes: [],
        timeOfStart: -999,
        charTypedSinceStart: 0,
        numberOfWordRepeater: 0,
        curentWordGettingRepeated: "",
        timeCurrentWordStarted: null,
        arrayOfWordWPMs: [],

      });
    }
  }
  handleKeyTyped(key) {
    
    if (this.state.timeOfStart == -999) {
      this.setState({
        timeOfStart: Date.now(),
      })
    }
    if (this.state.alreadyTypedText[this.state.alreadyTypedText.length - 1] == " " && this.state.arrayOfMistakes[this.state.arrayOfMistakes.length - 1] != this.state.alreadyTypedText.length - 1) {
      this.setState({
        timeCurrentWordStarted: Date.now(),
      });
    }
    if (key === this.state.currentLetter) {

      if (this.moveCurrentLetterToNextLetter() == " " && this.state.timeCurrentWordStarted != null) {//if user types text too slow
        let wordArray = this.getWordCurrentlyTyping().split(" ");
        let wordJustCompleted = wordArray[1];
        let nextWord = wordArray[2];
        console.log(wordJustCompleted);

        let timeCurrentWordTook = Date.now() - this.state.timeCurrentWordStarted;
        let mathNumberOfWordsType = wordJustCompleted.length / 5; // assuimg wpm at 5 letter word
        let speedWordTypedAt = Math.round(mathNumberOfWordsType / ((timeCurrentWordTook / 1000) / 60))// words/ min
        if (wordJustCompleted.length < 2) {
          speedWordTypedAt = 999; //marker for wpm counter to not display and also not punish 
        }

        this.setState({
          arrayOfWordWPMs: this.state.arrayOfWordWPMs.concat([speedWordTypedAt]),
          // timeCurrentWordStarted: Da//te.now(),
        });

        if (speedWordTypedAt < this.props.settings.minWPM && wordJustCompleted.length > 1) {//ignore for 1 letter words since wpm is meaningless:
          this.setState({// user typed text too slow 
            screenText: wordJustCompleted + " " + this.state.screenText,
          });

        }
      } else if (this.state.timeCurrentWordStarted == null) {// we must be on first word, forgive mistake on first word to make sure clock is started properly`
        this.setState({
          timeCurrentWordStarted: Date.now(),
          // arrayOfWordWPMs: this.state.arrayOfMistakes.concat([999])// marker to ignore word
        })
      }
    } else {//user made error  
      this.addLetterToTypedText(key);
      var index = this.state.alreadyTypedText.length;
      // this.setState({ arrayOfMistakes: [...this.state.arrayOfMistakes, index] });
      var screenTextTemp = this.state.screenText;
      var alreadyTypedTextTemp = this.state.alreadyTypedText;

      this.setState({
        arrayOfMistakes: [...this.state.arrayOfMistakes, index - 1],
      });
      if (this.props.settings.hardMode == true) {
        let word = this.getWordCurrentlyTyping();
        let indexOfNextSpaceInScreenText = screenTextTemp.indexOf(" ");
        let beforeWordsText = this.state.screenText.substr(0, indexOfNextSpaceInScreenText);
        let textAfter = screenTextTemp.substr(screenTextTemp.indexOf(" "));
        if (word == this.state.curentWordGettingRepeated && this.state.numberOfWordRepeater < 20) {

          this.setState({
            screenText: beforeWordsText + word + word + word + word + textAfter,
            numberOfWordRepeater: this.state.numberOfWordRepeater + 4,
          });
        } else if (word == this.state.curentWordGettingRepeated && this.state.numberOfWordRepeater >= 20) {

        } else if (word != this.state.curentWordGettingRepeated) {
          this.setState({
            screenText: beforeWordsText + word + word + word + word + textAfter,
            numberOfWordRepeater: 4,
            curentWordGettingRepeated: word,

          });
        }
        // this.setState({
        //   screenText: beforeWordsText + word + word + word + word + textAfter,
        // });

      }
    }
  }

  getWordCurrentlyTyping() {
    var index = this.state.alreadyTypedText.length;
    // this.setState({ arrayOfMistakes: [...this.state.arrayOfMistakes, index] });
    var screenTextTemp = this.state.screenText;
    var alreadyTypedTextTemp = this.state.alreadyTypedText;


    for (var j = 0; j < this.state.arrayOfMistakes.length; j++) {
      let indexOfMistake = this.state.arrayOfMistakes[j];
      // console.log("index of error: " + indexOfMistake);
      // console.log("Before text  = " + alreadyTypedTextTemp.substr(0, indexOfMistake) + " after " + alreadyTypedTextTemp.substring(indexOfMistake + 1))
      alreadyTypedTextTemp = alreadyTypedTextTemp.substr(0, indexOfMistake) + "�" + alreadyTypedTextTemp.substr(indexOfMistake + 1);
    }
    alreadyTypedTextTemp = alreadyTypedTextTemp.replace(/�/g, "");
    // console.log(alreadyTypedTextTemp);

    // alreadyTypedTextTemp = alreadyTypedTextTemp.slice(0, index - 1) + alreadyTypedTextTemp.slice(index - 1 + 1);

    var arrayOfAlreadyTypeText = alreadyTypedTextTemp.split(" ");

    let beforeWord = arrayOfAlreadyTypeText[arrayOfAlreadyTypeText.length - 1];
    let afterWord = screenTextTemp.split(" ")[0];
    // console.log(beforeWord + "" + this.state.currentLetter + "" + afterWord);
    let word = " " + beforeWord + this.state.currentLetter + afterWord;
    return word;

  }
  addLetterToTypedText(letter) {
    var currentLetter = this.state.currentLetter;//current thin we are typing
    var screenText = this.state.screenText;// what we need to type
    var alreadyTypedText = this.state.alreadyTypedText; //already typed
    this.setState({
      screenText: screenText,
      currentLetter: currentLetter,
      alreadyTypedText: alreadyTypedText + letter,
    });
  }

  handleBackSpace(key) {

    var currentLetter = this.state.currentLetter;//current thin we are typing
    var screenText = this.state.screenText;// what we need to type
    var alreadyTypedText = this.state.alreadyTypedText; //already typed
    var arrayOfMistakes = this.state.arrayOfMistakes;


    // we dont want backspace if there is nothing to go back(start)
    if(alreadyTypedText.length == 0){
      return;
    }

    if (arrayOfMistakes.includes(alreadyTypedText.length - 1)) {
      alreadyTypedText = alreadyTypedText.substr(0, alreadyTypedText.length - 1);
      arrayOfMistakes.pop();
      this.setState({
        // screenText: currentLetter + screenText,
        // currentLetter: alreadyTypedText.charAt(alreadyTypedText.length - 1),
        alreadyTypedText: alreadyTypedText,
        arrayOfMistakes: arrayOfMistakes,
      });
    } else {
      this.setState({
        screenText: currentLetter + screenText,
        currentLetter: alreadyTypedText.charAt(alreadyTypedText.length - 1),
        alreadyTypedText: alreadyTypedText.substr(0, alreadyTypedText.length - 1)
      });
    }

  }
  moveCurrentLetterToNextLetter() {
    var nextLetter = this.state.screenText.charAt(0);
    this.setState({
      currentLetter: nextLetter,
      screenText: this.state.screenText.substr(1),
      alreadyTypedText: this.state.alreadyTypedText + this.state.currentLetter,
      charTypedSinceStart: this.state.charTypedSinceStart + 1,
    });
    return nextLetter;
  }

  updateBackgroundCursor(){
    // this.cursorBackgroundRef.current.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    let bounding = this.cursorBackgroundMarkerRef.current.getBoundingClientRect()
    console.log(bounding.left + "px");
    this.cursorBackgroundRef.current.style.left = bounding.left + "px";
    this.cursorBackgroundRef.current.style.top = (bounding.top+7) + "px";
    console.log(this.cursorBackgroundMarkerRef.current)
  }

  _handleKeyDown(event) {

    if (event.keyCode == 8) {
      event.preventDefault();
      this.handleBackSpace();
      this.updateBackgroundCursor()
      return;
    }
    if (event.key == "b" && (event.ctrlKey || event.metaKey)) {// possibly move this to a separet compoennt
      this.setState({ redirectSet: true });
      return;// to prevent memory leak
    }

    let keycode = event.keyCode;
    console.log("Keycode of key pressed" + keycode);
    var valid = // all this is to now have non typblee keys life shift shsow up
      (keycode > 47 && keycode < 58) || // number keys
      keycode == 32 ||// keycode == 13 || // spacebar & return key(s) 
      (keycode > 64 && keycode < 91) || // letter keys
      (keycode > 95 && keycode < 112) || // numpad keys
      (keycode > 185 && keycode < 193) || // ;=,-./` 
      (keycode > 218 && keycode < 223) || (keycode == 59); // for somereason on firefox the keycode for ; is 59 instead of the rest
    if (valid) {
      switch (event.key) {
        case event.keyCode === 65 || event.key == "Shift":
          alert("Shift!");
          break;
        default:
          var characterTyped = event.key;
          if (event.key == " ") {
            event.preventDefault();
          }
          // if(!event.shiftKey){
          //
          //   // characterTyped = characterTyped.toLowerCase();
          // }
          this.handleKeyTyped(characterTyped);
          this.updateBackgroundCursor()
          break;
      }
    }
  }


  render() {
    var extraCssName = this.state.currentLetter == " " ? "whitespaceCurrentLetter" : "";
    var typedText = this.state.alreadyTypedText;
    var formattedTypedText = [];
    var arrayMistake = this.state.arrayOfMistakes;

    var wordCounter = 0;
    for (var i = 0; i < typedText.length; i++) {//loops through everysingle character to check if there is a mistake, if there is it adds an error span around it
      if (arrayMistake.includes(i)) {
        formattedTypedText.push(<span key={typedText.charAt(i) + i} className={typedText.charAt(i) == " " ? "error spaceError" : "error"}>{typedText.charAt(i)}</span>);
      } else if (typedText.charAt(i) == " ") { // checks if the current word has ended to add wpm counter, also checks to make sure current word was not less than 3 by using the -999 marker
        if (this.state.arrayOfWordWPMs[wordCounter] != 999) {
          var classNames = "wpmCounterOnText " + ((this.state.arrayOfWordWPMs[wordCounter] < this.props.settings.minWPM) ? " redWPM" : "")
          console.log(classNames);

          formattedTypedText.push(<span key={wordCounter} className={classNames}>{this.state.arrayOfWordWPMs[wordCounter]} WPM</span>);
        }
        formattedTypedText.push(" ");
        wordCounter++;

      } else {
        formattedTypedText.push(typedText.charAt(i));
      }
    }
    return <div>
      {this.state.redirectSet ? <Redirect to="/browse" /> : ""}

      <WPMCounter startTime={this.state.timeOfStart} charactersTyped={this.state.charTypedSinceStart} />
     
      <span ref={this.cursorBackgroundRef} className={"cursorBackground"}>&nbsp;</span>

      <div className="outerContainerText">
        <div className="text">
          <span className="alreadyTypedText">
            {formattedTypedText}
          </span>
          {/* <span ref={this.cursorBackgroundMarkerRef} className={"cursorBackgroundMarker"}></span> */}
          <span ref={this.cursorBackgroundMarkerRef} className={"currentLetter " +extraCssName} key={Date.now()} >
              {this.state.currentLetter == " " ? "_" : this.state.currentLetter}
          </span>
          {this.state.screenText}
        </div>
      </div>
    </div >;
  }
}

export default TypeComponent;
