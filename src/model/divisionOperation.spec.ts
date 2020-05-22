import { divisionOperation } from './divisionOperation';
import HistoryApp from './History';

test('should divide 4 / 2 with result 2', () => {
    const history = new HistoryApp();
    history.setMemory(4);
    history.updateEntry(2);
    const result = divisionOperation(history);
    expect(result.memory).toBe(2);
});

test('should divide 2 / 4 with result 0.5', () => {
    const history = new HistoryApp();
    history.setMemory(2);
    history.updateEntry(4);
    const result = divisionOperation(history);
    expect(result.memory).toBe(0.5);
});

test('After division entry must be null', () => {
    const history = new HistoryApp();
    history.setMemory(4);
    history.updateEntry(2);
    const result = divisionOperation(history);
    expect(result.entry).toBeNull();
});