//variable1.js : 변수의 호이스팅
// console.log(sum); //변수를 선언하지 않고 호출했을 때 에러를 발생시킴
let sum = 10; //변수 선언과 동시에 초기화

//var는 선언부를 페이지의 가장 처음으로 끌어올림 : 호이스팅
//선언 라인 적기 전에 호출해도 문제 없음. 하지만 초기화되지는 않음
console.log(sum2);
var sum2 = 100;

//함수도 let이나 var로 정의될 수 있고 let일 땐 선언을 해야함
let myName = function myName(){
    return '홍길동';
}

console.log(mn);
//object (참조 타입 변수) => object, array, function(){}
//참조 타입이라서 선언 전에 호출해서 사용 가능함
function mn(){
    return '홍';
}

var result = 100;
{
    //var 키워드는 전역 변수인지 지역 변수인지로만 구분함.
    //{}안에서 의미 있는 값을 가지는게 아니라
    //위에서 선언한 result를 {}안에서 다시 선언하여 run()이후에는 result = 50이 됨.
    //하지만 let은 블럭 단위로 구분되고 선언됨.
    var result = 50;
}
function run(){
    //지역 변수 (local variable)
    var result= 0;
    console.log(result);
}
run();
console.log(result);

