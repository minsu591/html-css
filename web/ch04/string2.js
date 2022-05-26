//ch04/string2.js
//날짜 포맷과 문자열 변환 p.183

let today = new Date();
console.log(today.toDateString());
console.log(today.toISOString());

Date.prototype.customFormat = function(){
    let yyyy = this.getFullYear();
    let mm = this.getMonth()+1; //0~11
    let date =this.getDate();
    let day = this.getDay();
    let hour = this.getHours();
    let minutes = this.getMinutes();
    let ss = this.getSeconds();
    
    return `${yyyy}-${('0'+mm).slice(-2)}-${date} ${hour}:${minutes}:${('0'+ss).slice(-2)}`;
}

console.log(today.customFormat());

Date.prototype.getLeftTime = function(){
    let leftHour = 17 - this.getHours();
    let leftMinutes = 50 - this.getMinutes();
    if(leftHour >= 0){
        return `수업 종료까지 ${leftHour}시간 ${leftMinutes}분 남았습니다.`;
    }else{
        return `종료되었습니다.`;
    }
}
console.log(today.getLeftTime());

//일정 간격마다 정의된 함수를 반복 실행
setInterval(function(){
    let today = new Date();
    // console.log(today.customFormat());
    // document.write(today.customFormat()+'<br>');
},1*1000);