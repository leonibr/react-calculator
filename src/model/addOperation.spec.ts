import { addOperation } from './addOperation';

test('Should add 1 and 2 to 3', () => {
    expect(addOperation(1,2)).toBe(3);
});