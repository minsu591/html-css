//ch04/practice2.js

let str = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad qui laborum amet excepturi facilis. Aut excepturi itaque omnis, consequuntur voluptatibus perspiciatis odit? Sed dolores incidunt odio! Quisquam reprehenderit molestiae magni.';
let strAry = str.split(' ');

for(let word of strAry){
    console.log(word);
}
console.clear();

//특정문자로 시작하는 단어 찾기 1
//startWith() => 특정문자로 시작하는 단어를 찾아 있으면 true, 없으면 false로 반환
let findAry = strAry.filter(elem => elem.startsWith('s'));
let s = '';
console.log(`찾은 단어는 ${s.concat(...findAry)}입니다.`);

//단어 찾기 2
let findWord = prompt('찾을 문자열을 입력하세요 >> ');
let findList = '';
for (let word of strAry){
    if(word.startsWith(findWord)){
        findList = findList.concat(word);
    }
}
findList = findList.trimEnd(',');
if(findList.length==0){
    console.log('해당 문자로 시작하는 단어가 없습니다.')
}else{
    console.log(`찾은 단어는 ${findList}입니다.`);
}

//중간에 포함된 단어찾기
//대소문자 관계 없이 찾기
let findli = [];
for(let word of strAry){
    if(word.toLowerCase().includes(findWord)){
        findli.push(word);
    }
}
if(findli.lenghth==0){
    console.log('찾는 단어가 없습니다.')
}else{
    console.log(findli);
}