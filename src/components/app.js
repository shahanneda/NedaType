import React from 'React'
import TypeComponent from './type.js';
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Welcome to Shahan Type
                <div className="outerTextContainer">
                    <TypeComponent text={this.props.differentTexts[1]} />
                </div>
            </div>



        );
    }


}
export default App;