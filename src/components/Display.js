import React, { Component } from 'react';
import './Display.css'
class Display extends Component {
    render() {
        return (
            <div className="component-display">
                <div>{this.props.value}</div>
            </div>
        );
    }
}

export default Display;