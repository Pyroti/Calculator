
class Command {

  constructor(execute, undo, value) {

    this.execute = execute;
    this.undo = undo;
    this.value = value;

  }

}

export { Command };

