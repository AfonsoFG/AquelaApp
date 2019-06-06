import React, { Component } from 'react';

class MetronomeSelectOption extends Component {
    constructor(props) {
        super(props)
        this.optionValue = this.props.optionValue;
        this.optionKey = this.props.optionKey;
    }

    render() {
        return (
            <option value={this.optionKey}>{this.optionKey}</option>
        );
    }
}

export default MetronomeSelectOption;