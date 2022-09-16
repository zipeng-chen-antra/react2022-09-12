// function foo(num) {
//   if(num > 0){
//       return "bigger than 0";
//   } else if(num < 0) {
//       return "smaller than 0";
//   } else {
//       return "equal to 0";
//   }

// if(num > 0) return "bigger than 0";
// if(num < 0) return "smaller than 0";
// return "equal to 0";

// }

// console.log(foo(0));

//   const result = num > 0 ? "bigger than 0" : "smaller than zero";

//short circuit evaluation
//num > 1, but also smaller 10;
// const num = 8;
// if(num>1 && num<10){
//     // console.log("true")
// }

// if(num>1 || num<10){
//     // console.log("true");
// }

// const result = num>1 && num<7;
// console.log(result);

//if first one is truthy, we get second
//if first one is falsy, we get first

// result = '' && 'foo';  // result is assigned "" (empty string)
// result = 2 && 0;       // result is assigned 0
// result = 'foo' && 4;   // result is assigned 4

//if first one is truthy, we get first
//if first one is falsy, we get second

// result = '' || 'foo';
// result = false || false;
// result = 2 || 0;
// result = 'foo' || 4;

// console.log(result);

////////////////////////destructureing

// const person = {
//     fname: "Mike",
//     age: 11,
//     gender: "M",
//     job: "doctor",
// }

// const {job,fname,gender,age} = person;

// console.log(fname,job);

// function getInfo( {fname,job} ){
//     console.log(fname,job);
// }

// getInfo(person);

// const arr = [1,2,3,4,5];
// const [a,b,c,d,e] = arr;
// console.log(a,e);

// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5
// }

// const obj2 = {
//     ...obj,
// };

// obj2.a = obj.a;
// obj2.b = obj.b;
// obj2.c = obj.c;

// console.log(obj2);
// console.log(obj);

// const obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 4,
//         e: 5
//     },
//     und: undefined,
//     method(){
//         console.log("method");
//     }
// }

// const str = JSON.stringify(obj);
// const obj2 = JSON.parse(str);

// obj2.c.d = 400000;
// console.log("obj",obj)
// console.log("obj2",obj2);

// const obj2 = {
//     ...obj
// };

// obj2.a = 10000;
// obj2.c.d = 40000;
// console.log(obj);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);


// const person = {
//     name: "Jeffrey",
//     age: 10,
//     friend: {
//         david: {
//             age: 11
//         }
//     }
// }

// console.log(person.friend.david?.age);
// console.log(person.friend.ausicjiuqwcowqhjcq?.age);




// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f: 5,
//     f: 5,
//     f: 5,
//     f: 5,
//     f: 5,
//     f: 5,
//     f: 5,
    
// }

// const arr = [1,2,3,4,5,6,7];


// const {a,b, ...whatever} = obj;
// // const [a,b,...whatever] = arr;

// console.log(whatever);


// function getSum(...nums){
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i];
//     }
//     return sum;
// }

// const res = getSum(1,2,3,4);
// console.log(res);


// function getNames(host,guestSpeak,...guests){
//     console.log("Host:",host)
//     console.log("Speaker:",guestSpeak)
//     console.log("Remaining guests:",guests.join(" "))
// }

// getNames("Brandon","David","person1","person2","person3","person4")


// import Methods from "./util.js";
import { getSum } from "./util.js";
// console.log("hello");
// console.log(getSum(1,2));
// console.log(Methods)
// const {getProduct, getSum} = Methods;

console.log(getSum(1,2));