import React, { Component } from 'react';

import './Display.scss';

type DisplayProps = {
    displayText: string
};

export default class Display extends Component<DisplayProps> {


    render() {
        const { displayText } = this.props;
        return (
            <div className="display-container">
                <span>{displayText}</span>
            </div>

        );
    }
}