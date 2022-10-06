"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 在ts中，数组类型有多种定义的方式，比较灵活
// 1. 类型[]表示法
let numberArr = [1, 1, 2, 3, 5];
// numberArr = ['1']//报错 数组的项中不允许出现[]前面以外的类型
// 数组的一些方法的参数，也会根据数组在定义时约定的类型进行限制
// numberArr.push('1')//报错
// 数组泛形
let fiboacci = [1, 2, 3, 4, 5, 6];
let numberArr1 = [1, 2, 3, 4, 5, 6];
// any在数组中的应用
let anyArr = [1, "2", {}, []];
