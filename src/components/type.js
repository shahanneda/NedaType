import React from 'react';
class TypeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      alreadyTypedText:"",
      currentLetter:this.props.text.charAt(0),
      screenText:this.props.text.substr(1)
    };
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this.handleKeyTyped = this.handleKeyTyped.bind(this);
    this.moveCurrentLetterToNextLetter = this.moveCurrentLetterToNextLetter.bind(this);
    this.handleBackSpace = this.handleBackSpace.bind(this);
  }
  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }
  handleKeyTyped(key){
    if(key === this.state.currentLetter){
      this.moveCurrentLetterToNextLetter();
    }
  }
  handleBackSpace(key){

    var currentLetter = this.state.currentLetter;//current thin we are typing
    var screenText = this.state.screenText;// what we need to type
    var alreadyTypedText = this.state.alreadyTypedText; //already typed
    this.setState({
      screenText: currentLetter + screenText,
      currentLetter:alreadyTypedText.charAt(alreadyTypedText.length-1),
      alreadyTypedText:alreadyTypedText.substr(0,alreadyTypedText.length-1)
    });

    // console.log("Current letter: " + this.state.currentLetter + "  ||already: " + this.state.alreadyTypedText + "||to type :" + this.state.screenText);

  }
  moveCurrentLetterToNextLetter(){
    var nextLetter = this.state.screenText.charAt(0);
    this.setState({
      currentLetter:nextLetter,
      screenText: this.state.screenText.substr(1),
      alreadyTypedText:this.state.alreadyTypedText+this.state.currentLetter,
    });


    // console.log("Current letter: " + this.state.currentLetter + "  ||already: " + this.state.alreadyTypedText + "||to type :" + this.state.screenText);

  }
  _handleKeyDown(event){
    if(event.keyCode == 8){
      this.handleBackSpace();
      return;
    }
    switch( event.key ) {

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


  render(){
    var extraCssName = this.state.currentLetter == " " ? "whitespaceCurrentLetter" : "";
    return <div>
      <div className="text">
          <span className="alreadyTypedText">
          {this.state.alreadyTypedText}
          </span>
          <span className="currentLetter">
            <span className={extraCssName}>
              {this.state.currentLetter==" " ? "_" : this.state.currentLetter}
            </span>
          </span>

          {this.state.screenText}
      </div>
    </div>;
  }
}


export default TypeComponent;
