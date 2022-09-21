//async
//callback hell

// function getBeef(callback){
//     setTimeout(()=>{
//         const beef = "beef";
//         console.log("beef is ready");
//         callback(beef);
//     },1000)
// }

// function cookBeef(beef,callback){
//     setTimeout(()=>{
//         if(beef){
//             const patty = "patty";
//             console.log("patty is ready")
//             callback(patty);
//         }
//     },1000)
// }

// function getBuns(callback){
//     setTimeout(()=>{
//         const buns = "buns";
//         console.log("buns are ready")
//         callback(buns);
//     },1000)
// }

// function makeBurger(patty,buns,callback){
//     setTimeout(()=>{
//         if(patty&&buns){
//             const burger = "burger";
//             console.log("burger is ready");
//             callback(burger);
//         }
//     },1000)
// }

// getBeef((beef)=>{
//     //once you got beef, cook it
//     cookBeef(beef,(patty)=>{
//         getBuns((buns)=>{
//             makeBurger(patty,buns,(burger)=>{
//                 console.log(burger + " is ready to serve");
//             })
//         });
//     });
// });

let bunsConut = 3;

function getBeef() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("beef");
    }, 1000);
  });
}

function cookBeef(beef) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (beef) resolve("patty");
      else reject("no beef");
    }, 1000);
  });
}

function getBuns() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(bunsConut>0){
            resolve("buns");
            bunsConut -= 1;
        } else {
            reject("we run out of buns")
        }
    }, 1000);
  });
}

function makeBurger(patty, buns) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (patty && buns) resolve("burger");
      else reject("no ingredient");
    }, 1000);
  });
}

async function asyncBurger() {
    try {
        const beef = await getBeef();
        console.log(beef);
        const patty = await cookBeef(beef);
        console.log(patty);
        const buns = await getBuns();
        console.log(buns);
        const burger = await makeBurger(patty, buns);
        console.log(burger);
    } catch(err){
        console.log(err);
    }
}

asyncBurger();
asyncBurger();
asyncBurger();
asyncBurger();

function thenBurger(){
    getBeef()
    .then((beef) => {
        console.log(beef);
        return cookBeef(beef);
    })
    .then((patty) => {
        console.log(patty);
        return getBuns();
    })
    .then((buns) => {
        console.log(buns);
        return makeBurger("patty", buns);
    })
    .then((burger) => {
        console.log(burger);
    })
    .catch((err)=>{
        console.log(err);
    })
}

// thenBurger();
// thenBurger();
// thenBurger();
// thenBurger();

///////////async await

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({data:"aiusjchqucojqw"});
//         },3000)
//     })
// }

// p.then(data=>{
//     console.log(data);
// })

// console.log("hello")

// async function foo(){
//     // p.then(data=>{
//     //     console.log(data);
//     // })

//     const data = await getData();

//     console.log(data);
//     console.log("hello inside async func")

// }
// foo();
