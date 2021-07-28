import { operation } from '../constants/operation.js';

const commands = [];
const currentValueHistory = [];

class Calculator {

  constructor() {

    this.current = 0;

  }

  execute(command) {

    this.current = command.execute(this.current, command.value);
    if (!Number.isNaN(this.current) && this.current !== Infinity) {

      commands.push(command);
      currentValueHistory.push(this.current);

    }

  }

  undo() {

    if (commands.length > 0) {

      const command = commands.pop();
      const currentValue = currentValueHistory.pop();
      this.current = command.undo(currentValue, command.value);

    }

  }

  setValue(value, oper) {

    this.current = value;
    if (oper === operation.ac) {

      commands.length = 0;
      currentValueHistory.length = 0;

    }

  }

  getCurrentValue() {

    return this.current;

  }

}

export { Calculator };

