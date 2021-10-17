//--symbol转boolean--
let s1 = Symbol(false)
console.log(Boolean(s1));//true


//--对象中 属性名 定义为symbol值的，不能通过点访问--
//属性值定义为symbol，可以通过点访问
let s2 = Symbol()
let s3 = {
    [s2]: 'tianbao',
    s4 : Symbol('tianbao')
    
}

console.log(s3[s2],s3.s4);  //tianbao Symbol(tianbao)


//--消除魔术字符串--
//消除方法为将常量改变为变量
const shapeType = {
    //shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。因此改用 Symbol 值。
    triangle: Symbol(),  

}
function getArea(shape,options){
    let area = 0;
    switch(shape){
        case 'Triangle':   // 魔术字符串
            area = 0.5*options.width*options.height;
            break;
        case shapeType.triangle:
            area = 0.5*options.width*options.height;
            break;
    }
    return area;
}
getArea('Triangle',{width:100,height:100}); //5000
getArea(shapeType.triangle,{width:100,height:100});//5000


//Symbol.for(),Symbol.keyFor()
let s5 = Symbol.for('foo');
let s6 = Symbol.for('foo');
s5 === s6 // true

let s7 = Symbol('foo');
let s8 = Symbol('foo');
s7 === s8 // false

Symbol.keyFor(s5) // "foo"
Symbol.keyFor(s7);  //undefined


