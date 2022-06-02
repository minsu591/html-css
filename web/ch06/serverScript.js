//forms
let myform = document.forms.frm;
myforms.onsubmit = function(e){ //myforms에 onsubmit이라는 이벤트가 발생하면 function 실행
    e.preventDefault();
    let fname = myform.fname.value;
    let lname = myform.lname.value;
    let email = myform.email.value;
    let job = myform.job.value;
    let hdate = myform.hdate.value;
    
    let param = `fname=${fname}&lname=${lname}&email=${email}&job=${job}&hdate=${hdate}`;
    let xhtp = new XMLHttpRequest();
    xhtp.open("post",'../ajax.do');
    xhtp.setRequestHeader('Content-type','x-www-form-urlencode'); //header정보에 지금 컨텐츠의 타입을 정해줌 (post일 경우만)
    //?key=val&key1=val1의 형식으로 데이터 넘기겠다는 x-www-form-urlencode
    //json 타입, text 형식으로 넘기는 것도 설정할 수 있음
    xhtp.send(param);
    xhtp.onload = function(){ //페이지 요청하면 이 데이터를 읽어오겠다.
        let data = JSON.parse(xhtp.responseText);
        console.log(data);
        document.getElementById('list').append(makeTr(data));
    }

}

let xhtp = new XMLHttpRequest();
xhtp.open('get','../ajax.do?job=json');
xhtp.send();
xhtp.onload = function() { //처음 실행할 때
    console.log(xhtp.responseText);
    let data = JSON.parse(xhtp.responseText);
    let bodyList = document.getElementById('list');
    data.forEach(emp => {
        bodyList.append(makeTr(emp));
    })
}
let fields = ['employeeId','firstName','lastName','email','hireDate','jobId'];
function makeTr(emp){
    let tr = document.createElement('tr');
    fields.forEach(field => {
        let td = document.createElement('td');
        td.innerText = emp[field];
        tr.append(td);
    })
    return tr;
}


document.getElementById('modify').addEventListener('click',function(){
    let myform = document.forms.frm;
    myform.cmd.value = 'update';
    let fname = myform.fname.value;
    let lname = myform.lname.value;
    let email = myform.email.value;
    let job = myform.job.value;
    let hdate = myform.hdate.value;
    let cmd = myform.cmd.value;
    let param = `cmd=${cmd}&fname=${fname}&lname=${lname}&email=${email}&job=${job}&hdate=${hdate}`;
    let xhtp = new XMLHttpRequest();
    xhtp.open("post",'../ajax.do');
    xhtp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhtp.send(param);
    xhtp.onload = function(){
        console.log(xhtp.responseText);
    }

});


function trClick(){
    //tr클릭 => this.tr
    console.log(this.children[0].innerText);
    myform.fname.value=this.children[1].innerText;
    myform.lname.value=this.children[2].innerText;
    myform.email.value= this.children[3].innerText;
    myform.hdate.value=this.children[4].innerText;
    myform.hdate.value.substring(0,10)
    myform.job.value=this.children[5].innerText;
}
