// const button = document.querySelector("button.continue");
// console.log(button)

// button.innerHTML = "next step..."
// button.addEventListener("click",()=>{

// })

// const res = $("button.continue").on("click",()=>{
//     alert("clicked");
// }).html("next steps").css("font-size")

// console.log(res);

// const $$ = (selector) => {
//   const element = document.querySelector(selector);

//   const obj = {
//     html: (innerHTML) => {
//       element.innerHTML = innerHTML;
//       return obj;
//     },
//     on: (eventType, callbackFn) => {
//       element.addEventListener(eventType, callbackFn);
//       return obj;
//     },

//     css: (propertyName, value) => {
//       if (value === undefined) return getComputedStyle(element)[propertyName];

//       element.style[propertyName] = value;
//       return obj;
//     },

//   };

//   return obj;
// };

class OurQuery {
  constructor(selector) {
    if (selector === document) {
      this.elements = [document];
    } else if (selector === window) {
      this.elements = [window];
    } else {
      this.elements = document.querySelectorAll(selector);
    }
  }

  html(innerHTML) {
    this.elements.forEach((element) => {
      element.innerHTML = innerHTML;
    });

    return this;
  }

  on(eventType, callbackFn) {
    this.elements.forEach((element) => {
      element.addEventListener(eventType, callbackFn);
    });
    return this;
  }

  css(propertyName, value) {
    if (value === undefined)
      return getComputedStyle(this.elements[0])[propertyName];

    this.elements.forEach((element) => {
      element.style[propertyName] = value;
    });
    return this;
  }
}

const $$ = (selector) => {
  return new OurQuery(selector);
};

// $$("button.continue")
//   .html("next step")
//   .on("click", () => {
//     alert("clicked");
//   }).css("background-color","red")



// const returnValue = $.ajax({
//   url: "https://jsonplaceholder.typicode.com/comments",
//   data: {
//     postId: 1 
//   },
//   success: (result)=>{
//     console.log(result)
//   }
// })


$$.ajax = (option)=>{
  const {url, data, success} = option;
  let params = "";

  const pairs = Object.entries(data)
  for(let i=0;i<pairs.length;i++){
    const [key, value] = pairs[i];
    if(i===pairs.length-1){
      params += `${key}=${value}`
    } else {
      params += `${key}=${value}&`
    }
  }



  fetch(`${url}?${params}`)
  .then(res=>res.json())
  .then(success)

}

$$.ajax({
  url: "https://jsonplaceholder.typicode.com/comments",
  data: {
    postId: 1,
  },
  success: (result)=>{
    console.log(result);
  }
})

