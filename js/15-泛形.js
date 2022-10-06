"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 泛形
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, "x"); //['x','x','x']
// 多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
// 参数的类型会作为T,U 后给函数使用
swap([7, 1]);
function logLength(arg) {
    console.log(arg.length); //泛形T不一定包含熟悉length,所以使用泛形约束
    return arg;
}
logLength([1, 2, 3, 4, 5, 6]);
