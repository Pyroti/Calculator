
const commands = [];
let i = 0;
const Calculator = function () {

  let current = 0;

  return {
    execute(command) {

      console.log(`добавлен ${++i} в стек ${current} :  ${command.value}`);
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(commands);

    },
    undo() {

      if (commands.length > 0) {

        const command = commands.pop();
        console.log(`удален ${i--} из стек текущий ${current} : команд вэлю ${command.value}`);
        current = command.undo(current, command.value);

      }

    },
    setValue(value, oper) {

      current = value;
      if (oper === 'AC') {

        commands.length = 0;

      }

    },

    getCurrentValue() {

      return current;

    }
  };

};

export { Calculator };

