import { PerformOperationType } from './PerformOperationType';
import HistoryApp from './History';


// export const addOperation: PerformOperationType = (first: number, second: number | null) => {
//     if (second === null) second = 0;
//     return first + second;
// }

export const addOperation: PerformOperationType = (history: HistoryApp) => {
    const n1 = history.memory;
    const n2 = history.entry ? history.entry : 0;
    const result = n1 + n2;
    history.setMemory(result);
    history.clearEntry();
    return history;
}