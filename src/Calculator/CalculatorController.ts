import { percentOperation } from './../model/percentOperation';
import { nullOperation, equalOperation } from './../model/nullOperation';
import { allClearOperation } from './../model/allClearOperation';
import { PerformOperationType } from './../model/PerformOperationType';
import { BeepSound } from './BeepSound';
import Key from '../model/Key';
import { addOperation } from '../model/addOperation';
import { subtractOperation } from '../model/subtractOperation';
import { multiplyOperation } from '../model/multiplyOperation';
import { divisionOperation } from '../model/divisionOperation';
import HistoryApp from '../model/History';
import { AppKeyType } from '../model/AppKeyType';



export default class CalculatorController {

    keys: Key[] = [];
    history = new HistoryApp();

    private currentOperation: PerformOperationType = nullOperation;

    constructor() {
        this.loadKeys();
    }


    /**
     * Callback to inform the UI to re-render, it needs to be informed by the YI
     */
    reRender: () => void = () => null;

    /**
    * Method to populate the keys: Array<Key>            
    * */
    private loadKeys() {

        const isOps = ((key: string) => ['AC', '/', 'x', '-', '+', '=', '%'].filter(c => c === key).length === 1);
        const stringKeys = 'AC:2;%;/;7;8;9;x;4;5;6;-;1;2;3;+;0:2;.;='.split(';');
        this.keys = stringKeys.map((k) => {
            const span = k.indexOf(':') > 0 ? +k.split(':')[1] : 1;
            const label = k.indexOf(':') > 0 ? k.split(':')[0] : k;

            const operation = (key: string) => {
                if (key === '+') return addOperation;
                if (key === '%') return percentOperation;
                if (key === '-') return subtractOperation;
                if (key === 'x') return multiplyOperation;
                if (key === '/') return divisionOperation;
                if (key === 'AC') return allClearOperation;
                if (key === '=') return equalOperation;
                throw new Error('Key not found for this operation');

            }

            const tempKey = isOps(label) ? Key.fromOperation(label, span, operation(label)) : Key.fromNumber(label, span);

            if (tempKey.hasOperationDefined && tempKey.caption !== '%') {
                tempKey.bgTheme = 'bg-organge';
            }   
           
            return tempKey;
        });
    }



    /**
     * Emmits a beep sound when executed
     */
    private beep() {
        const t = setTimeout(() => {
            BeepSound.play().then(_ => clearTimeout(t));
        }, 5);
    }


    public get display() {

        const _display = this.history.entry ? this.history.entry : this.history.memory;
        const _displayStr = _display.toString();
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


            result = `${first}.${second}e${intPartLength - 1}`
        }


        return result;
    }


    handleIncomingKey(key: Key) {
        this.beep();
        switch (key.keyType) {
            case AppKeyType.Operation:
                switch (key.operation) {
                    case allClearOperation:
                        this.currentOperation = nullOperation;
                        this.history = allClearOperation(this.history);
                        this.reRender();
                        return;
                    case percentOperation:
                        this.history = percentOperation(this.history);
                        this.reRender();
                        return;
                    case addOperation:
                    case subtractOperation:
                    case multiplyOperation:
                    case divisionOperation:
                        this.history = this.currentOperation(this.history);
                        if (this.history.entry) {
                            this.history.setMemory(this.history.entry);
                            this.history.clearEntry();
                        }

                        break;
                    case equalOperation:
                        this.history = this.currentOperation(this.history);

                        break;
                    default:
                        break;
                }

                this.currentOperation = key.operation ? key.operation : equalOperation;
                break;
            case AppKeyType.Number:
                this.history.updateEntryFromKey(key);
                break;
            default:
                break;
        }
        this.reRender();
    } 
}
