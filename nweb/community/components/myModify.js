let template = `
<div>
    <form>
        제목 : <input type="text" style="width:70%" v-model="title">
        <textarea cols="80" rows="20" v-model="content"></textarea>
        <br>
        <button type="button" @click="saveBoard(title,content)">저장</button>
        <button type="reset">취소</button>
    </form>
</div>
`

export default {
    name :'my-modify',
    template :template,
    data : function(){
        return {
            title : '',
            content : ''
        }
    },
    props : ['item'],
    created : function(){
        this.title = this.item.title;
        this.content = this.item.context;
    },
    methods : {
        saveBoard : function(title, content){
            console.log(title);
            console.log(content);

            let dataArray = this.$parent.getContentData();

            for(let i = 0; i<dataArray.length;i++){
                console.log(dataArray[i]);
                if(dataArray[i].content_id == this.item.content_id){
                    dataArray[i]['title'] = title;
                    dataArray[i]['context'] = content;
                    dataArray[i]['updated_at'] = new Date();
                    console.log('수정 성공')
                    break;
                }
            }
            this.$parent.setContentData(dataArray);
            this.$router.push({name : 'myList'});
        }
    }
}