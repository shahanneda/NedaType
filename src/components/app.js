import React from 'React'
import TypeComponent from './type.js';
import LevelPicker from "./LevelPicker.jsx";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { indexSelected: 0 };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    render() {
        return (
            <div key={this.props.text}>
                Welcome to Shahan Type
                <div className="outerTextContainer">
                    <LevelPicker options={this.props.differentTexts} onChange={this.handleOptionChange} />
                    <TypeComponent text={this.props.differentTexts[this.state.indexSelected].text} hardMode={true} />
                </div>
            </div>



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