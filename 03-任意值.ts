export {};
// 什么是任意值？any类型
// 有什么特点？ 如果一个变量的类型是any的话，那么它在被赋值的过程中，是可以随意改变它的类型的
// 并且 可以访问它身上的所有属性和方法，可以认为 对nay类型的所有操作，返回的内容的类型都是any

let str1: string = "seven";
// str1 = 8;
// 如果是一个普通类型，在赋值的过程中，改变它的类型是不被允许的

// 如果是any任意类型的话，则允许被赋值为任意类型
let any1: any = "12121";
any1 = 7;

// 任意值的方法和属性
// 在任意值上访问任何属性和方法都是被允许的
let any2: any = 1;
// any2.forEach()
// any2.xxx.qqq;
// 可以认为，声明一个变量为任意值后，对它的任何操作，返回的内容的类型都是任意值

// 未声明类型的变量
let any3;
// 变量在声明的时候，如果没有指定其类型，那么它会被识别为任意值类型
any3 = "1";
