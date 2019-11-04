import React from 'React'
import LevelPicker from "./LevelPicker.jsx";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import TypingPage from './typingPage.jsx';

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
    }

    render() {
        // var pageURL = window.location.href.substr(window.location.href.lastIndexOf("/") + 1).replace("%20", " ");
        // var indexOfText = this.props.differentTexts.indexOf(pageURL);
        // console.log(indexOfText);

        return (
            <Router>
                <Switch>
                    <Route path="/type/:text" render={((routeProps) =>
                        <TypingPage differentTexts={this.props.differentTexts} nameOfLevel={routeProps.match.params.text} />
                    )} />


                    <Route path={["/browse", "/"]}>
                        <LevelPicker options={this.props.differentTexts} onChange={this.handleOptionChange} />
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
}
export default App;