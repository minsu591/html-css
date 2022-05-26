//string vs object

let str1 = '홍길동'; //string, 원시형 데이터 타입
let str2 = new String('홍길동'); //object

console.log(str1, str2);
console.log(typeof str1, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2); //내용및 타입까지 확인

str1 = '   홍  길  동 동 동  ss SS ddsEE';
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
//toString() 문자열이 아닌거 문자열로 변환
console.log(typeof [1,2].toString());
//찾은 문자열의 시작 위치 얻기
//indexOf => 앞에서부터 검색, lastIndexOf => 뒤에서부터 검색
//존재하지 않으면 -1 반환, 존재여부 검사는 includes로도 가능
console.log(str1.indexOf('동'));
console.log('동 찾기 :'+str1.lastIndexOf('동'));
//찾는 인자가 여러개면, 검색 인자 뒤에 찾기를 시작할 인덱스 설정이 가능
//뒤에서 찾는 값과 앞에서 찾는 값이 다르다
console.log(str1.indexOf('동',10));

//대소문자 구분 없이 문자열 위치 찾기
console.log(str1.toLowerCase().indexOf('d'));


//charAt(10); 해당 위치(인덱스)의 문자 하나 읽어오기
let str = 'hello, world, hel'.charAt(10);
console.log('10번째 글자 : '+str);

//원하는 단어 뒤의 글자를 가져오고 싶을 때
str = 'hello, nice, world, hel';
idx = str.indexOf('world')+'world'.length;
console.log(str.substring(idx));

//RegExp : 패턴을 사용해 텍스트를 판별할 때 사용
let re = new RegExp();
let s = 'hihihihkdjkdj 12 kd jfkjd';
//리터럴 표기법
//g : 전체 검색, i : 대소문자 구분하지 않고 가져오겠다.
re = /\d/g;
// \d : 숫자 찾기, \D : 숫자 아닌거 찾기
//
console.log('re이용 검색 : '+s.replace(re,'$'));

//replace => 문자열을 찾아서 대체문자로 변경
//split => 문자열을 매개값을 기준으로 잘라서 배열로 생성
//기준이 되는 문자는 배열에 포함되지 않음
str1 = 'how are you,to,day,ever  yone';
let list = str1.split(',');
console.log(list);

str1 = '     how   are    you    today    everyone    ';
str1 = str1.trim();
console.log(str1);

//1
// \s => 정규표현식에서 \s는 문자를 의미, +1개 이상을 의미
// 슬래시로 패턴을 감쌈
str1 = str1.replace(/\s+/g, ' ');
console.log(str1);
//2
// filter(함수) => 배열에서 매개값의 함수의 true값만 새로운 배열
//결과값 중에서 조건에 맞는거만 가져옴
//function(elem){return elem != ''}
//을 elem => elem != ''으로 바꾼거
str1 = str1.split(' ').filter(elem => elem != '');
console.log(str1);

let choice = function(elem){
    return elem != '';
}

choice = choice(str1);
console.log(choice);


//array.join(매개값) => 배열타입을 문자로 변경, 매개값을 구분자로 사용
list = ['hi','hello','merong'];
list = list.join(' ');
console.log('join : '+list);

//match
//'good'뒤에 공백 1개가 있고 그 뒤에 단어 1개가 있는 패턴을 찾아서 배열로 return
//값이 없으면 null로 return
const strr = 'bad MORNING, good morning, good evening, and good night';
console.log(strr.match(/good\s\w+/gi));
console.log(strr.toLowerCase().replace('good','BAD'));

//문자열 합치기
//문자열.concat(뒤에 합칠 문자열);
str1 = '문자열1';
str2 = '문자열2';
console.log(str1.concat(str2));

list = ['hi','hello','it','s','me','merong'];

let sss = ''.concat(...list);
console.log(typeof sss,sss);