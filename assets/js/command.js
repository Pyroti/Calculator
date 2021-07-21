import { Command } from './interface.js';

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const prc = (x) => x / 100;
const reprc = (x) => x * 100;
const ssq = (x) => x ** 2;
const srt = (x) => x ** (1 / 2);
const tsq = (x) => x ** 3;
const trt = (x) => Math.cbrt(x);
const ysq = (x, y) => x ** y;
const yrt = (x, y) => ((x < 0 && y % 2 === 1)
  ? (-1 * ((-1 * x) ** (1 / y))) : x ** (1 / y));
const exp = (x) => Math.E ** x;
const reexp = (x) => Math.log(x) / Math.log(Math.E);
const log = (x) => Math.log10(x);
const xsq = (x) => 10 ** (x);
const odiv = (x) => 1 / x;
const ln = (x) => Math.log(x);

const AddCommand = function (value) {

  return new Command(add, sub, value); // сложение

};

const SubCommand = function (value) {

  return new Command(sub, add, value); // вычетание

};

const MulCommand = function (value) {

  return new Command(mul, div, value); // умножение

};

const DivCommand = function (value) {

  return new Command(div, mul, value); // деление

};

const PrcCommand = function (value) {

  return new Command(prc, reprc, value); // процент

};

const SsqCommand = function (value) {

  return new Command(ssq, srt, value); // возведение в квадрат

};

const SrtCommand = function (value) {

  return new Command(srt, ssq, value); // корень из квадрата

};

const TsqCommand = function (value) {

  return new Command(tsq, trt, value); // возведение в третью степень

};

const TrtCommand = function (value) {

  return new Command(trt, tsq, value); // корень из третьей степени

};

const YsqCommand = function (value) {

  return new Command(ysq, yrt, value); // возведение в y степень

};

const YrtCommand = function (value) {

  return new Command(yrt, ysq, value); // корень из y степени

};

const ExpCommand = function (value) {

  return new Command(exp, reexp, value); // экпонента от х

};

const LogCommand = function (value) {

  return new Command(log, xsq, value); // экпонента от х

};

const XsqCommand = function (value) {

  return new Command(xsq, log, value); // 10 ^ x

};

const OdivCommand = function (value) {

  return new Command(odiv, odiv, value); // 1 / x

};


const LnCommand = function (value) {

  return new Command(ln, exp, value); // логарифм по основанию e

};

export {
  AddCommand, SubCommand, MulCommand, DivCommand,
  PrcCommand, SsqCommand, SrtCommand, TsqCommand,
  TrtCommand, YsqCommand, YrtCommand, ExpCommand,
  LogCommand, XsqCommand, OdivCommand, LnCommand
};

