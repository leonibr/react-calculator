import React, { Component } from "react";
import Keyboard from "../Keyboard";
import Display from "../Display";
import Key from "../model/Key";
import CalculatorController from "./CalculatorController";


export default class Calculator extends Component {
    controller = new CalculatorController();


    render() {
    this.controller.reRender =  () => this.forceUpdate();
        return (
            <div>
                <Display displayText={this.controller.display} />
                <Keyboard keyboard={this.controller.keys}  pressedKey={(key: Key) => this.controller.handleIncomingKey(key)}  />
            </div>);
    }
}