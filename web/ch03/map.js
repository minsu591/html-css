//ch03/map.js
let obj = {
    sname : 'Hong',
    age : 10
}
//key와 value로 구성된 속성
//key값은 중복 값이 들어올 수 없음
let map = new Map();
map.set('sname','hong');
map.set(10,20);
map.set(obj,3);
//동일 값의 키를 다시 set하면 value가 새로운 값으로 업데이트 됨
//추가 X
map.set('sname','hwang');
console.log(map.size);

let val =  map.get('sname');
console.log(val);

//key와 value 값을 배열 타입으로 리턴해줌
for(let [key, val] of map.entries()){
    console.log(`key => ${key},val => ${val}`);
}
//key 값만 배열 타입으로 리턴
console.log(map.keys());
//value값만 배열 타입으로 리턴
console.log(map.values());

//map 요소들을 다 삭제하기
map.clear();
console.log(map.size);


let friends = [['홍길동', 20],['김민수', 22 ],['최민식', 25]]

map = new Map(friends);
console.log(map);

let tag = '<ul>';
createList(map);
tag+='</ul>';
document.write(tag);

function createList(map){
    // <li>속성 - 속성값</li>
    for(let [key,val] of map.entries()){
        tag+=`<li> key = ${key}, value = ${val} </li>`;
    }
}
