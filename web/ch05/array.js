//ch05/array.js
//인덱스(주소)

let arr = new Array();
arr = [];

//js에서는 타입 상관없이 배열에 담을 수 있음
arr.push('홍길동');
arr.push(20);
arr.push({name : 'Hwang', id : '1001'});
arr.push([1,2,43,54,5]);
arr.pop(); //가장 마지막에 있는거 삭제
arr.unshift(['사슴','고양이']); //가장 처음에 추가
arr.shift(); //가장 처음에 있는 값 삭제
arr[0]='test'; //해당 위치의 값 수정

//특정 위치에 추가
//splice(인덱스, 얼마나 삭제할지[배열 갯수], 대체할 값)
console.log(arr.splice(1,2,'hi'));


console.log(arr);

let dolls = [['라이언',5],['어피치',10],['콘',6]];
console.table(dolls);