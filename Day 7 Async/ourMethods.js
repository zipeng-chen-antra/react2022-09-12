Array.prototype.ourForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

//create your own map, filter, reduce;

Array.prototype.ourMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    const newElem = cb(this[i], i, this);
    temp.push(newElem);
  }
  return temp;
};

Array.prototype.ourFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    const bool = cb(this[i], i, this);
    if (bool) {
      temp.push(this[i]);
    }
  }
  return temp;
};

Array.prototype.ourReduce = function (cb, initValue) {
  let prev = initValue;

//   if (this.length === 1 && initValue === undefined) return this[0];

//   let arr = initValue === undefined ? [...this] : [initValue, ...this];
  for (let i = 1; i < this.length; i++) {
    prev = cb(prev, this[i]);
  }

  return prev;
};

// const arr = [
//     {name:"egg",quantity:10},
//     {name:"butter",quantity:5},
//     {name:"cheese",quantity:2},
// ];

// const result = arr.ourReduce((prev,curr)=>{
//     console.log(prev);
//     console.log(curr);
//     return prev + curr;
// },)

// Array.prototype.newReduce = function (cb, initVal) {
//   let prevValue;
//   let arr = initVal === undefined ? this : [initVal, ...this];
//   let result =
//     arr[0] !== undefined ? arr[0] : "Error: Empty array with no initial value";
//   // initialize result in case there's no initial value or only one value
//   for (let i = 1; i < arr.length; i++) {
//     prevValue = i === 1 ? arr[i - 1] : result;
//     let curValue = arr[i];
//     result =
//       initVal === undefined
//         ? cb(prevValue, curValue, i, arr)
//         : cb(prevValue, curValue, i - 1, arr);
//   }
//   return result;
// };

const arr = [1,2];

const result = arr.ourReduce((prev, curr) => {
  // console.log(prev);
  return prev + curr;
},0);

console.log(result);
