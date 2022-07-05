let template = `
<div>
    <table id="list">
        <tr>
            <th style="width:50px;">글번호</th>
            <th>글제목</th>
            <th style="width:50px;">조회수</th>
            <th style="width:70px;"></th>
        </tr>
        <tr v-for="item in object" v-bind:key="item.no">
            <td>{{item.no}}</td>
            <router-link tag="td" v-bind:to="{name : 'boardRead', params : {item : item}}">{{item.title}}</router-link>

            <td>{{item.view}}</td>
            <!--단순 데이터처리이기 때문에 수정 필요 없음-->
            <td><button v-on:click.once="boardDelete(item.no)">삭제</button></td>
        </tr>
    </table>
    <router-link tag="button" style="float:right;" v-bind:to="{name : 'boardWrite'}">글쓰기</router-link>
</div>`

export default {
    name : 'my-board-list',
    template : template,
    data : function(){
        return {
            object : []
        }
    },
    created : function(){
        this.object = this.$parent.getParentData();
    },
    methods : {
        boardDelete : function(no){
            for(let i = 0; i < this.object.length; i++){
                if(this.object[i].no == no){
                    this.object.splice(i,1);
                }
            }
            this.$parent.setParentData(this.object);
        }
    }
}