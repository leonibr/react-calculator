import { roundId } from './../Util/roundIt';

import { PerformOperationType } from './PerformOperationType';


export const divisionOperation: PerformOperationType = (history) => {
    const n1 = history.memory;
    const n2 = history.entry ? history.entry : 1;
    const result = roundId(n1 / n2);
    history.setMemory(result);
    history.clearEntry();
    return history;
}