import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SettingsComponent from './settingComponent.jsx';


export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let isOnBrowsePage = this.props.location.pathname == '/browse' || this.props.location.pathname == '/';
        console.log(isOnBrowsePage)
        return (

            <div className="headerWrapper">
                <SettingsComponent  typingPage={this.props.typingPage} defaultSettings={this.props.defaultSettings} handleSettingsChange={this.props.handleSettingsChange} /> 
                <div className="siteTitle">NEDATYPE</div>
                {!isOnBrowsePage ? <Link to="/browse" className="headerRight bubble">&larr; Back</Link> : ""}



                {this.props.defaultSettings.darkMode ? <div onClick={() => {this.props.handleDarkMode(false)}} className="darkModeButton bubble headerRight"> 🌚</div>
                : <div  className="darkModeButton bubble headerRight"  onClick={() => {this.props.handleDarkMode(true)}} > 🌞</div>}
            </div>
        );
    }
}

export default withRouter(HeaderComponent);
