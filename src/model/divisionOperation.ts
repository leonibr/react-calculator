
import { PerformOperationType } from './PerformOperationType';


export const divisionOperation: PerformOperationType = (first: number, second: number | null) => {
    if (second === null) second = 1;
    return first / second;
}