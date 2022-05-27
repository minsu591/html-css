//in console

document.getElementsByClassName('animal')[0];
document.getElementsByClassName('animal')[0].innerText
document.getElementsByClassName('animal')[0].innerText='ryon'
document.getElementsByClassName('animal')[0].innerText
// '라이언'
document.getElementsByClassName('animal')[0].innerText='ryon'
// 'ryon'
document.getElementsByClassName('animal')[0].innerText='ryon'
// 'ryon'
document.getElementsByTagName('span')[0].innerText
// '스몰'
document.getElementsByTagName('span')[0].innerHTML='small'
// 'small'
document.getElementsByClassName('icons')[0].children[0].children[0].innerText='스몰'
// '스몰'
document.querySelector('ul.icons') //ul태그의 icons 클래스를 가져오겠다
{/* <ul class=​"icons">​…​</ul>​ */}
document.querySelector('ul.icons').childNodes[1] //태그와 태그 사이의 값은 textNode로 존재
{/* <li>​::marker​<span>​스몰​</span>​<span>​미디엄​</span>​<span>​빅​</span>​</li>​ */}
document.querySelector('ul.icons').childNodes[1].childNodes[1].innerText='스모올'
// '스모올'

/*
요소를 선택하는 방식.
element => getElementsBy... : tag
node => querySelectorAll() : node(element, attribute, text)
    element node :<body>, <a>, <div> ...
    attribute node : id = "myelement", class="align-right"
    text_node : 텍스트 문자열 노드
node기준으로 가져오기(childNodes) : (text) span (text), span(text)...
element기준으로 가져오기(children) : span, span, span
*/

//newfriends에 친구 추가하기
let li = document.createElement('li') //요소 생성
li.innerHTML='하잉'
// '하잉'
console.log(li)
// <li>​하잉​</li>​
document.querySelector('#newfriends').appendChild(li) //요소 선택해오기
{/* <li>​…​</li>​::marker​"하잉"</li>​ */}
li = document.createElement('li')
li.appendChild(document.createTextNode('김민서'))
// "김민서"
console.log(li)
// VM4494:1 <li>​김민서​</li>​
document.querySelector('#newfriends').appendChild(li)
{/* <li>​::marker​"김민서"</li>​ */}