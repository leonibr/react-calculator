import { PerformOperationType } from './PerformOperationType';


export const addOperation: PerformOperationType = (first: number, second: number | null) => {
    if (second === null) second = 0;
    return first + second;
}