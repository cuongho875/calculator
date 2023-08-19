import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
    HanderClick=()=>{
        this.props.ClickHander(this.props.name)
    }
    render() {
        const className=["component-button",
        this.props.operator? "operator":"",
        this.props.wide? "wide":""]
        return (
            <button onClick={this.HanderClick} className={className.join(" ").trim()}>{this.props.name}</button>
        );
    }
}

export default Button;