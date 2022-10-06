"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 枚举
var Days;
(function (Days) {
    Days[Days["onw"] = 0] = "onw";
    Days[Days["two"] = 1] = "two";
    Days[Days["three"] = 2] = "three";
    Days[Days["four"] = 3] = "four";
})(Days || (Days = {}));
// 枚举成员会被赋值为从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射
console.log(Days[0] === "onw");
console.log(Days["onw"] === 0);
