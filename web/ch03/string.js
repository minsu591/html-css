//string vs object

let str1 = '홍길동'; //string, 원시형 데이터 타입
let str2 = new String('홍길동'); //object

console.log(str1, str2);
console.log(typeof str1, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2); //내용및 타입까지 확인

str1 = '   홍  길  동   ';
//양 옆에 삭제
console.log(str1.trim());
//앞 부분 삭제
console.log(str1.trimStart());
//뒷 부분 삭제
console.log(str1.trimEnd());
//slice(시작 인덱스, 끝 인덱스)
console.log(str1.slice(0,5));
//substring(시작인덱스, 끝 인덱스) => 인덱스 값이 -가 들어오면 0으로 변환.
//시작 값이 끝 값보다 클 때 두 개의 위치 변경
console.log(str1.substring());
//substr(시작인덱스, 문자열 길이)
console.log(str1.substr(8,11));
//tostring
