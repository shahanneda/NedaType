import React from 'React'
import TypeComponent from './type.js';
import LevelPicker from "./LevelPicker.jsx";
import SettingsComponent from "./settingComponent.jsx"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            settings: {
                isHardModeChecked: false,
                currentMinWPM: 15,
            }
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
    }

    render() {
        return (
            <div key={this.props.text}>
                Welcome to Shahan Type
                <div className="outerTextContainer">
                    <SettingsComponent defaultSettings={this.state.settings} handleSettingsChange={this.handleSettingsChange} />
                    <LevelPicker options={this.props.differentTexts} onChange={this.handleOptionChange} />
                    <TypeComponent align="justify" settings={this.state.settings} text={this.props.differentTexts[this.state.indexSelected].text} />
                </div>
            </div>



        );
    }
    handleSettingsChange(newSettings) {
        this.setState({ settings: newSettings });
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