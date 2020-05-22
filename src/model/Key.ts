import { AppKeyType } from "./AppKeyType";
import { PerformOperationType } from "./PerformOperationType";


export default class Key {



    public bgTheme: 'bg-organge' |  '' = '';

    public get caption(): string {
        return this._caption;
    }

    //
    public get keyType(): AppKeyType {
        return this._keyType;
    }

    //** Indicates how many columns this key ocupies in the keyboard. */
    public get columnSpan(): number {
        return this._span;
    }

    public get css(): string {
        const span = this.columnSpan === 1? 'key': 'key unit-2';
        const bg = this.bgTheme;
        return `${span} ${bg}` 
    }

    public get hasOperationDefined(): boolean {
        return this._keyType === AppKeyType.Operation && this.operation !== null;
    }


    onPressed(inform: (pressedKey: Key) => void) {
        if (inform) {
            inform(this as Key);
            return;
        }
        throw new Error('Callback not set for this key: ' + this._caption);

    }

    constructor(private _caption: string, private _keyType: AppKeyType, private _span: number = 1,
        public operation?: PerformOperationType) {


    }

    toString() {
        return `${this.caption} Type: ${this.keyType} span: ${this.columnSpan}`;
    }
    static fromNumber(caption: string, span: number = 1): Key {
        return new Key(caption, AppKeyType.Number, span);
    }

    static fromOperation(caption: string, span: number = 1, operation: PerformOperationType): Key {
        if (operation === null || operation === undefined) {
            throw new Error(`Key ${caption} is set as 'AppKeyType.Operation' but no operation was defined.`);           
        }
        return new Key(caption, AppKeyType.Operation, span, operation);
    }





}