import { roundId } from './../Util/roundIt';
import { PerformOperationType } from './PerformOperationType';

export const percentOperation: PerformOperationType = (history) => {
   const { memory, entry }  = history;
   console.log('percentOperation: [memory, entry]' , [memory, entry] );
   if (memory !== 0 && entry !== null) {
      
        const percent = roundId((entry / 100) * memory);
        history.updateEntry(percent);
   }



    return history;
}