export {};
// 在ts中，我们使用接口来定义对象的类型
// 什么是接口？
// 接口的特点
// 什么时候要使用到接口？

// 例子
interface Person {
  name: string;
  age: number;
}
let myName: Person = {
  name: "CaiJunJie",
  age: 18,
};
// 在上面的例子中，我们定义了一个接口 Person，接着定义了一个变量myname，他的类型是Person，这样我们就约束了这个变量的形状必须与接口Person一直
// 接口一般首字母为大写
// 定义的变量不允许比接口多或者少一些属性

// 可选属性
// 有时候我们希望不要完全匹配一个接口，那么可以使用可选属性
interface Person1 {
  name: string;
  age?: number; //可选属性的含义是该属性可以不存在
}
let myName2: Person1 = {
  name: "Caijunjie",
  //   aa:'1'//但是仍然不允许新增未定义的属性
};

// 任意属性
// 有时候我们希望一个接口有任意的属性
// interface Person2 {
//   name: string;
//   age: number; //注意如果是有任意属性，那么所有的属性都必须是任意属性的子集，number不是string类型的子集，报错。
//   [propName: string]: string;
// }
interface Person2 {
  name: string;
  age: number;
  [propName: string]: string | number;
}
let my: Person2 = {
  name: "1",
  age: 2,
  aaa: "1",
  bbb: 2,
};

// 只读属性
// 有时候我们希望对象的一些字段只能在创建的时候被赋值,那么可以使用readonly定义只读属性
interface Person3 {
  readonly id: number;
  name: string;
}
let my3: Person3 = {
  id: 1,
  name: "111",
};
// my3.id = 2;//报错,因为只有只读属性readonly只能在被创建的时候赋值

// 接口的继承
interface Face1 {
  alert(): void;
}
interface Face2 extends Face1 {
  lastFn(): void;
}

// 泛形接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArr: CreateArrayFunc;
createArr = <T>(length: number, value: T): Array<T> => {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
console.log(createArr(10, "X"));

interface CreateArrayFunc2<T> {
  (length: number, value: T): T[];
}
let createArr2: CreateArrayFunc2<string>;
// 函数是用泛型,需要写在前面
createArr2 = <T>(length: number, value: T): Array<T> => {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
console.log(createArr2(5, "XXX"));
