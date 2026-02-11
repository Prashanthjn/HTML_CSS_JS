function nextline(arr,item){
    arr.push(item);
    return arr.shift();
}

var testarr=[1,2,3,4,5];
console.log("before:"+ JSON.stringify(testarr));
console.log(nextline(testarr,6));
console.log("After: "+JSON.stringify(testarr));