//ch02/function2.js
//arguments
//arguments 객체는 array가 아님.
//length외의 array의 함수 속성이 없음


function sum(n1,n2,n3){
    //매개값으로 들어온 갯수 : arguments.length
    let result = 0;
    for (let i =0; i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
console.log(sum(10)); // NaN, n2,n3가 undefined 상태로 들어감. 오류는 X
console.log(sum(10,20,30));
console.log(`결과 : ${sum(20,20)}`);

function mySum(a1,a2, ...arg){
    if(a1==undefined){
        return 0;
    }
    if(a2==undefined){
        return a1;
    }
    let result = 0;
    //arg에 대한 배열의 값을 result에 계속 추가
    arg.forEach((val)=>{
        result += val;
    });
    return a1 + a2 + result;
}
console.log(mySum(10,20,30,40,50,60,70));

//배열에 값을 계속 추가 가능.
//참조한 배열까지 변함
let arr1 = [1,2,3];
let arr2 = arr1;
arr2[3] = 4;
console.log(arr1, arr2);

//주소 복사 X, 새로운 배열을 만들 때 사용 [...arr1]
let arr3 = [...arr1];
arr3.push(5);

console.log(arr1,arr3);