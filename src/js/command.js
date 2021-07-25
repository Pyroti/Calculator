import { Command } from './interface';

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const percent = (x) => x / 100;
const repercent = (x) => x * 100;
const square = (x) => x ** 2;
const squareRoot = (x) => x ** (1 / 2);
const cube = (x) => x ** 3;
const cubeRoot = (x) => Math.cbrt(x);
const powY = (x, y) => x ** y;
const rootY = (x, y) => ((x < 0 && y % 2 === 1)
  ? (-1 * ((-1 * x) ** (1 / y))) : x ** (1 / y));
const exp = (x) => Math.E ** x;
const reexp = (x) => Math.log(x) / Math.log(Math.E);
const log = (x) => Math.log10(x);
const powX = (x) => 10 ** (x);
const divideX = (x) => 1 / x;
const ln = (x) => Math.log(x);

const AddCommand = function (value) {

  return new Command(add, sub, value);

};

const SubCommand = function (value) {

  return new Command(sub, add, value);

};

const MulCommand = function (value) {

  return new Command(mul, div, value);

};

const DivCommand = function (value) {

  return new Command(div, mul, value);

};

const PercentCommand = function (value) {

  return new Command(percent, repercent, value);

};

const SquareCommand = function (value) {

  return new Command(square, squareRoot, value);

};

const SquareRootCommand = function (value) {

  return new Command(squareRoot, square, value);

};

const CubeCommand = function (value) {

  return new Command(cube, cubeRoot, value);

};

const CubeRootCommand = function (value) {

  return new Command(cubeRoot, cube, value);

};

const PowYCommand = function (value) {

  return new Command(powY, rootY, value);

};

const RootYCommand = function (value) {

  return new Command(rootY, powY, value);

};

const ExpCommand = function (value) {

  return new Command(exp, reexp, value);

};

const LogCommand = function (value) {

  return new Command(log, powX, value);

};

const PowXCommand = function (value) {

  return new Command(powX, log, value);

};

const DivideXCommand = function (value) {

  return new Command(divideX, divideX, value);

};


const LnCommand = function (value) {

  return new Command(ln, exp, value);

};

export {
  AddCommand, SubCommand, MulCommand, DivCommand,
  PercentCommand, SquareCommand, SquareRootCommand, CubeCommand,
  CubeRootCommand, PowYCommand, RootYCommand, ExpCommand,
  LogCommand, PowXCommand, DivideXCommand, LnCommand
};

