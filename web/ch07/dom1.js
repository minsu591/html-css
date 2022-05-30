//ch07/dom1.js

//body를 읽고 dom1.js를 읽겠다는 이벤트
document.addEventListener('DOMContentLoaded',function(){ //이벤트를 추가하겠다는 메소드 (이벤트 type, 실행할 함수)
    //매개값으로 들어온 element를 만들어줌
    //element : dom에서는 element, html에서는 tag
    let li = document.createElement('li'); //<li></li>
    let txt = document.createTextNode('Cherry'); //Node 생성
    li.appendChild(txt); //부모 자식 간의 관계를 연결 => li아래에 txt 존재할 수 있음.
    console.log(li);
    // document.getElementById() //id값으로 element를 찾는 메소드
    let ul =document.querySelector('ul'); //이 시점에는 body의 ul을 읽기 전이라 null로 나옴
    console.log(ul);
    ul.appendChild(li);


    
}); 


