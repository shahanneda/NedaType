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
  }
  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown);

  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }
  handleKeyTyped(key){
    console.log(this.state.currentLetter);
    if(key === this.state.currentLetter){
      this.moveCurrentLetterToNextLetter();
    }
  }
  moveCurrentLetterToNextLetter(){
    var nextLetter = this.state.screenText.charAt(0);
    this.setState({
      currentLetter:nextLetter,
      screenText: this.state.screenText.substr(1),
      alreadyTypedText:this.state.alreadyTypedText+this.state.currentLetter,
    });

  }
  _handleKeyDown(event){
    switch( event.keyCode ) {
        default:
        var characterTyped = String.fromCharCode(event.keyCode);
        if(!event.shiftKey){
          characterTyped = characterTyped.toLowerCase();
        }
        console.log(characterTyped);
        this.handleKeyTyped(characterTyped);
        break;
    }
  }


  render(){

    return <div>
      <div className="text">
          <span className="alreadyTypedText">
          {this.state.alreadyTypedText}
          </span>
          <span className="currentLetter">{this.state.currentLetter}</span>
          {this.state.screenText}
      </div>
    </div>;
  }
}
export default TypeComponent;
