// ch03/object4.js
//오브젝트 : class 활용
//객체리터럴 => let obj = {sname : '홍길동', score : 80}
//생성자 함수 function

function Student(sname, age, score){
    this.sname = sname;
    this.age = age;
    this.score = score;
    this.friends = [];

    this.getInfo = function(){
        return `이름은 ${this.sname}, 나이는 ${this.age}살입니다.`;
    }
    this.addFriend = function (sname, age){
        let obj = {};
        obj.sname = sname;
        obj.age = age;
        this.friends.push(obj);
    }

}
let s1 = new Student('홍길동',20,80);
console.log(s1.getInfo());
s1.addFriend('김민수',21);
console.log(s1);