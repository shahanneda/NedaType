import React, { Component } from 'react';

export class SettingsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            settings: this.props.defaultSettings,
        }
        if (localStorage.getItem("settings") !== null) {
            console.log("geting");
            this.state = {
                settings: JSON.parse(localStorage.getItem("settings"))
            }
            this.props.handleSettingsChange(this.state.settings);
        }
        this.minWpmDropdown = this.minWpmDropdown.bind(this);
        this.handleHardMode = this.handleHardMode.bind(this);
    }

    componentDidUpdate(oldProps, oldState) {
        if (oldState.settings != this.state.settings) {
            this.props.handleSettingsChange(this.state.settings);
            localStorage.setItem("settings", JSON.stringify(this.state.settings));
        }
    }
    minWpmDropdown(event) {
        this.setState({
            settings: {
                ...this.state.settings,
                minWPM: Math.floor(event.target.value)
            }
        })
        event.target.blur();
    }
    handleHardMode(event) {
        console.log(this.state.hardMode);
        this.setState({
            settings: {
                ...this.state.settings,
                hardMode: !this.state.settings.hardMode,
            }
        });
        event.target.blur();
        this.props.handleSettingsChange(this.state.settings);
    }


    render() {
        return (
            <div>

                <label htmlFor="hardMode">Hard Mode:</label>
                <input type="checkbox" name="hardMode" onChange={this.handleHardMode} checked={this.state.settings.hardMode}></input>

                <label htmlFor="numberOption">Minimun WPM for each Word</label>
                <select name="numberOption" value={this.state.settings.minWPM} onChange={this.minWpmDropdown}>
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
