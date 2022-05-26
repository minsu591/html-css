//ch03/object3.js
//인스턴스 : 필드, 생성자, 메소드
//프로토타입 : 메소드(함수)의 참조값

//현재시점 년월일 시분초 알려주는 메소드

let today = new Date('2022-5-30');
console.log(today);
console.log(today.toLocaleDateString()); //날짜
console.log(today.toLocaleTimeString()); //시간
console.log(today.toDateString()); //영어로 오늘 날짜

//해당 월의 마지막 날짜 구하는 방법 => 5월의 0일 => 4월의 마지막날  
today = new Date(2022,4,0);
let day = today.getDay();
let lastDate = today.getDate();

Date.prototype.toCustomString = function(){
    console.log(this);
    let year = this.getFullYear();
    //slice(-2) : 뒤에서부터 2자리 자르기
    let month = ('0'+(this.getMonth()+1)).slice(-2); //0~11
    let date = this.getDate();
    //요일 정보 리턴
    let day = this.getDay(); //0 ~ 6 : 일요일이 0
    //이번달이 며칠까지 있는지?
    return `${year}-${month}-${date}-${day}`;
}

console.log(today.toCustomString());



function showCalendar(year, month){//연도와 월 정보를 입력하면
    let dayList = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let src = '';

    document.write(`<h3>${year}년 ${month}월 달력</h3>`);
    //원래 month-1을 입력해야 해당 달이 나오지만 month+1,0을 해야 다음달의 0일로, 이번달의 최대 날짜를 구할 수 있음
    //그러므로 month 사용
    today = new Date(year,month,0);
    let lastDate = today.getDate();
    console.log(lastDate);
    //이번달의 날을 기준으로 구하고 싶으면 month-1
    today = new Date(year,month-1,1);
    let firstDayBlank = today.getDay();
    today = new Date();
    let todayDate = today.getDate();

    src+='<table border=1><tr>';
    for(let i of dayList){
        src+='<th>'+i+'</th>';
    }
    src+='<tr>';
    for(let i = 0; i<firstDayBlank;i++){
        src+=`<td> </td>`;
    }
    for(let i = 1; i<=lastDate;i++){
        // if(todayDate==i){
        //     src+=`<td id = 'today'>${i}</td>`;

        // }else{
        //     src+=`<td>${i}</td>`;
        // }
        src += `${todayDate==i ? '<td style="color:violet;">' : '<td>'} ${i} </td>`

        if((i+firstDayBlank)%7==0){
            src+='</tr><tr>';
        }
    }
    src+='</tr>';
    src+='</table>';
    return src;

}

let src = showCalendar(2022,5);
document.write(src);