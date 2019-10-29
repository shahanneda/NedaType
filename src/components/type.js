import React from 'react';
class TypeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {screenText:"Type this text and it will help you get faster!"};
  }
  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown);

  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }
  _handleKeyDown(event){
    switch( event.keyCode ) {
        case 32:
            console.log("test");
            break;
        default:
        var characterTyped = String.fromCharCode(event.keyCode);
        if(!event.shiftKey){
          characterTyped = characterTyped.toLowerCase();
        }
        console.log(characterTyped);
            break;
    }
  }
  moveCurrentLetterToNextLetter(){

  }
  render(){

    return <div>
      <div className="text">
          {this.state.currentLetter} {this.state.screenText}
      </div>
    </div>;
  }
}
export default TypeComponent;
