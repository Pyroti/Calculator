import { operation } from '../constants/operation.js';

let memory = 0;

function memoryOperation(parameter, number1) {

  const num1 = Number(number1);
  const command = new Map([
    [operation.mPlus, memory + num1],
    [operation.mMinus, memory - num1],
    [operation.mc, 0]
  ]);

  if (command.has(parameter)) {

    memory = command.get(parameter);

  }
  if (parameter === operation.mr) {

    return [memory, true];

  }
  return [memory, false];

}
export { memoryOperation };

