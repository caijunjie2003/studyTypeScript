export {};

//在js中，又两种常见的定义函数的方式------函数声明  和 函数表达式

// function sum(x, y) {
//   return x + y;
// }

// let sum2 = function (x, y) {
//   return x + y;
// };

// 在ts中 需要对函数的输入和输出进行类型定义
let typeFn = (x: number, y: number): number => {
  return x + y;
};
// typeFn(1, 2, 3);//注意：输入多余的或者少于的参数，是不被允许的
// typeFn(1)
typeFn(1, 2);

// 用接口定义函数的形状
interface SerachFunc {
  (sourece: string, subString: string): boolean;
}
let mySerach: SerachFunc = (x, y): boolean => {
  return x == y;
};

// 可选参数
// 如何定义可选的参数呢？
let fn3 = (x: number, y?: string): void => {};
// 参数默认值
// 在Es6中，我们允许给函数的参数添加默认值，ts会将添加了默认值的参数识别为可选参数
let fn4 = (name: string = "caijunjie") => {};
