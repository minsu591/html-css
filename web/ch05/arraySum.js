const arr1 = [1,2,3,4,5];
const sum = arr1.reduce(function(accum,val){
    return accum+val;
},0);
console.log(sum);
//간단하게 쓰기
const sum2 = arr1.reduce((accum,val) => accum+val);
console.log(sum2);

//foreach
let sum3 = 0;
arr1.forEach(el => sum3+=el);
console.log(sum3);

//1중첩 배열 하나의 배열로 합치기
const arr2 =[1,[2,3],4,[5,6,7]];
let arrAfter = arr2.reduce(function(accum,val){
    return accum.concat(val);
},[]);
console.log(arrAfter);

//2중첩 배열 하나의 배열로 합치기
const arr3 = [1,[2,3],4,[5,6,[7,8,9]]];
let arr3After = arr3.reduce(function(accum,val){
    return accum.concat(val);
},[]);
console.log(arr3After);
console.log(arr3.join('-'));