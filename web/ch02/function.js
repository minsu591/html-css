//ch02/function.js

//1. 함수 선언식 정의
//=> 실제로 함수 표현식처럼 정의됨.
//javascript에서는 변수를 정의하는 의미가 없기 때문에
//함수 사이에는 변수 이름만 오면됨

function sum(num1=0,num2=0){ //초기값 지정
    if(num1==undefined){
        num1 = 0;
    }
    return num1 + num2;
}

console.log(sum(10,20)); //return값이 없을 때 => NaN

//2.함수 표현식 정의
//변수 = string, number ,boolean, undefiend, object
//변수 내의 익명함수를 변수의 이름으로 호출 가능
let mySum = function(val1=0, val2=0){
    return val1 + val2;
}
console.log(mySum(10,20));
let yourSum = mySum;
console.log(yourSum(10,30));

//3. 화살표 함수
//function 키워드 빼고 매개변수를 받아서 실행
let otherSum = (val1, val2) =>{
    return val1+val2;
}
//return 구문 생략도 가능
let oSum = (val1, val2) => val1+val2;

//배열에는 forEach();
//배열 인수에 대해 각각 실행할 함수를 괄호 안에 삽입
//function(val,idx,ary)
//val : 인수의 값, idx : 인수 인덱스, ary : 해당 배열
const arr = [10,22,17,23,34,42];
let sumAry = 0;
arr.forEach(function(val,idx,ary){
    if(idx%2==0){
        sumAry+=val;
    }
});
console.log(`짝수번째 값의 합 : ${sumAry}`);
//함수 이름만 따로 빼서 forEach 괄호 내에 넣어도 가능
//arr.forEach(getOddSum);
function getOddSum(val, idx, ary){
    if(idx%2 ==1){
        sumAry+=val;
    }
}