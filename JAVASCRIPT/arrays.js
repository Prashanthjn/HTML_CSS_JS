//single array or 1d array
var array=['prashi',21];
console.log(array);


//multi-d array
var darr=[['prashi',20],['perk',20],['ashish','vampire',21]];
console.log(darr);


//array acess using indexing
console.log(array[1]);

//modifying an array
array[1]=20;
console.log(array);

// darr=[['prashi',20],['perk',20],['ashish','vampire',21]];
ele=darr[2][2]
console.log(ele);

//to append an element to array
darr.push(['ravi',20,'suhas']);
console.log(darr);

//to delete an element from an array
darr.pop();
console.log(darr)

//shift function removes the first elemnt from array
darr.shift();
console.log(darr);
darr.unshift(['prathik',20]);
console.log(darr);

//unshift function will delete the and replace the shifted elemnt by mentioned element 