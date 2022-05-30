document.addEventListener('DOMContentLoaded',function(){
    let btn = document.querySelector('button');
        // btn.addEventListener('click',addContent); //여기서 넣는 함수 : callback함수 (나중에 부르겠다)

        // function addContent(){
        //     console.log(this);
        //     let name = document.getElementById('name').value; //)까지만 쓰면 input자체를 가져옴 => .value하면 속성을 가져옴
        //     let age = document.getElementById('age').value;
        //     let li = document.createElement('li');
        //     li.innerText = `${name}, ${age}`;

        //     //ul하위요소 li 추가
        //     document.getElementById('list').append(li);

        //     //입력항목 지우기
        //     document.getElementById('name').value ="";
        //     document.getElementById('age').value = 0;
        //     document.getElementById('name').focus();
            
        // }
        // addContent(); //이벤트 외에서 this출력시, window가 출력됨

        //table에 추가하기
        let btn2 = document.querySelector('button');
        btn2.addEventListener('click',addTable);

        function addTable(){
            console.log(this);
            let tname = document.getElementById('name').value; //이름값 불러오기
            let tage = document.getElementById('age').value; //나이 불러오기
            if(!tname || !tage){ //0, '', null, undefined => false로 취급

            }else{
                let elem = [tname,tage];

                let trTag = document.createElement('tr');

                elem.forEach(e => {
                    let tdTag = document.createElement('td');
                    tdTag.innerText=e;
                    trTag.appendChild(tdTag);
                })

                document.getElementById('table').append(cloneElement());
                document.getElementById('name').value = "";
                document.getElementById('age').value = null;
                document.getElementById('name').focus();
            }
        }
        //cloneNode => 위에 있던 요소를 복사해서 가져오기
        function cloneElement(){
            let cloneTr = document.getElementById('result').cloneNode(true); //기본값이 false, true 넣으면 하위요소까지 카피
            cloneTr.firstElementChild.innerText = document.getElementById('name').value; //첫번째 자식
            cloneTr.lastElementChild.innerText = document.getElementById('age').value;
            return cloneTr;
        }
})