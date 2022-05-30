document.addEventListener('DOMContentLoaded',function(){
    //form만! document.forms.name명을 통해 찾아올 수 있음
    // console.log(document.forms.frm);
    //하위는 frm.fname방식을 통해 가져올 수 있음
    // console.log(document.forms.frm.fname);
    let frm = document.forms.frm

    //forms중에서 frm이 submit이라는 이벤트가 발생할 때
    document.forms.frm.onsubmit = function(ev){ //매개값으로 이벤트 값이 넘어옴
        ev.preventDefault(); //기본 기능 차단
        let infoArr = [];
        infoArr.push(this.fname.value);
        infoArr.push(this.lname.value);
        infoArr.push(this.phone.value);
        infoArr.push(this.age.value);

        let trTag = document.createElement('tr');
        let checkbox =document.createElement('input');
        let btn = document.createElement('button');
        let tdTag;
        infoArr.forEach((el,idx) => {
            if(idx==0){
                tdTag = document.createElement('td');
                checkbox.setAttribute('type','checkbox'); //(속성, 속성값)
                tdTag.appendChild(checkbox);
                trTag.append(tdTag);
            }
            tdTag = document.createElement('td');
            tdTag.innerText = el;
            trTag.appendChild(tdTag);
            if(idx==(infoArr.length-1)){
                tdTag = document.createElement('td');
                btn.addEventListener('click',function(e){ //등록전에 이벤트 추가
                    // console.log(this); //삭제 버튼
                    // e.target.parentElement.parentElement.remove();
                    this.parentElement.parentElement.remove(); //button의 부모요소(td)의 부모요소(tr)를 삭제
                })
                btn.innerText='삭제';
                tdTag.append(btn);
                trTag.append(tdTag);
            }
        })
        document.getElementById('list').appendChild(trTag);
    }
    
    //선택삭제
    //폼 태그의 input 중에서 type이 button인걸 가져온다.
    let deleteBtn = document.querySelector('form>input[type="button"]');
    deleteBtn.addEventListener('click',delCheck);

    function delCheck(){
        //tbody => input => type속성이 체크박스인거 다 가져오기
        let checklist = document.querySelectorAll('#list input[type="checkbox"]');
        checklist.forEach(chk => {
            if(chk.checked==true){
                chk.parentElement.parentElement.remove();
            }
        })
    }

    //리스트 출력
    //이 데이터를 활용해서 초기 데이터를 만들어주기
    let memberList = [
        {
            first_name : '임경',
            last_name : '정',
            phone:'010-1111-2222',
            age:20
        },
        {
            first_name : '이이',
            last_name : '정',
            phone:'010-4444-3333',
            age:23
        },{
            first_name : '칠칠',
            last_name : '정',
            phone:'010-7777-8888',
            age:29
        }
    ];
    let baseList = document.getElementById('list');
    let inTr = document.querySelector('table>tbody>tr');
    memberList.forEach(function(val){
        let list = [];
        list.push(val.first_name);
        list.push(val.last_name);
        list.push(val.phone);
        list.push(val.age);

        //필요한거 선언
        let td,tr,cb,button;
        tr=document.createElement('tr');
        cb=document.createElement('input');
        cb.setAttribute('type','checkbox');
        button=document.createElement('button');
        //내부 foreach
        list.forEach(function(el,idx){
            if(idx==0){
                td=document.createElement('td');
                td.appendChild(cb);
                tr.appendChild(td);
            }
            td=document.createElement('td');
            td.innerText=el;
            tr.appendChild(td);
            if(idx==list.length-1){
                td=document.createElement('td');
                button.innerText='삭제';
                button.addEventListener('click',function(){
                    this.parentElement.parentElement.remove();
                })
                td.appendChild(button);
                tr.appendChild(td);
            }
            document.getElementById('list').append(tr);
        })
    });

    
})

