"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tsc -init 初始化ts项目
// tsconfig.json中配置outDir :'需要在哪里自动生成js文件';
// 运行---运行任务----tsc监视任务
// 导出一个空{} 避免作用域冲突
let foo = 1;
// foo.splict("");
// TypeSciprt是弱类型和javaScipr一样
// 类型系统按照【是否允许隐式类型转换】来分类，可以分为强类型和弱类型
console.log(typeof (foo + "11")); //string，允许隐式类型转化
// TypeScript是完全兼容JavaSciprt的，它不会修改JavaSciprt允许时的特性，所以它们都是弱类型的
// 大部分的js代码都只需要经过少量的修改就变成了TypeScript代码，得益于ts强大的类型推论，会自动的推润出数据是什么类型的
// TypeScript非常适用于大型项目，类型系统可以为大型项目带来更高的可维护性，以及更少的bug
// 1.ts是添加了类型系统（类型校验）的js，试用与任何规模的项目
//2.ts是一门静态类型，弱类型的语言
//3.ts是完全兼容js的，它不会修改js运行时的特性
//4.ts可以便宜为js，然后运行在浏览器，node.js等任何能运行js的环境中
//5.ts可以和js共存，这意味着js项目能够渐进式的迁移到ts
//6.ts增强了编辑器的功能，提供了代码补全，接口提示的能力
//7.ts又用活跃的社区，大多数常用的第三方库都提供了类型声明
//8.ts与标准同步发展，符合最新的ECMASciprt标准
