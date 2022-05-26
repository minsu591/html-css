//ch02/mock_data.js

let data = `[{"id":1,"first_name":"Mariska","last_name":"Hawkey","email":"mhawkey0@cornell.edu","gender":"Female","salary":50},
{"id":2,"first_name":"Delbert","last_name":"Stirtle","email":"dstirtle1@yahoo.co.jp","gender":"Male","salary":91},
{"id":3,"first_name":"Michel","last_name":"Martugin","email":"mmartugin2@google.cn","gender":"Non-binary","salary":68},
{"id":4,"first_name":"Gabriello","last_name":"Climie","email":"gclimie3@accuweather.com","gender":"Male","salary":55},
{"id":5,"first_name":"Wang","last_name":"Compton","email":"wcompton4@bbb.org","gender":"Male","salary":66},
{"id":6,"first_name":"Ciel","last_name":"Urvoy","email":"curvoy5@oakley.com","gender":"Female","salary":73},
{"id":7,"first_name":"Sashenka","last_name":"Fewell","email":"sfewell6@craigslist.org","gender":"Female","salary":96},
{"id":8,"first_name":"Lura","last_name":"Dudding","email":"ldudding7@weibo.com","gender":"Female","salary":75},
{"id":9,"first_name":"Helene","last_name":"Shuttleworth","email":"hshuttleworth8@house.gov","gender":"Female","salary":99},
{"id":10,"first_name":"Donelle","last_name":"Noblett","email":"dnoblett9@joomla.org","gender":"Agender","salary":100}]`;

//JSON 형태의 데이터를 javascript의 object 타입으로 변경해주는 기능
//parsing을 안하면 그냥 문자열임
data = JSON.parse(data);
console.log(data);

//salary가 80이상인 배열 가져오기
let over80 = data.filter((val,idx) => {
    return val.salary >= 90;
})

console.log(over80);

let females = data.filter((obj => obj.gender == 'Female'));

//html 내에 script를 중복 선언하면 공유가 됨.
let str = createTable(females);
document.write(str);
