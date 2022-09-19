const arr = [1,2,3,4];

arr.forEach((e,i,arr)=>{
    console.log(e,i,arr)
})

Array.prototype.ourForEach = function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i],i,this);
    }
}

arr.ourForEach((e,i,arr)=>{
    console.log(e,i,arr)
})

//create your own map, filter, reduce;


