import React from 'React'
import LevelPicker from "./LevelPicker.jsx";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import TypingPage from './typingPage.jsx';
import HeaderComponent from './HeaderComponent'
import SettingsComponent from './settingComponent.jsx'
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexSelected: 0,
            settings: {
                hardMode: false,
                minWPM: 15,
            }
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
    }

    render() {
        // var pageURL = window.location.href.substr(window.location.href.lastIndexOf("/") + 1).replace("%20", " ");
        // var indexOfText = this.props.differentTexts.indexOf(pageURL);
        // console.log(indexOfText);

        return (
            <Router>
                <Switch>
                    <Route path="/type/:text" render={((routeProps) =>
                        <div>
                            <HeaderComponent typingPage={true} defaultSettings={this.state.settings} handleSettingsChange={this.handleSettingsChange} />
                            <TypingPage differentTexts={this.props.differentTexts} nameOfLevel={routeProps.match.params.text} routeProps={routeProps} settings={this.state.settings} />

                        </div>
                    )} />


                    <Route path={["/browse", "/"]} render={(routeProps) => (
                        <div>

                            <HeaderComponent typeingPage={false} />
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
    }
}
export default App;