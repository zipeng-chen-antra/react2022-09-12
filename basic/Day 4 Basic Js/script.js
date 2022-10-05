//data types
// var str = "string";
// console.log(str ,typeof str)
// var num = 1;
// console.log(num ,typeof num)
// var bool = true;
// console.log(bool ,typeof bool);
// var und = undefined;
// console.log(und ,typeof und);
// var n = null;
// console.log(n ,typeof n);

// var string = "123";
// var string2 = "abc";
// var number = 0;

// console.log(typeof (number + string))

// console.log(!!number);

// console.log(typeof +string)

// const obj = {
//     quantity: "100"
// }
// console.log(50 + +obj.quantity);

//0, "", null, undefined are considered falsy value

// if(undefined){
//    console.log("truthy")
// } else {
//     console.log("falsy")
// }


//== vs ===
//== coercion
//=== coercion doesn't happen; if two variables are of different types, false
// if(0===false) {
//   console.log("are equal");
// } else {
//   console.log("not equal");
// }

// var arr = [1,2,3];
// var obj = {a:1,b:2};
// function func(){

// }
// console.log(arr, typeof arr);
// console.log(obj, typeof obj);
// console.log(func, typeof func);


// var a = "a";
// var b = a; //b = "a";
// b = "b"
// console.log("a:",a);
// console.log("b:",b);

// function changePrimitive(value){
//     value = "new value";
// }

// var value = "old value";
// console.log("before change",value);
// changePrimitive(value);
// console.log("after change",value);



// function changeRef(obj){
//     obj.a = 1000000
// }

// var obj = { a: 1 }
// // var obj2 = obj; //12345 Some Street
// console.log("before change",obj);
// // obj2.a = 100000;
// changeRef(obj);
// console.log("after change",obj);


// var arr = [1,2,3,4];
// var arr2 = arr;
// arr2[0] = 1000;
// console.log(arr);

// var obj1 = {a:{b:1}};
// var obj2 = {a:{b:1}};

// if(obj1.a.b===obj2.a.b){
//    console.log("truthy")
// } else {
//     console.log("falsy")
// }

// function change(value){
//     value.a = 20000;
//     value = {a:200000};
//     value.a = "aoicjqhwucoiqwjhcoiwqjxoqw";
// }

// var obj = {a:1};

// change(obj);
// console.log(obj);



////////////////////////hoisting 
// console.log(a);
// var a = "a";

// var a = undefined;
// console.log(a);
// a = "a";


// console.log(sum(1,2));

// function sum(a,b){
//     return a + b;
// }


// console.log(v);
// let a = "a";
// var v = "v";
// const c = "c";
// function func(){

// }


///////////////scopes
// let a = "a";
// const value = "value";
//function scope
// function foo(){
//     var v = "ok";
//     const value = "value inside foo function";
//     if(true){
//         var v = "var";
//         let block = "block";
//         console.log(value);
//     }
//     // console.log(v);
//     // console.log(block);
// }
// foo();

//block scope
// if(true){
//     let value = "value";
//     const con = "const";
// }


// function outerFunc(){
//     let count = 0;
//     function show(){
//         console.log(count);
//     }
//     function add(){
//         count++;
//     }
//     function reset(){
//         count = 0
//     }
//     return {
//         show: show,
//         add: add,
//         reset: reset
//     };
// }


// const functions = outerFunc();
// functions.add();
// functions.add();
// functions.add();
// functions.add();
// functions.show();
// functions.reset();
// functions.show();




// //not private
// let count = 0;
// function add(){
//     count++;
// }

// add();
// add();
// add();
// add();
// console.log(count);



// function foo(){
//     let count = 0;
//     count++;
//     console.log(count);
//     return;
// }

// foo();
// foo();
// foo();
// foo();
// foo();
// foo();
// foo();


//functions
// function foo(){
//     //code here

//     return 5;
// }

// console.log(foo)
// console.log(foo())


