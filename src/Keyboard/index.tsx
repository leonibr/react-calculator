import React, { Component } from 'react';

import './keyboard.scss';
import { AppKeyType } from '../model/AppKeyType';
import Key from '../model/Key';
import { addOperation } from '../model/addOperation';
import { subtractOperation } from '../model/subtractOperation';
import { multiplyOperation } from '../model/multiplyOperation';
import { divisionOperation } from '../model/divisionOperation';
import { allClearOperation } from '../model/allClearOperation';



type KeyboarProps = {
    pressedKey: (key: Key) => void
    keyboard: Key[]
}


type KeyboardState = {

}

export default class Keyboard extends Component<KeyboarProps, KeyboardState>{

        
    keyboard: Key[] = [];

    componentWillMount() {
        this.keyboard = this.props.keyboard;
    }

    mountedClass = (item: Key) => 
    (item.span === 1? 'key': 'key unit-2')
      + (item.keyType === AppKeyType.Operation ? ' operation' :  '');

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


