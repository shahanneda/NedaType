import React from 'react';
class TypeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alreadyTypedText: "",
      currentLetter: this.props.text.charAt(0),
      screenText: this.props.text.substr(1),
      arrayOfMistakes: []
    };
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
  handleKeyTyped(key) {
    if (key === this.state.currentLetter) {
      this.moveCurrentLetterToNextLetter();
    } else {//user made error  
      this.addLetterToTypedText(key);
      var index = this.state.alreadyTypedText.length;
      // this.setState({ arrayOfMistakes: [...this.state.arrayOfMistakes, index] });
      this.setState({ arrayOfMistakes: [...this.state.arrayOfMistakes, index - 1] });
    }
  }
  addLetterToTypedText(letter) {
    var currentLetter = this.state.currentLetter;//current thin we are typing
    var screenText = this.state.screenText;// what we need to type
    var alreadyTypedText = this.state.alreadyTypedText; //already typed
    this.setState({
      screenText: screenText,
      currentLetter: currentLetter,
      alreadyTypedText: alreadyTypedText + letter
    });

  }

  handleBackSpace(key) {

    var currentLetter = this.state.currentLetter;//current thin we are typing
    var screenText = this.state.screenText;// what we need to type
    var alreadyTypedText = this.state.alreadyTypedText; //already typed
    var arrayOfMistakes = this.state.arrayOfMistakes;
    console.log("index of delete = " + (alreadyTypedText.length - 1));
    if (arrayOfMistakes.includes(alreadyTypedText.length - 1)) {
      alreadyTypedText = alreadyTypedText.substr(0, alreadyTypedText.length - 1);
      arrayOfMistakes = arrayOfMistakes.splice(arrayOfMistakes.indexOf(alreadyTypedText.length), 1);


      this.setState({
        // screenText: currentLetter + screenText,
        // currentLetter: alreadyTypedText.charAt(alreadyTypedText.length - 1),
        alreadyTypedText: alreadyTypedText,
        arrayMistake: arrayOfMistakes,
      });
    } else {
      this.setState({
        screenText: currentLetter + screenText,
        currentLetter: alreadyTypedText.charAt(alreadyTypedText.length - 1),
        alreadyTypedText: alreadyTypedText.substr(0, alreadyTypedText.length - 1)
      });
    }

    // console.log("Current letter: " + this.state.currentLetter + "  ||already: " + this.state.alreadyTypedText + "||to type :" + this.state.screenText);

  }
  moveCurrentLetterToNextLetter() {
    var nextLetter = this.state.screenText.charAt(0);
    this.setState({
      currentLetter: nextLetter,
      screenText: this.state.screenText.substr(1),
      alreadyTypedText: this.state.alreadyTypedText + this.state.currentLetter,
    });


    // console.log("Current letter: " + this.state.currentLetter + "  ||already: " + this.state.alreadyTypedText + "||to type :" + this.state.screenText);

  }
  _handleKeyDown(event) {
    if (event.keyCode == 8) {
      this.handleBackSpace();
      return;
    }
    let keycode = event.keyCode
    var valid = // all this is to now have non typblee keys life shift shsow up
      (keycode > 47 && keycode < 58) || // number keys
      keycode == 32 ||// keycode == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
      (keycode > 64 && keycode < 91) || // letter keys
      (keycode > 95 && keycode < 112) || // numpad keys
      (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
      (keycode > 218 && keycode < 223);   // [\]' (in order);
    if (valid) {
      switch (event.key) {
        case event.keyCode === 65 || event.key == "Shift":
          alert("Shift!");
          break;
        default:
          var characterTyped = event.key;
          // if(!event.shiftKey){
          //   console.log("charact: " + characterTyped + "  " + event.keyCode)
          //
          //   // characterTyped = characterTyped.toLowerCase();
          // }
          console.log("charact: " + characterTyped + "  " + event.key);
          this.handleKeyTyped(characterTyped);
          break;
      }
    }
  }


  render() {
    var extraCssName = this.state.currentLetter == " " ? "whitespaceCurrentLetter" : "";
    var typedText = this.state.alreadyTypedText;
    var formattedTypedText = [];
    var arrayMistake = this.state.arrayOfMistakes;
    for (var i = 0; i < typedText.length; i++) {
      if (arrayMistake.includes(i)) {
        formattedTypedText.push(<span className='error'>{typedText.charAt(i)}</span>);
      } else {
        formattedTypedText.push(typedText.charAt(i));
      }
    }
    return <div>
      <div className="text">
        <span className="alreadyTypedText">
          {formattedTypedText}
        </span>
        <span className="currentLetter">
          <span className={extraCssName}>
            {this.state.currentLetter == " " ? "_" : this.state.currentLetter}
          </span>
        </span>

        {this.state.screenText}
      </div>
    </div>;
  }
}


export default TypeComponent;
