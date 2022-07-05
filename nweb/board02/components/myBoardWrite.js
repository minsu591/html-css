let template = `
<div>
    <table id="list">
        <tr>
            <td>글제목</td>
            <td><input type="text" style="width: 90%;" v-model="title"></td>
        </tr>
        <tr>
            <td colspan="2">
                <textarea style="width:100%;" v-model="content"></textarea>
            </td>
        </tr>
    </table>
    <router-link tag="button" style="float:right;" v-bind:to="{name : 'boardList'}">목록</router-link>
    <button style="float:right;" @click="boardSave(title,content)">저장</button>
</div>
`

export default{
    name : 'my-board-write',
    template : template,
    data : function(){
        return {
            title : '',
            content : ''
        }
    },
    methods : {
        boardSave : function(title,content){
            let dataArray = this.$parent.getParentData();
            let no = 1;
            if(dataArray.length != 0){
                //마지막 게시글의 번호 + 1을 번호로 설정
                if(dataArray.length != 0){
                    no = parseInt(dataArray[dataArray.length-1].no)+1;
                }

                let board_info = {
                    no : no,
                    title : title,
                    content : content,
                    view : "1"
                }

                dataArray.push(board_info);

                this.$parent.setParentData(dataArray);
                this.$router.push({name : 'boardList'});
            }

        }

    }
}