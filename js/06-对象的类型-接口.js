"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = {
    name: "CaiJunJie",
    age: 18,
};
let myName2 = {
    name: "Caijunjie",
    //   aa:'1'//但是仍然不允许新增未定义的属性
};
let my = {
    name: "1",
    age: 2,
    aaa: "1",
    bbb: 2,
};
let my3 = {
    id: 1,
    name: "111",
};
let createArr;
createArr = (length, value) => {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(createArr(10, "X"));
let createArr2;
// 函数是用泛型,需要写在前面
createArr2 = (length, value) => {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(createArr2(5, "XXX"));
