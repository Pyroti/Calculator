
const commands = [];
const currentValueHistory = [];
// const i = 0;

const Calculator = function () {

  let current = 0;

  return {
    execute(command) {

      // console.log(`добавлен ${++i} в стек ${current} :  ${command.value}`);
      current = command.execute(current, command.value);
      if (!Number.isNaN(current) && current !== Infinity) {

        commands.push(command);
        currentValueHistory.push(current);

      }
      // console.log(commands);

    },
    undo() {

      if (commands.length > 0) {

        const command = commands.pop();
        const currentValue = currentValueHistory.pop();
        // console.log(`удален ${i--} из стек текущий ${currentValue} :
        // команд вэлю ${command.value}`);
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

