function A(){
    this.a = 123
}
function B(){
    A.call(this)
}

function inhert(Parent,Child){ //大写  每一句后边都要写分号
    let f = Object(Parent.prototype)
    f.constructor = Child
    Child.prototype = f
    
}

inhert(A,B)
console.log(new B());