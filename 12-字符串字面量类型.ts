export {};
type EventNames = "click" | "scroll" | "mouseove";

function handeoleEvenet(el: Element, event: EventNames) {}
handeoleEvenet(document.getElementById("11")!, "click");
// handeoleEvenet(document.getElementById("11")!, "11"); //使用type定了一个字符串字面量类型 它只能娶三种字符串中的一种
