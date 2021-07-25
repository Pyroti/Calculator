let memory = 0;

function memoryOperation(event, number1) {

  const button = event.target;
  const parameter = button.dataset.value;
  const num1 = Number(number1);
  const mr = 'mr';
  const command = {
    'm+': memory + num1,
    'm-': memory - num1,
    mc: 0
  };
  if (parameter in command) {

    memory = command[parameter];

  }
  if (parameter === mr) {

    return [memory, true];

  }

  return [memory, false];

}
export { memoryOperation };

