import Key from "./Key";
import { AppKeyType } from "./AppKeyType";


export default class HistoryApp {
    private _entry: number | null = null;
    private _memory: number = 0;
    private _isDecimal: boolean = false;
    public get memory(): number {
        return this._memory;
    }
    public get entry(): number | null {
        return this._entry;
    }
    public get isDecimal(): boolean {
        return this._isDecimal;
    }
    public set isDecimal(v: boolean) {
        this._isDecimal = v;
    }
    reset(): void {
        this._memory = 0;
        this._isDecimal = false;
        this._entry = null;
    }
    updateEntry(newEntry: number): void {
        this._entry = newEntry;
    }

    /**
     * Receives a key and update the entry
     * @param key The key to update the memory entry.
     */
    updateEntryFromKey(key: Key): boolean {
        if (key.keyType === AppKeyType.Number) {
            const parsedKey = this.parseNum(key.caption);


            if (this.entry) {

                if (this.isDecimal
                    && (parseFloat(this.entry.toString()) === parseInt(this.entry.toString()))) {
                    const newEntry = this.parseNum(`${this.entry}.${parsedKey.value}`);
                    this.updateEntry(newEntry.value);
                } else {

                    const newEntry = this.parseNum(`${this.entry}${parsedKey.value}`);
                    this.updateEntry(newEntry.value);
                    if (key.caption === '.') 
                        this.isDecimal = true;
                }

            } else {
                const newEntry = this.parseNum(`${parsedKey.value}`);
                this.isDecimal = false;
                this.updateEntry(newEntry.value);
            }



            return true;
        }

        return false;
    }
    setMemory(newMemory: number): void {
        this._memory = newMemory;
    }

    clearEntry() {
        this._entry = null;
        this._isDecimal = false;
    }


    parseNum = (_value: string) => {
        const hasDot = _value.indexOf('.') > 0;
        const value = Number.parseFloat(_value);
        const isNumber = !isNaN(value) && isFinite(value)
        return {
            value,
            isNumber,
            hasDot
        }
    }

}