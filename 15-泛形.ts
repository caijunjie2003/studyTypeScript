export {};
// 泛形

function createArray<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
createArray<string>(3, "x"); //['x','x','x']

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
// 参数的类型会作为T,U 后给函数使用
swap([7, 1]);

// 泛形约束
interface lengthwidhow {
  length: number;
}
function logLength<T extends lengthwidhow>(arg: T): T {
  console.log(arg.length); //泛形T不一定包含熟悉length,所以使用泛形约束
  return arg;
}
logLength([1, 2, 3, 4, 5, 6]);
