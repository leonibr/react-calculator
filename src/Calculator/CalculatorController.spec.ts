import { divisionOperation } from './../model/divisionOperation';
import Keyboard from "../Keyboard"
import CalculatorController from "./CalculatorController";
import { AppKeyType } from "../model/AppKeyType";


describe('Verifiy existense of operations', () => {
    var controller: CalculatorController;
    beforeEach( () => {
        controller  = new CalculatorController();
    })


    test('Verify AC operations exists in keyboard component', () => {
      
        const operations = controller.keys.filter(k => k.keyType == AppKeyType.Operation);

        const acOperation = operations.filter(k => k.caption === 'AC');

        expect(acOperation.length).toBe(1);

    })


    test('Verify / operations exists in keyboard component', () => {
       
        const operations = controller.keys.filter(k => k.keyType == AppKeyType.Operation);

        const divisionOperation = operations.filter(k => k.caption === '/');


        expect(divisionOperation.length).toBe(1);

    })


    test('Verify + operations exists in keyboard component', () => {
        
        const operations = controller.keys.filter(k => k.keyType == AppKeyType.Operation);

        const divisionOperation = operations.filter(k => k.caption === '+');


        expect(divisionOperation.length).toBe(1);

    })

    test('Verify + operations exists in keyboard component', () => {

            const operations = controller.keys.filter(k => k.keyType == AppKeyType.Operation);

            const subtractOperation = operations.filter(k => k.caption === '-');


            expect(subtractOperation.length).toBe(1);
        


    })


})


describe('Simulate add operaiont', () => {
    var controller: CalculatorController;
    beforeEach( () => {
        controller  = new CalculatorController();
    })

    test('Should start with memory 0 and entry 0', () => {
      
        expect(controller.history.memory).toBe(0);
        expect(controller.history.entry).toBe(0);



    })


    test('Should add first key number to entry', () => {
        
        const key3 = controller.keys.find(c => c.caption === '3');
      
        if (key3) {

            controller.handleIncomingKey(key3);
            
            expect(controller.history.entry).toBe(3)
        }
        
    

    })

    test('Should add second key number to entry', () => {
        
        const key4 = controller.keys.find(c => c.caption === '4');
        const key5 =  controller.keys.find(c => c.caption === '5');
        if (key4 && key5) {
            controller.handleIncomingKey(key4);
            controller.handleIncomingKey(key5);
            
            expect(controller.history.entry).toBe(45)
        }
    

    })


    test('Should move value to memory when receive \'+\' key', () => {
        
        const key4 = controller.keys.find(c => c.caption === '4');
        const key5 =  controller.keys.find(c => c.caption === '5');
        const keyPlus =  controller.keys.find(c => c.caption === '+');

        if (key4 && key5 && keyPlus) {
            controller.handleIncomingKey(key4);
            controller.handleIncomingKey(key5);
            controller.handleIncomingKey(keyPlus);
            expect(controller.history.memory).toBe(45);
           
        }

    })

    test('Should empty the entry when receive \'+\' key', () => {
        
        const key4 = controller.keys.find(c => c.caption === '4');
        const key5 =  controller.keys.find(c => c.caption === '5');
        const keyPlus =  controller.keys.find(c => c.caption === '+');

        if (key4 && key5 && keyPlus) {
            controller.handleIncomingKey(key4);
            controller.handleIncomingKey(key5);
            controller.handleIncomingKey(keyPlus);
            expect(controller.history.entry).toBe(0);
           
        }

    })


    test('Should receive 5 to the entry when receive Key5 after the \'+\' key is pressed', () => {
        
        const key4 = controller.keys.find(c => c.caption === '4');
        const key5 =  controller.keys.find(c => c.caption === '5');
        const key7 =  controller.keys.find(c => c.caption === '7');
        const keyPlus =  controller.keys.find(c => c.caption === '+');

        if (key4 && key5 && keyPlus && key7) {
            controller.handleIncomingKey(key4);
            controller.handleIncomingKey(key5);
            controller.handleIncomingKey(keyPlus);
            controller.handleIncomingKey(key7);

            const entry = controller.history.entry;

            expect(entry).toBe(7);
           
        }

    })


})