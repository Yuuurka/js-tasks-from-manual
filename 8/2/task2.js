function obj(name) {
    this.name = name;
}

let obj1 = new obj();
let obj2 = new obj1.constructor('Pete');

console.log( obj2.name );