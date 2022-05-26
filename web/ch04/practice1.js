//ch04/practice1.js

let friends = [{name : '라이언', age :5}, {name : '어피치', age :3},{name : '콘', age : 4},{name : '프로도', age:2}];

let newFriends = friends.map(function(val,idx){
    let obj = {};
    obj.sname = val.name;
    obj.age = val.age*2;
    obj.sno = idx+1;
    return `${obj.sno}, ${obj.sname}, ${obj.age}`;
})
//join : 배열을 string 값으로 출력, 매개값으로 연결
let tag = '<li>' + newFriends.join('</li><li>')+'</li>';
document.write(tag);

//표현식으로 출력
//방법 1.
console.log(newFriends);
let list = [];
let t = '<table border=1>';
newFriends.forEach(function(val,idx){
    let infoList = val.split(',');
    let aa = '';
    for(let j in infoList){
        aa+=`<td>${infoList[j]}</td>`;
    }
    list.push(aa);
})

t += '<tr>'+ list.join('</tr><tr>')+'</tr>';
t+= '</table>';
document.write(t);

//방법 2.
let tag1 = '<table border =1>'
tag1 += `<tr>${newFriends.map(elem => {let em = elem.split(','); return '<tr><td>'+em[0]+'</td><td>'+em[1]+'</td><td>'+em[2]+'</td></tr>'})}`
tag1+= '</table>';
document.write(tag1);

var obj = {a :1, b: 2, c:3};
for(const prop in obj){
    console.log(`obj.${prop} = ${obj[prop]}`);
}

let o = [10,20,30];
for(let a of o){
    console.log(a);
}

let nf = friends.map(function(val,idx){
    console.log(val,idx);
})


