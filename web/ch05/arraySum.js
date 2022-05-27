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
let arr2After = arr2.reduce((stack,el)=>{
    return stack.concat(el);
},[]);

// let arrAfter = arr2.reduce(function(accum,val){
//     return accum.concat(val); //배열의 concat : 배열 합치기
// },[]);
console.log(arr2After);

//2중첩 배열 하나의 배열로 합치기
const arr3 = [1,[2,3],4,[5,6,[7,8,9]]];
//이렇게 하면 전체 중에 [7,8,9] 배열만 한 요소가 되어서 빠져나옴
let arr3After = arr3.reduce((stack,el)=>{
    console.log(stack);
    return stack.concat(el);
},[]);

// let arr3After = arr3.reduce(function(accum,val){
//     return accum.concat(val);
// },[]);
console.log(arr3After);
//몇 번이나 중첩되어있던지 그냥 풀려서 String값으로 들어감
console.log(arr3.join(','));
arr3StringList = parseInt(arr3.join(',').split(',')); //숫자로 들어가게
console.log(arr3StringList);

// console.clear();
let arr4 = [1,2,[3,4],[5,6,7,[10,11,{name:'hong',age:20}]]];

let arr4New = arr4.reduce((stack,el)=>{
    console.log(stack,el);
    return stack.concat(el);
}, []);