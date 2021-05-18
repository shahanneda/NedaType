import React, { Component } from 'react';
import SettingsComponent from "./SettingComponent.jsx"
import TypeComponent from './Type.jsx';
import { Link, Redirect, withRouter } from "react-router-dom"
import LevelComplete from './LevelComplete.jsx';
export class TypingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
        };

        this.handleLevelComplete = this.handleLevelComplete.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }


    handleLevelComplete(){

    }


    handleBack()  {
        this.props.history.push('/browse')
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
                        <TypeComponent align="justify" handleLevelComplete={this.handleLevelComplete} settings={this.props.settings} text={this.props.differentTexts[indexOfText].text} />
                        <LevelComplete handleNext={this.props.handleNextLevel} handleBack={this.handleBack} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TypingPage);
