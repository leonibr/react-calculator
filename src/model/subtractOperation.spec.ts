import { subtractOperation } from "./subtractOperation";

test('Should subtract 3 and 2 to 1', () => {
    expect(subtractOperation(3,2)).toBe(1);
  });
  
  test('Should subtract 3 and 4 to -1', () => {
    expect(subtractOperation(3, 4)).toBe(-1);
  });