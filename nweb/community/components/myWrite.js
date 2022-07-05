let template = `
<div>
    <form>
        제목 : <input type="text" style="width:70%" v-model="title">
        <textarea cols="80" rows="20" v-model="content"></textarea>
        <br>
        <button type="button" v-on:click="saveBoard(title,content)">저장</button>
        <button type="reset">취소</button>
    </form>
</div>`

export default{
    name : 'my-write',
    template : template,
    data : function( ){
        return {
            title : '',
            content : ''
        }
    },
    methods : {
        saveBoard : function(title, content){
            let dataArray = this.$parent.getContentData();
            let user = this.$parent.user;

            let content_id = 1;
            if(dataArray.length != 0){
                content_id = parseInt(dataArray[dataArray.length-1].content_id)+1;
            }
            let board_info = {
                content_id: content_id,
                user_id: user.user_id,
                title: title,
                context: content,
                created_at: new Date(),
                updated_at: null
            }

            dataArray.push(board_info);
            this.$parent.setContentData(dataArray);

            this.$router.push({name : 'myList'});
        }
    }

}