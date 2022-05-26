//ch02/function1.js

//테이블 생성 함수
//매개변수는 테이블 내에 넣을 데이터
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
const friends=[hong,hwang, park];


function createTable(ary=[]){
    let tag = '<table border = 1>';
    tag+=createHeader(ary[0]); //배열의 첫 번째 요소
    tag+='<tbody>';
    ary.forEach(function createRow(v,i,a){
        tag+=createTr(v);
        // tag+='<tr>';
        // for(let field in v){
        //     tag+='<td>'+v[field]+'</td>';
        // }
        // tag+='</tr>';
    })
    tag+='</tbody></table>'
    return tag
}
//obj => 속성
// <table><thead>...</thead><tbody>...</tbody></table>
function createHeader(obj = {}){
    let thead = '<thead><tr>';
    for(let field in obj){
        thead+=`<th>${field}</th>`;
    }
    thead+='</tr></thead>'
    return thead;
}
// let result = createTable(friends);
// document.write(result);

function createTr(obj = {}){
    // <tr><td>데이터</td></tr>
    let tbody = '<tr>';
    for(let f in obj){
        tbody+=`<td>${obj[f]}</td>`
    }
    tbody +='</tr>';
    return tbody;
}

