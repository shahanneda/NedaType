import React, { Component } from 'react';
import SettingsComponent from "./settingComponent.jsx"
import TypeComponent from './type.js';
import { Link, Redirect } from "react-router-dom"
export class TypingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            settings: {
                hardMode: false,
                minWPM: 15,
            }
        };
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
    }

    handleSettingsChange(newSettings) {
        this.setState({ settings: newSettings });
    }

    render() {
        var indexOfText = 0;
        console.log(this.props.nameOfLevel)
        this.props.differentTexts.map((item, index) => {
            if (item.title == this.props.nameOfLevel) {
                indexOfText = index;
            }
        });
        if (indexOfText == -1) {
            indexOfText = 0;
        }
        return (
            <div>
                {/* {indexOfText == -1 ? <Redirect to="/browse"/>} */}
                <div key={this.props.text}>
                    <Link to="/browse">Back</Link>
                    <div className="outerTextContainer">
                        <SettingsComponent defaultSettings={this.state.settings} handleSettingsChange={this.handleSettingsChange} />
                        <TypeComponent align="justify" settings={this.state.settings} text={this.props.differentTexts[indexOfText].text} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TypingPage;
