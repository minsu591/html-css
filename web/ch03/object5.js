// ch03/object5.js
//랜덤값 출력
//Math.random()
for(let i =0; i<5;i++){
    let temp = parseInt(Math.random() * 10) +1; //0~10
    console.log(temp);
}
Math.ceil(3.3); //올림처리
console.log(Math.ceil(3.3));
//버림처리
//양수일 때는 동일하나, 음수일 때 차이 있음
console.log(Math.floor(-3.3)); // -4 => -3 ~ -4 (바닥 값 : 최하값)
console.log(Math.trunc(-3.3)); // -3 => 소수점을 자르는 것
//반올림
console.log(Math.round(3.3));
//파이
console.log(Math.PI);


//클로저 : 함수가 실행되는 시점의 변수값을 기억
//전역변수로 선언해서 값을 다루지말고 보안상으로 함수 내의 지역변수를 클로저를 통해 저장
function outerFunc(name){
    let saying = 'hello! ' +name;

    return function(){ //saying이라는 변수를 리턴하는 함수를 리턴...
        return saying;
    }
}
let f1 = outerFunc('죠르디'); //함수는 여기서 종료 : let saying도 종료됨
console.log(f1()); //outerFunc 내의 익명함수에 남은 saying이 출력되는거
let f2 = outerFunc('라이언');
console.log(f2());

function initFunc(){
    let cnt = 0;

    return function addCnt(){
        cnt+=1;
        console.log(cnt);
    }

    // addCnt();
    // console.log(cnt);
}
initFunc(); //1 함수를 사용할 때마다 0으로 초기화
initFunc(); //1
initFunc(); //1
let add = initFunc();
add();
add();
add();