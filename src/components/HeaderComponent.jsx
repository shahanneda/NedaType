import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SettingsComponent from './settingComponent.jsx';


export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     settings: this.props.defaultSettings,
        // }
    }
    render() {
        let isOnBrowsePage = this.props.location.pathname == '/browse' || this.props.location.pathname == '/';
        console.log(isOnBrowsePage)
        return (

            <div className="headerWrapper">
                {this.props.typingPage ?
                    <SettingsComponent defaultSettings={this.props.defaultSettings} handleSettingsChange={this.props.handleSettingsChange} /> : ""
                }
                <div className="siteTitle">NEDATYPE</div>
                {!isOnBrowsePage ? <Link to="/browse" className="headerRight bubble">&larr; Back</Link> : ""}



                {this.props.darkMode ? <div onClick={() => {this.props.handleDarkMode(false)}} className="darkModeButton bubble headerRight"> 🌚</div>
                : <div  className="darkModeButton bubble headerRight"  onClick={() => {this.props.handleDarkMode(true)}} > 🌞</div>}
            </div>
        );
    }
}

export default withRouter(HeaderComponent);
