import React from 'React';
import { throws } from 'assert';

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
                <option className="levelOptionDropdown" value={option.title} key={option.title}>
                    {option.title}
                </option>)
        });
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
                    {options}
                </select>


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