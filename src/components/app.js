import React from 'React'
import TypeComponent from './type.js';
import LevelPicker from "./LevelPicker.jsx";
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
                    <label htmlFor="hardMode">Hard Mode:</label>
                    <input type="checkbox" name="hardMode" onChange={this.handleHardMode} checked={this.state.isHardModeChecked}></input>

                    <label htmlFor="numberOption">Minimun WPM for each Word</label>
                    <select name="numberOption" value={this.state.currentMinWPM} onChange={this.minWpmDropdown}>
                        <option className="mimWpmDropdown" value={15} key={15}>
                            15
                        </option>

                        <option className="mimWpmDropdown" value={30} key={30}>
                            30
                        </option>

                        <option className="mimWpmDropdown" value={50} key={50}>
                            50
                        </option>

                        <option className="mimWpmDropdown" value={60} key={60}>
                            60
                        </option>

                        <option className="mimWpmDropdown" value={75} key={75}>
                            75
                        </option>
                        <option className="mimWpmDropdown" value={85} key={85}>
                            85
                        </option>
                        <option className="mimWpmDropdown" value={100} key={100}>
                            100
                        </option>
                    </select>

                    <LevelPicker options={this.props.differentTexts} onChange={this.handleOptionChange} />
                    <TypeComponent align="justify" minSpeed={this.state.currentMinWPM} text={this.props.differentTexts[this.state.indexSelected].text} hardMode={this.state.isHardModeChecked} />



                </div>
            </div>



        );
    }
    minWpmDropdown(event) {
        this.setState({
            currentMinWPM: Math.floor(event.target.value),
        })
        event.target.blur();
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