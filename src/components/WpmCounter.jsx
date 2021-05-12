import React from "react";

class WpmCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondSinceStart: (Date.now() - this.props.startTime) / 1000,
      charsTyped: this.props.charactersTyped,
      wpm: 0
    };
  }
  componentDidUpdate(oldProps) {


    if (oldProps.charactersTyped != this.state.charsTyped) {

      // 

      this.setState({
        secondSinceStart: (Date.now() - this.props.startTime) / 1000,
        charsTyped: this.props.charactersTyped,
      });
      var wordsTyped = this.props.charactersTyped / 5;
      var minPast = this.state.secondSinceStart / 60;
      this.setState({
        wpm: wordsTyped / minPast,
      });
      if (this.props.startTime == -999) {
        this.setState({ wpm: 0 });
      }
    }
  }
  render() {

    return (
      <div className="wpmCounterContainer">
        <span className="wpmCounterText"> {Math.floor(this.state.wpm)} WPM</span>
      </div>
    );
  }
}
export default WpmCounter