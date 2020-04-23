import { allClearOperation } from './../model/allClearOperation';
import { PerformOperationType } from './../model/PerformOperationType';
import { BeepSound } from './BeepSound';
import { setTimeout } from 'timers';
import Key from '../model/Key';
import { addOperation } from '../model/addOperation';
import { subtractOperation } from '../model/subtractOperation';
import { multiplyOperation } from '../model/multiplyOperation';
import { divisionOperation } from '../model/divisionOperation';
import HistoryApp from '../model/History';

const nullOperation: PerformOperationType = (p, __) => p;

export default class CalculatorController {

    keys: Key[] = []
    history= new HistoryApp();
        
    
    private currentOperation: PerformOperationType = nullOperation;

    constructor() {
        this.loadKeys();

    }



    update: () => void = () => null;


    loadKeys() {

        const isOps = ((key: string) => ['AC', '/', 'x', '-', '+', '='].filter(c => c === key).length === 1);
        const stringKeys = 'AC:2;%;/;7;8;9;x;4;5;6;-;1;2;3;+;0:2;.;='.split(';');
        this.keys = stringKeys.map((k) => {
            const span = k.indexOf(':2') > 0 ? 2 : 1;
            const label = k.indexOf(':') > 0 ? k.split(':')[0] : k;

            const operation = (key: string) => {
                if (key === '+') return addOperation;
                if (key === '-') return subtractOperation;
                if (key === 'x') return multiplyOperation;
                if (key === '/') return divisionOperation;
                if (key === 'AC') return allClearOperation;
            }
            const tempKey = isOps(label) ? Key.fromOperation(label, span, operation(label)) : Key.fromNumber(label, span);

            return tempKey;
        });
    }



    beep() {
        const t = setTimeout(() => {
            BeepSound.play().then(_ => clearTimeout(t));
        }, 50);
        console.log('beep()');
    }


    public get display() {

        const _display = this.history.entry ? this.history.entry : this.history.memory;
        const _displayStr = _display.toString();
        console.log('display unformated: ', _displayStr)
        const _dot = this.history.isDecimal && _display.toString().indexOf('.') === -1 ? '.' : '';
        
        const intPartLength = _displayStr.split('.')[0].length;
        let decPartLength = 0;
        if (_display.toString().indexOf('.') >= 0) {
            decPartLength = _displayStr.split('.')[1].length;
        }
        // console.log('int part' ,  intPartLength);
        // console.log('dec part' ,  decPartLength);

        let result = `${_display}${_dot}`;

        if (intPartLength > 8 && decPartLength > 3) {
            const sIntPart = _displayStr.split('.')[0];
            const sDecPart = _displayStr.split('.')[1];
            const first = sIntPart.substring(0, 1);
            const second = (sIntPart.substring(1, sIntPart.length) + sDecPart).substring(0, 9);


            result = `${first}.${second}e${intPartLength  - 1}`
        }
        console.log('display formated: ', result)

        return result;
    }


    parseNum = (_value: string) => {
        const hasDot = _value.indexOf('.') > 0;
        const value = Number.parseFloat(_value);
        const isNumber = !isNaN(value)
        return {
            value,
            isNumber,
            hasDot
        }
    }

    executeKey(key: Key) {
        const parse = this.parseNum(key.caption);
        if (parse.isNumber) {
            key.executeOperation(this.history.memory, this.history.entry);
        }
    }

    receiveKey = (key: Key) => {
        this.beep();
        if (key.caption === '%' && this.history.memory > 0 && this.history.entry) {
            const percent = (this.history.entry / 100) * this.history.memory;
            this.history.updateEntry(percent);
            return;
        }
        if (key.caption === 'AC') {
            this.history.reset();
            this.currentOperation = nullOperation;
            this.update();
            return;
        }
        //this.beep();
        //debugger;
        let parse = this.parseNum(key.caption);
        if (key.caption === '.') {
            if (!parse.hasDot) {
                this.history.isDecimal = true;
            }
            this.update();
            return;
        }
        //this.executeKey(key);
       
        if (parse.isNumber) {

            if (this.history.entry) {
                if (this.history.isDecimal 
                        && (parseFloat(this.history.entry.toString()) === parseInt(this.history.entry.toString()))) {
                    parse = this.parseNum(`${this.history.entry}.${parse.value}`);

                } else {

                    parse = this.parseNum(`${this.history.entry}${parse.value}`);
                }

            } else {
                parse = this.parseNum(`${parse.value}`);
                this.history.isDecimal = false;
            }

            const parseString = parse.value.toString();
            if (parseString.length > 14) {
                this.beep()
                return;
            }
            this.history.updateEntry(parse.value);

        }
        if (!parse.isNumber) {
            console.log('currentOperation is null', this.currentOperation === nullOperation)
            let result = null;
            if ((this.currentOperation !== nullOperation)) {
                result = this.currentOperation(this.history.memory, this.history.entry);
                if (result) {
                   result = Math.round(result * 1000000000000 )/ 1000000000000;
                }
            } else {
                result = this.history.entry;
            }
            this.currentOperation = key.executeOperation;
            console.log('result', result);
            if (result !== null && result !== undefined) {
                this.history.setMemory(result);
                this.history.clearEntry();            

            }
        }

        this.update();
    }
}


