import {
  AddCommand, CubeCommand, CubeRootCommand, DivCommand,
  DivideXCommand, ExpCommand, LnCommand, LogCommand,
  MulCommand, PercentCommand, PowXCommand, PowYCommand,
  RootYCommand, SquareCommand, SquareRootCommand, SubCommand
} from './command';
import { Calculator } from './receiver';

function calculation(num1, num2, oper) {

  const number1 = Number(num1);
  const number2 = Number(num2);
  const undo = 'undo';
  const ac = 'AC';
  const error = 'Error. Try again';
  const zero = '0';

  const command = new Map([
    ['+', new AddCommand(number2)],
    ['-', new SubCommand(number2)],
    ['*', new MulCommand(number2)],
    ['/', new DivCommand(number2)],
    ['%', new PercentCommand(number2)],
    ['x2', new SquareCommand(number2)],
    ['2x', new SquareRootCommand(number2)],
    ['x3', new CubeCommand(number2)],
    ['3x', new CubeRootCommand(number2)],
    ['^', new PowYCommand(number2)],
    ['^(1/', new RootYCommand(number2)],
    ['exp', new ExpCommand(number2)],
    ['log', new LogCommand(number2)],
    ['10x', new PowXCommand(number2)],
    ['1/x', new DivideXCommand(number2)],
    ['ln', new LnCommand(number2)]
  ]);

  const calculator = new Calculator();
  if (oper !== undo) {

    calculator.setValue(number1, oper);

  }

  if (command.has(oper)) {

    calculator.execute(command.get(oper));

  } else if (oper === ac) {

    calculator.setValue(0, oper);

  } else if (oper === undo) {

    calculator.undo();

  }

  const result = Number((calculator.getCurrentValue()).toFixed(10));
  if (!Number.isNaN(result) && result !== Infinity) {

    return [`${result}`, result];

  }
  return [zero, error];

}

export { calculation };

