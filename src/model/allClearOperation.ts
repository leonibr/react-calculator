
import { PerformOperationType } from './PerformOperationType';
import HistoryApp from './History';


export const allClearOperation: PerformOperationType = (history) => {
    history = new HistoryApp();
    return history;
}