// 元组
// 数组合并了相同类型的对象，而元组合并了不同类型的对象

// 定义一对值分别为string和number的元组
let tom: [string, number] = ["Tom", 1];
// 直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
// tom = [1]//报错
// tom.push(true)//当添加越界的元素时,它的类型会被限制为元组中每个类型的联合类型