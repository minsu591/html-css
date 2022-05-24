//variable3.js


let int1 = window.parseInt(3.234);
//문자열 => 정수
int1 = parseInt('3.14');
console.log(int1);
int1 = parseInt('hello'); //Not A Number. (오류가 나는건 아님)
console.log(int1);

//문자열 => 실수
let double1 = window.parseFloat('3.14');
double1 = parseFloat('3.14abdcdfsdf');
console.log(double1); //바꿀 수 있는 곳까지 바꾸어줌.

console.log('3'+'7'); //37
console.log(parseInt('3')+parseInt('7')); //10

console.log(3);
console.log((3).toString()); //string은 더 검게 보임
let arr = [1,2,3];
console.log(arr.toString()); //구분자 ,
console.log(arr.join('-')); //구분자 - 


//object 타입 하위로 계속 object 타입 가질 수 있음
let parentObj = {
    fname : 'window',
    lname : 'close',
    childObj:{
        fname:'document',
        lname : 'open',
        grandChild:{
            hobby : ['run','reading']
        }
    }
}
console.log(parentObj.childObj.grandChild.hobby[0]);