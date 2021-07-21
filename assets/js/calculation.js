import {
  AddCommand, DivCommand, ExpCommand, LnCommand, LogCommand, MulCommand, OdivCommand, PrcCommand,
  SrtCommand, SsqCommand, SubCommand, TrtCommand, TsqCommand, XsqCommand,
  YrtCommand, YsqCommand
} from './command.js';
import { Calculator } from './receiver.js';

// const result = document.querySelector('.calc__result');

function calculation(num1, num2, oper) {

  const command = new Map([
    ['+', new AddCommand(+num2)],
    ['-', new SubCommand(+num2)],
    ['*', new MulCommand(+num2)],
    ['/', new DivCommand(+num2)],
    ['%', new PrcCommand(+num2)],
    ['x2', new SsqCommand(+num2)],
    ['2x', new SrtCommand(+num2)],
    ['x3', new TsqCommand(+num2)],
    ['3x', new TrtCommand(+num2)],
    ['^', new YsqCommand(+num2)],
    ['^(1/', new YrtCommand(+num2)],
    ['exp', new ExpCommand(+num2)],
    ['log', new LogCommand(+num2)],
    ['10x', new XsqCommand(+num2)],
    ['1/x', new OdivCommand(+num2)],
    ['ln', new LnCommand(+num2)]
  ]);

  const calculator = new Calculator();
  if (oper !== 'undo') {

    calculator.setValue(+num1, oper);

  }

  if (command.has(oper)) {

    calculator.execute(command.get(oper));

  } else if (oper === 'AC') {

    calculator.setValue(0, oper);

  } else if (oper === 'undo') {

    calculator.undo();

  }

  const value = Number((calculator.getCurrentValue()).toFixed(10));
  if (!Number.isNaN(value) && value !== Infinity) {

    // result.value = value;
    // return `${value}`;
    return [`${value}`, value];

  }

  // result.value = 'Error. Try again';
  // return '0';
  return ['0', 'Error. Try again'];

}

export { calculation };

