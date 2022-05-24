//basic1.js

// [오브젝트1, 오브젝트2, 오브젝트3]

const hong = {
    memberId : '001',
    memberName : '홍길동',
    memberAge : 20,
}
const hwang ={
    memberId : '002',
    memberName : '황우영',
    memberAge : 22
}
const park ={
    memberId : '003',
    memberName : '박땡땡',
    memberAge : 29
}

const members = [hong, hwang, park];

for(let member of members){
    //hong, hwang, park
    for(let field in member){ //object 타입한테만 적용되는 in
        //id, name, age
        console.log(field+' : '+member[field])
    }
}

document.write('<h3>Hello</h3>');
document.write('<ul>');
document.write('<li>사과</li>');
document.write('<li>오렌지</li>');
document.write('<li>바나나</li>');
document.write('</ul>');

//테이블에 값 넣기
let table = '<table border=1>';
table += '<tr><th>회원 아이디</th><th>회원이름</th><th>회원나이</th></tr>';
for(let member of members){
    table+='<tr>';
    for(let field in member){
        table += '<td>'+member[field]+'</td>';
    }
    table+='</tr>';
}
table += '</table>';
document.write(table)

//객체를 로깅할 때는 객체의 내용 변경사항이 실시간으로 업데이트 됨.
var o = {};
console.log(o); //a =1
o.a=1;
console.log(o); // a=1