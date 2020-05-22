import { PerformOperationType } from './PerformOperationType';


export const nullOperation: PerformOperationType = (p) => p;
export const equalOperation: PerformOperationType = (history) => {
    return history;
};
