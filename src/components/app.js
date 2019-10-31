import React from 'React'
import TypeComponent from './type.js';
import LevelPicker from "./LevelPicker.jsx";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            isHardModeChecked: false
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleHardMode = this.handleHardMode.bind(this);
    }

    render() {
        return (
            <div key={this.props.text}>

                Welcome to Shahan Type
                <div className="outerTextContainer">
                    <label htmlFor="hardMode">Hard Mode</label>
                    <input type="checkbox" name="hardMode" onChange={this.handleHardMode} checked={this.state.isHardModeChecked}></input>
                    <LevelPicker options={this.props.differentTexts} onChange={this.handleOptionChange} />
                    <TypeComponent align="justify" text={this.props.differentTexts[this.state.indexSelected].text} hardMode={this.state.isHardModeChecked} />
                </div>
            </div>



        );
    }
    handleHardMode(event) {
        console.log(this.state.isHardModeChecked);
        this.setState({
            isHardModeChecked: !this.state.isHardModeChecked,
        });
        event.target.blur();
    }
    handleOptionChange(titleOfValue) {
        var index = -1;
        this.props.differentTexts.map((textObject, i) => {
            if (textObject.title == titleOfValue) {
                index = i
            }
        });
        this.setState({ indexSelected: index });
    }

}
export default App;