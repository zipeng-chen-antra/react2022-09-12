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


$$.ajax = (options) => {

}

$$.ajax();