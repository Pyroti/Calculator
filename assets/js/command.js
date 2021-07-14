import { Command } from './interface';

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

const AddCommand = function (value) {

  return new Command(add, value);

};

const SubCommand = function (value) {

  return new Command(sub, value);

};

const MulCommand = function (value) {

  return new Command(mul, value);

};

const DivCommand = function (value) {

  return new Command(div, value);

};

export {
  AddCommand, SubCommand, MulCommand, DivCommand,
};

