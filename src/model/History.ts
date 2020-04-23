

export default class HistoryApp {
    private _entry: number | null = null;
    private _memory: number = 0;
    private _isDecimal: boolean | null = null;
    public get memory() : number {
        return this._memory;
    }
    public get entry(): number | null {
        return this._entry;
    }
    public get isDecimal(): boolean | null {
        return this._isDecimal;
    }
    public set isDecimal(v: boolean | null) {
        this._isDecimal = v;
    }
    reset(): void {
        this._memory = 0;
        this._isDecimal = null;
        this._entry = null;
    }
    updateEntry(newEntry: number): void {
        this._entry = newEntry;
    }
    setMemory(newMemory: number): void {
        this._memory = newMemory;
    }

    clearEntry() {
        this._entry = null;
        this._isDecimal = null;
    }

}