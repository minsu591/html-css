//ch02/function3.js
//고차함수 => 변수 할당. 함수에서 반환되는 함수
let arr = [];

//메소드의 매개값으로 함수 사용
arr.forEach(function(){

});

//함수의 반환값으로 함수 사용
function addFnc(){
    return function (a,b){
        return a+b;
    }
}

//사용할 때 let 변수에 정의하고 사용해야함.
let fnc = addFnc();
console.log(fnc(10,20));

const s1 = {
    sno : '001',
    score : 80
}

const s2 = {
    sno : '002',
    score : 90
}
arr.push(s1);
arr.push(s2);
//filter(function()) => function값을 만족하는 새로운 배열을 생성해주는 메소드
//오름차순으로 접근하여
let newArr = arr.filter(function(val,idx,ary){
    return val.score > 90;
});
// console.log(typeof newArr);
// console.log(newArr.length);
// console.log(newArr);
let str = createTable(females);
document.write(str);