import { AppKeyType } from "./AppKeyType";
import { PerformOperationType } from "./PerformOperationType";


export default class Key {
 
    
    public get caption(): string {
        return this._caption;
    }

    public get keyType(): AppKeyType  {
        return this._keyType;
    }   

    public get span() : number {
        return this._span;
    }      


    
    onPressed(inform: (pressedKey: Key) => void) {
        if (inform) {
            inform(this as Key);
            return;
        }
        throw new Error('Callback not set for this key: ' + this._caption);
        
    }

   constructor(private _caption: string, private _keyType: AppKeyType, private _span: number = 1, 
    private performOperation?: PerformOperationType) {
   

   }

   toString() {
       return `${this.caption} Type: ${this.keyType} span: ${this.span}`;
   }
   static fromNumber(caption: string, span: number = 1): Key {
    return new Key(caption, AppKeyType.Number, span);
   }

   static fromOperation(caption: string, span: number = 1, operation: PerformOperationType | undefined): Key {
    return new Key(caption, AppKeyType.Operation, span, operation);
   }

   executeOperation: PerformOperationType = (n1: number, n2: number | null) => {
       if (this.performOperation) {
           let _n2 = 0;
           if (n2 !== null){
             _n2 = n2;
           }
           return this.performOperation(n1, _n2);
       }
       return undefined;
   }



}