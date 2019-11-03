import React, { Component } from 'react';

export class SettingsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settings: {
                isHardModeChecked: false,
                currentMinWPM: 15,
            },
        }
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

    render() {
        return (
            <div>

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
                    <option className="mimWpmDropdown" value={120} key={120}>
                        120
                        </option>
                    <option className="mimWpmDropdown" value={150} key={150}>
                        150
                        </option>
                </select>

            </div>
        );
    }
}

export default SettingsComponent;
