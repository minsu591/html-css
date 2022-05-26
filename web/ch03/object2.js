//ch03/object2.js

//함수 table 생성
//클래스로 table 생성

//생성자 및 메소드 내에서 선언한 지역변수를 사용하기 위해서는 this를 이용
//단, 생성자를 통해 들어온 데이터는 this로 불러내지 않아도 됨
class Table{
    constructor(ary = []){
        this.tag = '';
        this.ary = ary;
    }
    createTable(){
        this.tag += '<table border =1 width = 200px>';
        this.createHeader();
        this.createBody();
        this.tag+= '</table>';
        return this.tag;
    }
    
    createHeader(){
        this.tag += '<thead><tr>';
        for(let i in ary[0]){
            this.tag+='<td>'+i+'</td>'
        }
        this.tag+='</tr></thead>'
    }
    createBody(){
        for(let ob of ary){
            this.tag+='<tr>';
            for(let field in ob){
                this.tag+='<td>'+ob[field]+'</td>';
            }
            this.tag+='</tr>';
        }
        this.tag+='</tbody>';
    }
}
let ary = [{
    sno:'1001',
    sname:'홍길동',
    score:80
},{
    sno:'1002',
    sname:'김길동',
    score:70
},{
    sno:'1003',
    sname:'박길동',
    score:90
}]
//클래스 외부에서 클래스에 메소드 추가하는 방법
Table.prototype.getTagInfo = function(){
    console.log(this.tag);
}
let table = new Table(ary);
let str = table.createTable();
document.write(str);
table.getTagInfo();