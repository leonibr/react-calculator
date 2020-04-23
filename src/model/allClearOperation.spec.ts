import { allClearOperation } from './allClearOperation';


test('allClear should rease history memory', () => {
    const result = allClearOperation(3, 2);
    expect(result).toBe(0);
})