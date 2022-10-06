export {};

// 枚举
enum Days {
  "onw",
  "two",
  "three",
  "four",
}
// 枚举成员会被赋值为从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射
console.log(Days[0] === "onw");
console.log(Days["onw"] === 0);
