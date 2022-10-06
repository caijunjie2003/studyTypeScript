export {};
// 什么是联合类型？
// 使用 | 分割的类型就是联合类型
// 联合类型的特点？
// 允许变量的类型是这两个类型中的一个，当不能是其他的类型
// 访问联合联系的属性或者方法的时候，只能访问联合类型所有的类型里面共有的属性和方法
// 什么时候会用到联合类型？
// 在我们不确定一个变量的类型可能为多个的时候，可以使用联合类型来划分一个类型的范围
let strAndNUmber: string | number;
strAndNUmber = 1;
strAndNUmber = "2";
// 联合类型使用 | 分割每个类型
// string | number 的含义是，允许改变量的类型是 string 或 number，但不能是其他的类型

// 访问联合类型的属性和方法
// 当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问改联合类型的所有类型里共有的属性或方法
// function getLength(sum: string | number): number {
//   return sum.length; //报错字符串没有length、
// }
function getLength(sum: string | number): string {
  return sum.toString();
}
