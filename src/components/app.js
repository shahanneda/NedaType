import React from 'React'
import TypeComponent from './type.js';
import LevelPicker from "./LevelPicker.jsx";
import SettingsComponent from "./settingComponent.jsx"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            isHardModeChecked: false,
            currentMinWPM: 15,
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleHardMode = this.handleHardMode.bind(this);
        this.minWpmDropdown = this.minWpmDropdown.bind(this);
    }

    render() {
        return (
            <div key={this.props.text}>
                Welcome to Shahan Type
                <div className="outerTextContainer">
                    <SettingsComponent />
                    <LevelPicker options={this.props.differentTexts} onChange={this.handleOptionChange} />
                    <TypeComponent align="justify" minSpeed={this.state.currentMinWPM} text={this.props.differentTexts[this.state.indexSelected].text} hardMode={this.state.isHardModeChecked} />
                </div>
            </div>



        );
    }

}
export default App;