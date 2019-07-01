import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {

    constructor(props) {
        super(props);
        console.log('=============> constructor called');
        this.state = {
            value: props.text,
        }
    }

    componentDidMount() {
        console.log('=============> componentDidMount called');
    }

    onTextChange = (event) => {
        this.setState(
            {value: event.target.value}
        )
    };

    onSubmit = () => {
        let {updateText} = this.props;
        updateText(this.state.value);
    };

    render() {
        let {value} = this.state;

        return (
            <div>
                <p className="header">This is the login component</p>
                <input type="text" value={value} onChange={this.onTextChange}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

Login.propTypes = {
    text: PropTypes.string,
}