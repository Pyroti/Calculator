import {
  AddCommand, CubeCommand, CubeRootCommand, DivCommand,
  DivideXCommand, ExpCommand, LnCommand, LogCommand,
  MulCommand, PercentCommand, PowXCommand, PowYCommand,
  RootYCommand, SquareCommand, SquareRootCommand, SubCommand
} from '../command/command.js';
import { Calculator } from '../command/receiver.js';
import { operation } from '../constants/operation.js';

function calculation(num1, num2, oper) {

  const number1 = Number(num1);
  const number2 = Number(num2);
  const error = 'Error. Try again';
  const zero = '0';

  const command = new Map([
    [operation.plus, new AddCommand(number2)],
    [operation.minus, new SubCommand(number2)],
    [operation.mult, new MulCommand(number2)],
    [operation.div, new DivCommand(number2)],
    [operation.prec, new PercentCommand(number2)],
    [operation.square, new SquareCommand(number2)],
    [operation.squareRoot, new SquareRootCommand(number2)],
    [operation.cube, new CubeCommand(number2)],
    [operation.cubeRoot, new CubeRootCommand(number2)],
    [operation.powY, new PowYCommand(number2)],
    [operation.rootY, new RootYCommand(number2)],
    [operation.exp, new ExpCommand(number2)],
    [operation.log, new LogCommand(number2)],
    [operation.powX, new PowXCommand(number2)],
    [operation.divX, new DivideXCommand(number2)],
    [operation.ln, new LnCommand(number2)]
  ]);

  const calculator = new Calculator();
  if (oper !== operation.undo) {

    calculator.setValue(number1, oper);

  }

  if (command.has(oper)) {

    calculator.execute(command.get(oper));

  } else if (oper === operation.ac) {

    calculator.setValue(0, oper);

  } else if (oper === operation.undo) {

    calculator.undo();

  }

  const result = Number((calculator.getCurrentValue()).toFixed(10));
  if (!Number.isNaN(result) && result !== Infinity) {

    return [`${result}`, result];

  }
  return [zero, error];

}

export { calculation };

