//basic.js 파일
//ES2015 => 자바스크립트가 언어적 면모를 가지게 된 시점
//let, const 추가됨

//변수의 선언 : var, let

var fname = 'hello'; //string
fname = 100; //number
fname = true; //boolean
fname = null; // '', 0이 아닌 null값 / object값

var lname; //값이 초기화되지 않은 상태 : undefined
console.log(typeof lname);
var lname = 'Hong'; //var는 재선언해도 사용 가능
console.log(lname);

//콘솔에 출력된 것들 초기화해주는
console.clear();

//lname은 재선언시 오류
//블록 내에서 선언되면 다시 사용 가능
//전체에서 선언된 변수 : 전역변수
//{} 내에 선언된 변수 : 지역변수
{
    let lname = 'Hwang';
    console.log(lname);
}
console.log('다시'+lname);
{
    let lname = 'Park';
    console.log(lname);
}

//상수 : 변하지 않는 값
const age = 10;
// age =20; //오류 발생, 상수를 다시 초기화할 수 없음.
console.log(age);


//학생 : 이름, 나이, 학생번호
//여러가지 정보를 담고 싶을 때, obejct 타입으로 선언

const student = {
    fname : '홍길동',
    age : 20,
    sno : '22-0001',
    info : function(){ //메소드
        return this.fname +', '+ this.age;
    }
}
console.log(student.fname); //홍길동
console.log(student['age']);//20
let fieldName = 'sno';
console.log(student[fieldName]); //student의 sno 속성값
console.log('메소드 : '+student.info());
// debugger; //이 키워드를 만나면 실행하다가 멈춤

//배열
const numAry=[10,34,15,22];

for(let i = 0; i< numAry.length;i++){
    console.log(numAry[i]);
}

//확장 )for..of 리스트에 배열만큼
console.log('let num of numAry');
for(let num of numAry){
    console.log(num);
}
//오브젝트일 경우... for--in
for(let field in student){ //student라는 vo의 필드와 필드를 통해 해당 값을 출력
    console.log(field + ', ' + student[field]);
}

