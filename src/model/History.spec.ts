import HistoryApp from "./History";
import Key from "./Key";



describe('History App unit tests', () => {
    let history: HistoryApp;

    beforeEach(() => {
        history = new HistoryApp();
    });

    test('Inicial entry must be nullw', () => {
        
        expect(history.entry).toBe(null);
    });
    
    test('Inicial memory must be 0', () => {
       
        expect(history.memory).toBe(0);
    });

    test('should clean history when reset is invoked', () => {
        history.setMemory(10);
        history.updateEntryFromKey(Key.fromNumber('3'));
        history.updateEntryFromKey(Key.fromNumber('2'));
        history.reset();
        expect(history.memory).toBe(0)
        expect(history.entry).toBe(null);

        
    });

    test('should return memory when new value is set', () => {
        history.setMemory(10);
        expect(history.memory).toBe(10);        
    });

    test('should return entry when new value is set', () => {
        history.updateEntryFromKey(Key.fromNumber('3'));
        history.updateEntryFromKey(Key.fromNumber('3'));
        expect(history.entry).toBe(33);     
    });

    test('should return entry when new value is set', () => {
        history.updateEntryFromKey(Key.fromNumber('3'));
        history.updateEntryFromKey(Key.fromNumber('0'));
        expect(history.entry).toBe(30);     
    });

    test('should return entry value integer when dot is pressed with no after number', () => {
        history.updateEntryFromKey(Key.fromNumber('3'));
        history.updateEntryFromKey(Key.fromNumber('0'));
        history.updateEntryFromKey(Key.fromNumber('.'));

        expect(history.entry).toBe(30);     
    });

    
    test('should return entry decimal number', () => {
        
        history.updateEntryFromKey(Key.fromNumber('3'));
        history.updateEntryFromKey(Key.fromNumber('.'));
        history.updateEntryFromKey(Key.fromNumber('5'));


        expect(history.entry).toBe(3.5);     
    });

    
});