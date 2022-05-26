//ch04/string1.js
//tagged literal

let str = 'Hello, World';
let message = 'Hi';
str = `${message}`;

let result = `${str=='Hi' ? true : false}`;
console.log(result);

//tagged literal 연습
let str1 = 'good';
result = taggedFunc`${str1} morning, ${str1} afternoon, ${str1} evening`;
console.log(result);

//템플릿 리터럴에 표현식(변수명)이 2가지 들어가면 exp1, exp2 등으로 파라메터 변수 개수를 맞춰줘야함.
function taggedFunc(strings){
    let ret = '';
    for(let idx = 1; idx<strings.length;idx++){
        if(idx<strings.length-1){
            ret += 'bad' + strings[idx];
        }else{
            ret += 'moon' + strings[idx];
        }
    }
    return ret;
}

//배열요소
//배열명.map(함수) => 함수 내의 재설정(return값에 따라 새로운 배열을 만듦
let friends = [{name : '라이언', age :5}, {name : '어피치', age :3},{name : '콘', age : 4},{name : '프로도', age:2}];

let newFriends = friends.map(function(val,idx){
    let obj = {};
    obj.sname = val.name;
    obj.age = val.age*2;
    obj.sno = idx+1;
    return obj;
})
console.log(newFriends);

//filter : 함수를 통해 true를 얻은 값들을 모아서 배열 생성
newFriends = friends.filter(function(val,idx){
    return val.age > 1;
})
console.log(newFriends);

console.clear();
//reduce
//a : 이전 값
//b : 현재 값
//c : 인덱스 값
//d : 전체배열
//리턴하는 타입을 정할 수 있음.
newFriends = friends.reduce(function(a,b,c,d){   
    console.log(a,b,c,d);
    return b;
},{}); //{}은 초기값
console.log(newFriends);

console.clear();

newFriends = friends.reduce(function(accum, val,idx,ary){
    // console.log(accum,val);
    // console.log(accum,val.age);
    // return accum+val.age;
    let obj = {};
    obj.sname = val.name;
    obj.age = val.age*2;
    obj.sno = idx +1;

    if(obj.age>7){ //나이가 3살보다 클 때만 accum에 누적
        accum.push(obj);
    }
    return accum; //return한 값이 다음 accum이 됨
},[]);
//newFriends에 return 값이 들어감
console.log(newFriends);


//테이블 태그 만들기
let tag = '';
tag+='<table border =1>';
tag += friends.reduce(function(accum,val){accum+=`<tr><td>${val.name}</td><td>${val.age}살</td></tr>`; return accum;},'');
tag+='</table>';
document.write(tag);

//리스트 태그 만들기
newFriends = friends.reduce(function(accum,val,idx,ary){
    let tag2 ='';
    if(idx==0){
        tag2+='<ul>';
    }
    tag2 += `<li>${val.name}, ${val.age}</li>`;
    if(idx == friends.length-1){
        tag2+='</ul>';
    }
    return accum+tag2;
},'');
document.write(newFriends);