const add = document.querySelector(".increment");
const minus = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const count = document.querySelector(".count");



// add.addEventListener("click",()=>{
//     const num = +count.textContent + 1;
//     count.textContent = num;
//     // console.log(typeof count.textContent);
// })

// minus.addEventListener("click",()=>{
//     const num = +count.textContent - 1;
//     count.textContent = num;
//     // console.log(count.textContent);
// })

// reset.addEventListener("click",()=>{
//     count.textContent = 0;
// })

let counter = 0
count.textContent = counter;

add.addEventListener("click",()=>{
    counter += 1;
    count.textContent = counter;
})

minus.addEventListener("click",()=>{
    counter -= 1;
    count.textContent = counter;
})

reset.addEventListener("click",()=>{
    counter = 0;
    count.textContent = 0;
})