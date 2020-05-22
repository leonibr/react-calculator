import React, { Component } from 'react';

import './keyboard.scss';
import Key from '../model/Key';




type KeyboarProps = {
    pressedKey: (key: Key) => void
    keyboard: Key[]
}


type KeyboardState = {

}

export default class Keyboard extends Component<KeyboarProps, KeyboardState>{


    constructor(props: KeyboarProps, state: KeyboardState) {
        super(props, state);
        this.keyboard = this.props.keyboard;        
        
    }
        
    keyboard: Key[] = [];



    mountedClass = (item: Key) => (item.css);


    readResult = (pressedKey : Key ) => {
        this.props.pressedKey(pressedKey);
    };

    render() {
        return (
            <div className="keyboard-container">
                <div className="keyboard">
                    {this
                    .keyboard
                    .map((item: Key, index) => 
                    (<div key={index} onClick={() => item.onPressed(this.readResult)} className={this.mountedClass(item)}><span>{item.caption}</span></div>))}
                </div>
            </div>
        );
    }
}


