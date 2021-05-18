import React from 'React'
import LevelPicker from "./LevelPicker.jsx";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import TypingPage from './TypingPage.jsx';
import HeaderComponent from './HeaderComponent'
import SettingsComponent from './SettingComponent.jsx'
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            settings: {
                hardMode: false,
                minWPM: 15,
                darkMode: true,
            },
            shouldRedirect: false,
            redirectLocation: "",
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.handleDarkMode = this.handleDarkMode.bind(this);
        this.handleNextLevel = this.handleNextLevel.bind(this);
    }

    handleNextLevel(currentLevelName){
        // find level so we can get its index and incremenit it
        let index = this.props.differentTexts.findIndex(textObj => textObj.title == currentLevelName);
        if(index +1 >= this.props.differentTexts.length || index == -1){
            index = 0;
        }else{
            index = index +1;
        }

        this.setState({
            shouldRedirect: true,
            redirectLocation: "/type/" + this.props.differentTexts[index].title
        })
    }

    render() {
        // var pageURL = window.location.href.substr(window.location.href.lastIndexOf("/") + 1).replace("%20", " ");
        // var indexOfText = this.props.differentTexts.indexOf(pageURL);
        // console.log(indexOfText);
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            console.warn("Some features not currently supported in Firefox, please switch to chrome!");
        }

        return (
            <Router>
                {this.state.shouldRedirect ? <Redirect to={this.state.redirectLocation} /> : <></>}

                <Switch>
                    <Route path="/type/:text" render={((routeProps) =>
                        <div>

                            <HeaderComponent typingPage={true} defaultSettings={this.state.settings} handleSettingsChange={this.handleSettingsChange}  handleDarkMode={this.handleDarkMode}/>
                            <TypingPage differentTexts={this.props.differentTexts} nameOfLevel={routeProps.match.params.text} routeProps={routeProps} settings={this.state.settings} handleNextLevel={() => this.handleNextLevel(routeProps.match.params.text)} />

                        </div>
                    )} />


                    <Route path={["/browse", "/"]} render={(routeProps) => (
                        <div>

                            <HeaderComponent typingPage={false} defaultSettings={this.state.settings} handleSettingsChange={this.handleSettingsChange} handleDarkMode={this.handleDarkMode}/>
                            <LevelPicker routeProps={routeProps} options={this.props.differentTexts} onChange={this.handleOptionChange} />
                        </div>
                    )}>
                    </Route>

                </Switch>
            </Router >
        );
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

    handleSettingsChange(newSettings) {
        this.setState({ settings: newSettings });
        // console.log("in app", newSettings)
        if(this.state.settings.darkMode != newSettings.darkMode){
            this.handleDarkMode(newSettings.darkMode)
        }
    }


    handleDarkMode(darkModeValue){
        this.setState({
            settings: {
                ...this.state.settings,
                darkMode: darkModeValue,
            }
        })

        document.documentElement.setAttribute('data-theme', darkModeValue ? "dark" : "light");
    }
}
export default App;