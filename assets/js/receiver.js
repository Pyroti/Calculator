export const Calculator = function () {

  let current = 0;

  return {
    execute(command) {

      current = command.execute(current, command.value);
      // console.log(`${command.value}`);

    },

    setValue(value) {

      current = value;

    },

    getCurrentValue() {

      return current;

    },
  };

};
