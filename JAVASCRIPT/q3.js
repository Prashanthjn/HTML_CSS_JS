function nesloop(val){
    if (val>=5){
        if (val<=50){
            return "within 5 and 50";
        }
    }
    return "not in range";
}
console.log(nesloop(300));

//or 

function nesloop(val){
    if (val>=5 && val<=50){
      
            return "within 5 and 50";
        
    }
    return "not in range";
}
console.log(nesloop(30));