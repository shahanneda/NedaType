import React, { Component } from 'react';
import SettingsComponent from "./SettingComponent.jsx"
import TypeComponent from './Type.jsx';
import { Link, Redirect } from "react-router-dom"
export class TypingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
        };
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
                <div key={this.props.text} >

                    <div className="outer-text-container">
                        <TypeComponent align="justify" settings={this.props.settings} text={this.props.differentTexts[indexOfText].text} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TypingPage;
