//댓글 추가 창
let template = `
<div>
    <textarea v-model="context" placeholder="코멘트를 달아주세요~!"
    row="3" max-row="6"></textarea>
    <button v-on:click="createComment">작성하기</button>
</div>
`

export default{
    template :template,
    //reloadComment의 함수도 가져옴
    props : ['contentId', 'reloadComment'],
    data : function(){
        return {
            user : this.$parent.$parent.$parent.getLoginInfo(),
            context: ''
        }
    },
    methods : {
        createComment : function(){
            //게시글에 새댓글 추가
            let commentData = this.$parent.$parent.$parent.getData().commentData;
            let newCommentId = 1;
            if(commentData.length > 0){
                commentData.sort((a,b)=>{
                    return a.comment_id - b.comment_id
                });

                newCommentId = commentData[commentData.length-1].comment_id+1;
            }

            commentData.push({
                comment_id : newCommentId,
                content_id : this.contentId,
                user_id : this.user.user_id,
                context : this.context,
                created_at : '2022-07-06',
                updated_at : ''
            })
            this.$parent.$parent.$parent.setCommentData(commentData);
            this.reloadComment();
            this.context='';
        }
    }
}