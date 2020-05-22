import { multiplyOperation } from './multiplyOperation';
import HistoryApp from './History';

test('should multiply 4 x 2 with result 2', () => {
    const history = new HistoryApp();
    history.setMemory(4);
    history.updateEntry(2);
    const result = multiplyOperation(history);
    expect(result.memory).toBe(8);
});

test('should divide 0.5 / 4 with result 0.5', () => {
    const history = new HistoryApp();
    history.setMemory(0.5);
    history.updateEntry(4);
    const result = multiplyOperation(history);
    expect(result.memory).toBe(2);
});

test('After multiply entry must be null', () => {
    const history = new HistoryApp();
    history.setMemory(4);
    history.updateEntry(2);
    const result = multiplyOperation(history);
    expect(result.entry).toBeNull();
});