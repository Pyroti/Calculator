let memory = 0;

function memoryOperation(event, number1) {

  const button = event.target;
  const parameter = button.dataset.value;
  if (parameter === 'm+') {

    memory += +number1;

  } else if (parameter === 'm-') {

    memory -= +number1;

  } else if (parameter === 'mc') {

    memory = 0;

  } else {

    return [memory, true];

  }

  return [memory, false];

}

export { memoryOperation };

