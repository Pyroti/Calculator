
const commands = [];
const currentValueHistory = [];

const Calculator = function () {

  let current = 0;

  return {
    execute(command) {

      current = command.execute(current, command.value);
      if (!Number.isNaN(current) && current !== Infinity) {

        commands.push(command);
        currentValueHistory.push(current);

      }

    },
    undo() {

      if (commands.length > 0) {

        const command = commands.pop();
        const currentValue = currentValueHistory.pop();
        current = command.undo(currentValue, command.value);

      }

    },
    setValue(value, oper) {

      current = value;
      if (oper === 'AC') {

        commands.length = 0;
        currentValueHistory.length = 0;

      }

    },

    getCurrentValue() {

      return current;

    }
  };

};

export { Calculator };

