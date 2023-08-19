import React, { Component } from 'react';
import Button from './Button';
import './ButtonPanel.css'
class ButtonPanel extends Component {
    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button ClickHander = {this.props.ClickHander} name="AC"/>
                    <Button ClickHander = {this.props.ClickHander} name="+/-"/>
                    <Button ClickHander = {this.props.ClickHander} name="%"/>
                    <Button ClickHander = {this.props.ClickHander} name="/" operator/>
                </div>
                <div>
                    <Button ClickHander = {this.props.ClickHander} name="7"/>
                    <Button ClickHander = {this.props.ClickHander} name="8"/>
                    <Button ClickHander = {this.props.ClickHander} name="9"/>
                    <Button ClickHander = {this.props.ClickHander} name="X" operator/>
                </div>
                <div>
                    <Button ClickHander = {this.props.ClickHander} name="4"/>
                    <Button ClickHander = {this.props.ClickHander} name="5"/>
                    <Button ClickHander = {this.props.ClickHander} name="6"/>
                    <Button ClickHander = {this.props.ClickHander} name="-" operator/>
                </div>
                <div>
                    <Button ClickHander = {this.props.ClickHander} name="1"/>
                    <Button ClickHander = {this.props.ClickHander} name="2"/>
                    <Button ClickHander = {this.props.ClickHander} name="3"/>
                    <Button ClickHander = {this.props.ClickHander} name="+" operator/>
                </div>
                <div>
                    <Button ClickHander = {this.props.ClickHander} name="0" wide/>
                    <Button ClickHander = {this.props.ClickHander} name="."/>
                    <Button ClickHander = {this.props.ClickHander} name="=" operator/>
                </div>
            </div>
        );
    }
}

export default ButtonPanel;