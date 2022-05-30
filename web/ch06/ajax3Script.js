let sk = env();
serviceKey = sk();
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=JSON&serviceKey='+serviceKey;
let xhtp = new XMLHttpRequest();
xhtp.open('GET', url);
xhtp.send(); //send를 보내야 실제로 요청, 보내짐
let result;
xhtp.onreadystatechange = function(){ //client <--> server 요청 상태가 어떻게 됐는지 볼 수 있음
    console.log('요청상태 : ' + xhtp.readyState, '서버상태 : ' + xhtp.status);
    //요청 정상완료 : readyState : 4, status : 2
    if(xhtp.readyState==4 && xhtp.status==200){ //이렇게 안하고 싶으면 onload 사용
        result = JSON.parse(xhtp.responseText).data;
        let table = document.createElement('table');
        table.setAttribute('border','1px');
        table.setAttribute('id','tb');
        table.append(makeHeader());
        table.append(makeBody(result,1));
        document.getElementById('show').append(table);

        //searchDown 만들기
        let sd = document.getElementById('searchDown');
        let searchList = searchDown(result);
        searchList.forEach(function(val){
            let option = document.createElement('option');
            option.innerHTML=val;
            sd.append(option);
        });

    }
    
    document.getElementById('searchBtn').addEventListener('click',function(){
        let searchResult = filterSearch(result);
        document.getElementById('tb').append(makeBody(searchResult,1));
    })
}; 
//여기 지정한 항목만 thead와 tbody에서 만들어주게
let fields = ['id','sido','centerName','address','phoneNumber']; //id, centerName, address

function searchDown(result){
    let searchList = result.reduce(function(searchList,val){
        let flag = true;
        searchList.forEach(elem =>{
            if(elem == val.sido){
                flag = false;
            }
        });
        if(flag==true){
            searchList.push(val.sido);
        }
        return searchList;
    },[]);
    return searchList;
}

function filterSearch(result){
    let re = [];
    let searchResult = result.filter(elem => {
        return elem.sido.includes(document.getElementById('searchDown').value);
    })
    return searchResult;
}


//header를 만들어주는 함수
function makeHeader(){
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    fields.forEach(val => {
        let td = document.createElement('td');
        td.innerHTML = val;
        tr.append(td);
    })
    thead.append(tr);
    return thead;
}
//body를 만들어주는 함수
function makeBody(result, page){

    //page => 1page : 1~10, 2page : 11~20;
    //index =>      : 0~9
    //startCnt , endCnt =? 1: (page-1)*10, (page)*10-1;
    //tbody가 존재하면 tbody를 삭제
    if(document.querySelector('#tb > tbody') != null){
        document.querySelector('#tb > tbody').remove();
    }
    let startCnt = (page-1)*10;
    let endCnt = page*10-1;
    let tbody = document.createElement('tbody');
    result.forEach((elem,idx) => {
        if(idx>=startCnt && idx<=endCnt){
            tbody.append(makeTr(elem))
        }
    });
    if(document.getElementById('pageDiv')!=null){
        document.getElementById('pageDiv').remove();
    }
    makePage(result);
    return tbody;

}
function makeTr(elem){
    let tr = document.createElement('tr');
    fields.forEach(val => {
        let td = document.createElement('td');
        let save =td;
        if(val=='address'){
            let a = document.createElement('a');
            //a의 href에 값을 넘겨준다
            a.setAttribute('href',`daumapp.html?xpos=${elem.lat}&ypos=${elem.lng}&centerName=${elem.centerName}`);
            a.setAttribute('target','_blank');
            a.innerHTML=elem[val];
            td.append(a);
        }else{
            td.innerHTML = elem[val];
        }
        tr.append(td);
    })
    return tr;
}

function makePage(pageAry){
    let show = document.getElementById('show');
    let div = document.createElement('div');
    div.setAttribute('id','pageDiv');
    let totalPage = Math.ceil(pageAry.length/10);
    for(let i = 1;i<=totalPage;i++){
        let a = document.createElement('a');
        a.innerText=i;
        a.setAttribute('href','');
        div.append(a);

        a.addEventListener('click',function(e){
            e.preventDefault();
            let page = e.target.innerHTML;
            document.getElementById('tb').append(makeBody(pageAry,page));
        })
    }
    show.append(div);
}