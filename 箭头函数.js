
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
      this.s2++;  //this指向window
    }, 1000);
}

let timer = new Timer();


setTimeout(() => console.log('s1: ', timer.s1), 3100);
console.log('s2: ', timer.s2)
// s1: 3

//箭头函数写法

var f = v => v;
// 等同于
var f = function (v) {
  return v;
};


//箭头函数直接返回一个对象，必须在对象外面加上括号
let getTempItem = id => ({ id: id, name: "Temp" });


//箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
var sum = (num1, num2) => { return num1 + num2; }


//解构
let fun = ({value,num}) => toltal = value*num
let result =fun({
    value:10,
    num:3
})
console.log(result);  //30

console.log("git test --- from liang");


