
// let count = 0
// document.querySelector("button").addEventListener("click",()=>{
//     count++;
//     console.log(count);
// })


// function foo(){
    // setTimeout(()=>{
    //     console.log("something");
    // },4000)
//     // let i=0;
//     // while(i<100000000){
//     //     i++
//     // }

    // console.log("loop completed")
    // console.log("loop completed")
    // console.log("loop completed")
    // console.log("loop completed")
    // console.log("loop completed")
// }

// foo();



// function getUserInfo(callback){
    
//     //after 2s
//     setTimeout(()=>{
//         const user = {name: "Brandon", email:"brandon@antra.com"};
//         callback(user);
//     },2000)
// }

// getUserInfo((user)=>{
//     console.log(user.name);
//     console.log(user.email);
// });




// function getBeef(){
//     return "beef";
// }

// function cookBeef(beef){
//     if(beef) 
//     return "patty";
// }

// function getBuns(){
//     return "buns";
// }

// function makeBurger(patty,buns){
//     if(patty && buns)
//     return "burger";
// }

// const beef = getBeef();
// const patty = cookBeef(beef);
// const buns = getBuns();
// const burger = makeBurger(patty,buns);
// console.log(burger);


// console.log("oiajshcqwjhcoiwqjchwq")


// function foo(){
//     setTimeout(()=>{
//         // const data = "data";
//         // callback(data);
//         return "data"
//     },1000)

//     // return "data"
// }

// const data = foo();
// console.log(data);


// const promise2 = new Promise((resolve)=>{
//     resolve("promise 2")
// })

// const promise = new Promise((resolve)=>{
//     const obj = {
//         value: "value",
//         p: promise2
//     }
//     resolve(obj)
// })

// promise.then((data)=>{
//    console.log(data.value)
//    return data.p
//     // return promise2
// }).then(data=>{
//     console.log(data);
// })


// console.log(result);
// result.then(data=>{
//     console.log(data);
// })


//this is to show where "resolve" comes from
// class Hello {
//     constructor(callback){
//         function resolve(){
//             console.log("resolve")
//         }
//         callback(resolve);
//     }
// }

// const hello = new Hello((resolve)=>{
//     resolve();
// })

