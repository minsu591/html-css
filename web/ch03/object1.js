//ch3/object1.js

//object 타입 선언
let obj = {};
// let obj = new Object(); //으로 사용 가능
obj.sname = '홍길동';
obj.age = 10;
obj['score'] = 80;
obj.getInfo = function(){ //obj의 getInfo라는 속성에 함수 저장
    return `이름은 ${this.sname}, 나이는 ${this.age}입니다.`;
}

console.log(obj.getInfo());

//ES2015
//클래스 내부에서 속성을 추가하고 싶으면 this사용
//필드 초기화를 위해 생성자 생성
//클래스 내에 this.~으로 선언만되면 
class Student{
    //생성자
    constructor(sno,sname,score){
        this.sno=sno;
        this.sname = sname;
        this.score = score;
    }
    //메소드
    // getName(){
    //     return this.sname;
    // }
    // setName(sname){
    //     this.sname = sname;
    // }
    getInfo(){
        return `${this.sname}의 점수는 ${this.score}점입니다. 전화번호는 ${this.sphone}입니다.`;
    }
    setPhone(sphone){
        this.sphone = sphone;
    }
    //외부에서는 볼 수 없음
    //실제로 gender라는 속성이 있는 것처럼 보여지지만
    //실제론 없고 get, set_gender을 통해서만 얻을 수 있음
    set gender(gen){
        this._gender = gen;
    }
    get gender(){
        return this._gender;
    }
}

let s1 = new Student('100','홍길동',80);
s1.gender = 'Male';
console.log(s1.gender);
console.log(s1.gender);



console.log(`학생이름 : ${s1.sname}`);
// console.log(`학생이름 : ${s1.getName()}`);
console.log(`학생점수 : ${s1.score}`);
console.log(s1.getInfo());

let students = [];
students.push(s1);
students.push(new Student('101','김길동',70));
students[1].setPhone('010-4444-5555');

students.forEach(val => {
    console.log(val.getInfo());
})

//find() 괄호 안을 만족하는 첫 번째 인수를 반환하는 함수
class Estimate{
    constructor(unit){
        this.unit = unit;
    }
    //견적가 얻는 메소드
    getEstimate(unittype, width, height){
        //전체 unit 리스트에서 getEstimate를 통해 삽입한 unittype을 찾고
        //해당 type의 가격을 계산해서 return
        let priceInfo = this.unit.find(item => item.type==unittype)
        return priceInfo.price*width*height;
    }
    addUnit(unitOne){
        this.unit.push(unitOne);
    }
}
let unitInfo = [{type : "wood", price:100},{type: "iron",price:300},{type:"plastic",price:200}];
const estimator = new Estimate(unitInfo);
let price = estimator.getEstimate('wood',20,30);
console.log(`해당 가격은 ${price}원 입니다.`);
estimator.addUnit({type : "woodd", price:100});
console.log(unitInfo);