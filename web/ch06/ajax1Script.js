//ch06/ajax1.js
//비동기 방식, 동기 방식
//Asynchronous JavaScript And Xml
//비동기 방식 : 아래를 결과를 받아오는 시점에 순서를 정하는 방식
//동기 방식 : 위에서부터 아래로 가장 위에 있는 구문이 종료되고 다음을 실행하는 방식
setTimeout(e=> {
    console.log('first 1초');
},1000);

setTimeout(e=> {
    console.log('second 3초');
},3000);

setTimeout(e=> {
    console.log('third 2초');
},2000);


let xhtp = new XMLHttpRequest();
xhtp.open('GET','MOCK_DATA.json'); //서버 페이지 요청 (요청방식,요청하는 페이지)
//html 내에 담긴 모든 텍스트를 가져옴
//데이터만 담긴 형식은 json
xhtp.send();
//on~ : 이벤트 관련 속성
xhtp.onload = function(){
    //문자열의 json 데이터를 자바에서 쓸 수 있게 변경해주는 메소드 : JSON.parse
    let result = JSON.parse(xhtp.responseText);
    console.log(result);
    let ul = document.createElement('ul');
    result.forEach(function(val,idx){
        let li = document.createElement('li');
        li.innerText=val.first_name +', '+val.email;
        ul.appendChild(li);
    })
    document.body.append(ul);
}
