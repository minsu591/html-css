//variable2.js
//원시형 데이터 타입 vs 참조형 데이터 타입
//string, number, boolean, undefined vs object(object, array, function)
let str1 = 'Hello';
let str2 = str1;
console.log(str2);
//표현식처럼 읽어옴
console.log(`str1 => ${str1}, str2 => ${str2}`); // Hello, Hello
str2 = 'Nice';
console.log(`str1 => ${str1}, str2 => ${str2}`); // Hello, Nice

//object type은 참조 값을 변경했을 때 원본도 변경됨
let obj1 = {
    fname : 'Hong'
}
let obj2 = obj1;
console.log(`obj1 => ${obj1.fname} obj2 => ${obj2.fname}`); //Hong, Hong
obj2.fname='hihi';
console.log(`obj1 => ${obj1.fname} obj2 => ${obj2.fname}`); //hihi, hihi

const obj3 = { //상수 값이라서
    fname : 'Park'
}

// obj3={ //다시 정의 불가
//     fname : 'NewPark'
// }
obj3.fname='Merong'; //이런식으로 재정의는 가능함.
console.log(obj3.fname);


//심볼
//다른 값과 중복되지 않는 고유 값
//변경 불가능한 원시 타입의 값
//symbol로 정의
let sym1 = Symbol('text');
let sym2 = Symbol('text');

console.log(sym1==sym2);

let hong = {
    sym1: '홍길동'
}