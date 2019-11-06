import React from 'React';
import { throws } from 'assert';
import { Link } from "react-router-dom";
class LevelPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        var options = [];
        this.props.options.map((option) => {
            options.push(
                <Link to={"/type/" + option.title} key={option.title}>
                    <div className="levelWrapperBox">
                        <div className="levelName" key={option.title}>
                            {option.title}
                        </div>
                    </div >
                </Link >
            )
        });
        return (
            <div className="levelsWrapper">
                {/* <select value={this.state.value} onChange={this.handleChange}> */}
                {options}
                {/* </select> */}


            </div>

        );
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
        event.target.blur();
    }

}
export default LevelPicker;