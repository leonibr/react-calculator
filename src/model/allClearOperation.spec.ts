import { allClearOperation } from './allClearOperation';
import HistoryApp from './History';


test('allClear should rease history memory', () => {
    const history = new HistoryApp();
    history.setMemory(3);
    history.updateEntry(2);
    const result = allClearOperation(history);
    expect(result.memory).toBe(0);
    expect(history.entry).toBeNull();
})