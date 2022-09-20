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

function getBeef() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("beef")
        }, 1000);
    })
}

function cookBeef(beef){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(beef) resolve("patty")
            else reject("no beef");
        }, 1000);
    })
}

function getBuns(patty){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({patty,buns:"buns"})
        }, 1000);
    })
}

function makeBurger(patty,buns){
    return new Promise((resolve)=>{
        setTimeout(() => {
            if(patty&&buns) resolve("burger")
            else reject("no ingredient");
        }, 1000);
    })
}


getBeef()
.then((beef)=>{
    console.log(beef)
    return cookBeef(beef)
}).then(patty=>{
    console.log(patty);
    return getBuns(patty)
}).then(obj=>{
    console.log(obj.buns,obj.patty)
    return makeBurger(obj.patty,obj.buns)
}).then(burger=>{
    console.log(burger)
})





