export {};
// javaScript的类型分为 原始数据类型 和 引用数据类型

// 原始数据类型包括：布尔值Boolean，数字Number，字符串String,null,undefined,以及Es6新增的symbol,ES10的新类型·BigInt
// 本章节介绍的是原始数据类型在ts中的使用

// 布尔值
let isDone: boolean = true;

// 注意，使用构造函数Boolean创建的对象不是布尔值类型
// let isBooleanNewObject: boolean = new Boolean(true);//报错
let isBooleanNewObject: Boolean = new Boolean(1); //new Boolean new的对象是 Boolean对象类型
// console.log(typeof isBooleanNewObject);

// 数字
let num1: number = 6;
let num2: number = 0xf00d;
let num3: number = NaN;
let InfinityNumber: number = Infinity;

// 字符串
let myName: string = "CaiJunJie";
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello,my name is ${myName}`;

// 空值
// 在js中没有空值(void)的感念,在ts中void表示没有任何返回值的函数
function alertName(): void {
  alert(`My name is ${myName}`);
}
// 声明一个void类型的变量没有作用和意义,因为只能将它赋值为undefined/null
let unusable: void = undefined;

// Null和Undefined
// 在ts中,可以使用null和undefined来定义这两个原始数据类型
let u: undefined = undefined;
let n: null = null;
// 和void的区别,undefined和null是所有类型的子类型,也就是说undefined可以赋值给number类型的变量
// 而void类型的变量不能赋值给number类型的变量
// let unmb: number = u;//注意,是在非严格模式下的
