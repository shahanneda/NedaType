import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SettingsComponent from './SettingComponent.jsx';


export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let isOnBrowsePage = this.props.location.pathname == '/browse' || this.props.location.pathname == '/';
        console.log(isOnBrowsePage)
        return (

            <div className="header-wrapper">
                <SettingsComponent  typingPage={this.props.typingPage} defaultSettings={this.props.defaultSettings} handleSettingsChange={this.props.handleSettingsChange} /> 
                <div className="site-title">NEDATYPE</div>
                {!isOnBrowsePage ? <Link to="/browse" className="header-right bubble" tabIndex={6} >&larr; Back</Link> : ""}



                {this.props.defaultSettings.darkMode ? <div tabIndex={7} onClick={() => {this.props.handleDarkMode(false)}} className="dark-mode-button bubble header-right"> 🌚</div>
                : <div  tabIndex={7} className="dark-mode-button bubble header-right"  onClick={() => {this.props.handleDarkMode(true)}} > 🌞</div>}
            </div>
        );
    }
}

export default withRouter(HeaderComponent);
