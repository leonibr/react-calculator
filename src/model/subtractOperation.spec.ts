import { subtractOperation } from "./subtractOperation";
import HistoryApp from "./History";

test('Should subtract 3 and 2 to 1', () => {
  const history = new HistoryApp();
  history.setMemory(3);
  history.updateEntry(2);
  const result = subtractOperation(history);
  expect(result.memory).toBe(1);
  });
  
  test('Should subtract 3 and 4 to -1', () => {
    const history = new HistoryApp();
  history.setMemory(3);
  history.updateEntry(4);
  const result = subtractOperation(history);
  expect(result.memory).toBe(-1);
  });

  test('After subtract entry must be null', () => {
    const history = new HistoryApp();
    history.setMemory(4);
    history.updateEntry(2);
    const result = subtractOperation(history);
    expect(result.entry).toBeNull();
});