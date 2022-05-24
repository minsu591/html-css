//variable.js
//전역 객체, 전역변수
//웹 브라우저가 가진 최상위 object : window
//var로 선언한 변수는 window라는 object에 저장된다.


//전역변수로 선언되는 var
var avar = '안녕';
//전역적으로 역할을 가지긴 하나, window 객체에 소속되지 않음.
let alet = '안녕';

// window.alert('반갑습니다.');
console.log(this); //window 확인 가능
console.log(this.avar); //안녕 출력 가능
console.log(this.alet); //undefined

function run() {
    console.log(this.avar);
    console.log(this.alet);
}
run();

//변수 그 자체로만 읽어오기 때문에 정상적으로 값 출력
console.log(avar); //안녕
console.log(alet); //안녕