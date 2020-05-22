import { addOperation } from './addOperation';
import HistoryApp from './History';
import Key from './Key';

// 

test('should add 1 to 2 equals 3', ()=> {
    const history = new HistoryApp();
    history.setMemory(2);
    history.updateEntry(1);
    const result = addOperation(history);
    expect(result.memory).toBe(3);
});

test('should add decimals 1.5 to 2.7 equals 4.2', ()=> {
    const history = new HistoryApp();
    history.setMemory(1.5);
    history.updateEntry(2.7);
    const result = addOperation(history);
    expect(result.memory).toBe(4.2);
});