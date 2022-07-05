//분리된거 합쳐주는 곳
//import시, 확장자 써주기
import myHeader from './components/header.js'
import myBoardList from './components/myBoardList.js'
import myBoardRead from './components/myBoardRead.js'
import myBoardWrite from './components/myBoardWrite.js'

//vue instance를 연결하면서 사용될 템플릿
let template = `
<div>
    <my-header v-bind:parentData.sync='this.$data'></my-header>

    <my-board-list v-if="listOk" v-bind:object = "dataArray['board']"
    v-on:board-read="boardRead"
    v-on:board-write="boardWrite"
    v-on:board-delete="boardDelete"></my-board-list>

    <my-board-read  v-if="readOk" v-bind:object="boardInfo"
    v-on:board-list="boardList"></my-board-read>

    <my-board-write v-if="writeOk"
    v-on:board-list="boardList"
    v-on:board-save="boardSave"> </my-board-write>
 </div>
`
//parentData -> header에서 선언한 props

new Vue({
    el : '#app',
    data : {
        listOk:false,
        readOk:false,
        writeOk:false,
        dataArray:[],
        boardInfo : {}
    },
    components:{
        myHeader, //'my-header' : myHeader
        myBoardList,
        myBoardRead,
        myBoardWrite
    },
    template : template,
    methods : {
        boardList : function(){
            this.readOk = false;
            this.writeOk = false;
            this.listOk = true;
        },
        boardWrite : function(){
            this.readOk = false;
            this.writeOk = true;
            this.listOk = false;
        },
        boardRead : function(info){
            this.readOk = true;
            this.writeOk = false;
            this.listOk = false;

            this.boardInfo = info;
            for(let i = 0; i< this.dataArray['board'].length;i++){
                if(this.dataArray['board'][i].no == info.no){
                    this.dataArray['board'][i].view = parseInt(this.dataArray['board'][i].view) +1;
                }
            }
        },
        boardSave : function(title,content){
            let no = 1;
            if(this.dataArray['board'].length != 0){
                //마지막 게시글의 번호 + 1을 번호로 설정
                no = parseInt(this.dataArray['board'][this.dataArray['board'].length-1].no)+1;

                let board_info = {
                    no : no,
                    title : title,
                    content : content,
                    view : "1"
                }

                this.dataArray['board'].push(board_info);
                this.writeOk = false;
                this.readOk = false;
                this.listOk = true;
            }

        },
        boardDelete : function(no){
            for(let i = 0; i< this.dataArray['board'].length;i++){
                if(this.dataArray['board'][i].no == no){
                    this.dataArray['board'].splice(i,1);
                }
            }
        }
    }
})
