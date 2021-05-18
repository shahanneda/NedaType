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
        console.log("old", oldProps, "new", this.props)

        if (oldProps.defaultSettings.darkMode != this.props.defaultSettings.darkMode) {
            this.setState({
                settings: {
                    ...this.state.settings,
                    darkMode: this.props.defaultSettings.darkMode,
                }
            });
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
        let newSettings = {
            ...this.state.settings,
            hardMode: !this.state.settings.hardMode,
        };

        this.setState({
            settings: newSettings
        });

        event.target.blur();
        this.props.handleSettingsChange(newSettings);
    }


    render() {
        if (this.props.typingPage) {
            return (
                <div className="settings-container">
                    <div className="bubble">
                        <label htmlFor="hard-mode" tabIndex={3} className="hard-modeLabel">Hard Mode:</label>
                        <input type="checkbox" tabIndex={4} tclassName="hard-mode-checkbox" name="hard-mode" onChange={this.handleHardMode} checked={this.state.settings.hardMode}></input>
                    </div>
                    <div className="bubble"><label htmlFor="number-option" className="min-WPM-label">Minimum WPM:</label>
                        <select name="number-option" value={this.state.settings.minWPM} onChange={this.minWpmDropdown} className="min-WPM-dropDown">
                            {
                                // this just loops from 1 to 10
                                Array.from(Array(10).keys()).map((i) => 
                                    <option className="mim-wpm-dropdown-label" value={i * 15} key={i * 15}>
                                        {i * 15}
                                    </option>
                                )
                            }u
                        </select>
                    </div>
                </div>
            );
        }

        return (<></>); // do not want settings display on none typing pages
    }
}

export default SettingsComponent;
