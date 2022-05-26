//ch03/object6.js
//오브젝트 : 속성 = 속성값, 속성 = 함수
const friends = ['김민식','황성우']
let obj = {
    sname : '홍길동',
    age : 20,
    getInfo : function() {return this.sname;}
}
obj.phone = '010-1111-2222';
obj.friends = friends;

//Object 클래스의 메소드 중
//defineProperty를 사용하면 특정 속성에 조건을 걸 수 있다
Object.defineProperty(obj, 'score', {
    set : function(score){
        if(score < 0){
            alert('점수가 0보다 작습니다.');
        }else if(score >= 100){
            alert('점수가 100보다 큽니다.')
        }else{
            this._score =score;
        }
    },
    get : function(){
        return this._score;
    }
});

console.log(obj.friends[0]);

//객체의 복사
let refObj = obj;

//완전히 다른 객체를 복사해서 생성해주는 메소드
let copyObj = Object.assign({},obj);
copyObj.age = 30;

console.log(copyObj,obj);