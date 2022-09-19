// const obj1 = {
//     a1: 1,
//     b1: 1,
//     sayHi(){
//         console.log("hi")
//     }
// }

// const obj2 = {
//     a2: 2,
//     b2: 2,
//     __proto__: obj1,
// }

// const obj3 = {
//     a3: 3,
//     b3: 3,
//     __proto__: obj2 
// }

// console.log(obj3.sayHi());


function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.canDrive = function(){
    return this.age >= 18;
}

Person.prototype.canDrink = function(){
    return this.age >= 21;
}





// Person.prototype.random = "random"
// Person.prototype.random2 = "random2"
// p1 = {
//     name: "Brandon",
//     age: 11,
//     canDrive: function(){},
//     __proto__: {
//         random: "random",
//         random2: "random2"
//     }
// }






// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//         // this.canDrive = function(){
//         //     return this.age >= 18;
//         // }
//     }
    
//     canDrive(){
//         return this.age >= 18;
//     }
// }


// Person.prototype.canDrive = function(){
//     return this.age >= 18;
// }

// const p1 = new Person("Brandon",11);
// const p2 = new Person("Jack",12);
// const p3 = new Person("Mike",19);



// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p1.canDrive());
// console.log(p2.canDrive());
// console.log(p3.canDrive());


// Array.prototype.sayHello = function(){
//     console.log("hello");
// }

// const arr = [1,2,3,4];

// const arr = new Array(1,2,3,4);
// console.log(arr.constructor);


// function foo(){
//     return "foo"
// }

// console.log(foo.constructor);
// console.log()


const obj = {
    a: 10,
    b: 20,

    getA(){
        console.log("this",this);
        return this.a
    },
    getSum(){
        return this.a + this.b;
    },
    getProduct(){
        return this.a * this.b;
    }
}

const obj2 ={
    a: 100,
    b: 100
}


//bind
// const copyFunc = obj.getA;
// const result = copyFunc.bind(obj2)();
// console.log(result);

// const result = this.a;
// console.log(obj.getA());


//Call
// const copyFunc = obj.getA;
// console.log(copyFunc.call(obj2));


//IIFE
const add = (function (){
    let count = 0;

    return ()=>{
        count++;
        console.log(count);
    };
})();


// function bar(){
//     console.log("bar");
// }

// function foo(cb){
//     cb();
// }



// function sum(a){
//     return function foo(b){
//         return function bar(c){
//             return a + b + c;
//         }
//     }
// }

// const sum = (a,d) => b => c => {
//     return a + b + c + d;
// }

// const result = sum(1,4)(2)(3)
// console.log(result);



// console.log(this);
// const foo = ()=>{
//     console.log(this);
// }
// foo(); 

