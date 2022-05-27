//ch05/array1.js
//String.indexOf() => 인덱스값 반환, 값 없으면 -1 리턴
//Array.indexOf() => 인덱스 / -1
//Array.find() => true / false

//indexOf(찾는 값, 찾기 시작한 인덱스 위치)
let arr1 = ['펭수','라이언','어피치','콘','브라운','무지','라이언'];
console.log(arr1.indexOf('라이언')); //1
console.log(arr1.indexOf('라이언',2)); //어피치 뒤부터 찾기 -1

//find(함수) : 함수 조건에 맞는 '값'을 반환, 인덱스X
//찾는 값이 여러개면 첫 번째 값 반환 (return 값을 반환하는게 아니고 조건을 충족하는 값을 반환)
let find_arr = arr1.find((el,idx)=>{el=='라이언'});
console.log(find_arr);

//filter(함수) : find처럼 조건에 맞는 값을 반환해주나, 반환하고 배열로 만들어줌

//Array.some(함수) => 조건 1건 true/false
//Array.every(함수) => 조건 모두 true/false

console.log(arr1.some(val => val.length >=3));
console.log(arr1.every(val => val.length >=3));

//배열 정렬하기 p.222
//배열 요소들 정렬
console.log(arr1.reverse()); //그냥 현재 배열을 거꾸로
console.log(arr1.sort()); //가나다 순서로 오름차순 정렬

let arr2 = [3,4,21,10,1];
arr2.sort((a,b)=>{ //비교함수를 인자로 넣음
    //return 비교값
    //비교값 > 0 : 제자리에 그대로 있기
    //비교값 < 0 : 바꾸기
    //비교값 = 0 : 순서 바꾸지 않기
    return a-b; //a-b >0 : a가 크다 -> a b순으로 배치 : 3 2 내림차순
    //a -b > 0 : a가 크다 : b를 앞으로
    // a - b < 0 : b가 크다 : a를 앞으로
})
console.log(arr2);

const arr3 = [3,2,7,1,4,1,6,9,8];
console.log(arr3.sort(function(a,b){
    return a-b;
}));

// [27,8,5,13]; => 정렬 이상하게 됨. js의 sort는 정렬할 때 요소를 문자열 취급
//array.sort([compareFunction])

let names ='정임경, 박근형, 김진형, 황하경, 류미래';

let nameAry = names.split(/,\s/);
nameAry.sort();
console.log(nameAry);