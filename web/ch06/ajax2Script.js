document.addEventListener('DOMContentLoaded',function(){
    let url = 'https://jsonplaceholder.typicode.com/photos';
    let xhtp = new XMLHttpRequest();
    xhtp.open('GET',url);
    xhtp.send();
    xhtp.onload = function(){ //속성관련 메소드
        let result = JSON.parse(xhtp.responseText);
        let resultFilter = result.filter(elem =>  elem.albumId ==1 && elem.id<=10);
        console.log(resultFilter);
        let ul = document.createElement('ul');
        resultFilter.forEach(function(val){
            let li = document.createElement('li');
            let img = document.createElement('img');
            li.innerText='ID : '+val.id+', TITLE : '+ val.title;
            img.setAttribute('src',val.thumbnailUrl);
            img.setAttribute('width','40px');
            ul.append(img);
            ul.append(li);
        })
        document.getElementById('show').append(ul);
    };
})
