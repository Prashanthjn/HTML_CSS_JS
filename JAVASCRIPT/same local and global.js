var gvar=20;

function f1(){
    var gvar=30;
    console.log(gvar);
}
f1();
console.log(gvar);
// if we have same same then the local var will take the priority 
