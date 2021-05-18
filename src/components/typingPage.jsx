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
            levelComplete: false,
            levelFinishedWPM: 999,
        };

        this.handleLevelComplete = this.handleLevelComplete.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleNextLevel = this.handleNextLevel.bind(this);
    }


    handleLevelComplete() {
        this.setState({
            levelComplete: true,
        });
    }

    // for switching to next level
    handleNextLevel(){
        // find level so we can get its index and incremenit it
        let index = this.props.differentTexts.findIndex(textObj => textObj.title == this.props.nameOfLevel);
        if(index +1 >= this.props.differentTexts.length || index == -1){
            index = 0;
        }else{
            index = index +1;
        }

        this.props.history.push('/type/' + this.props.differentTexts[index].title);
    }


    handleBack() {
        this.props.history.push('/browse')
    }

    render() {
        var indexOfText = 0;
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
                        <TypeComponent
                            align="justify"
                            handleLevelComplete={this.handleLevelComplete}
                            settings={this.props.settings}
                            text={this.props.differentTexts[indexOfText].text}
                            updateFinalWPM={(wpm) => {
                                this.setState({ levelFinishedWPM: wpm });
                            }}
                            levelComplete={this.state.levelComplete}
                        />
                        {this.state.levelComplete ?
                            <LevelComplete WPM={this.state.levelFinishedWPM} handleNext={this.handleNextLevel} handleBack={this.handleBack} />
                            : ""}

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TypingPage);
