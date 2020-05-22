import { PerformOperationType } from './PerformOperationType';


export const subtractOperation: PerformOperationType = (history) => {
  const n1 = history.memory;
  const n2 = history.entry ? history.entry : 0;
  const result = n1 - n2;
  history.setMemory(result);
  history.clearEntry();
  return history;
}