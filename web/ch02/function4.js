//ch02/function4.js

var a = 1;
var b = 5;

function outerFunc(){
    //outerFunc 내에서만 의미있는 함수
    function innerFunc(){
        a = b;
    }
    console.log(a);
    a=3;
    b=4;
    innerFunc();
    console.log(a);
}
outerFunc();
a=0;
console.log(a);
a=6;
b=7;
console.log(a);
