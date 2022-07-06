import commentListItem from './commentListItem.js'
import commentCreate from './commentCreate.js'

let template = `
<div>
    <!--댓글 출력 부분-->
    <div v-for="item in comments" v-bind:key="item.comment_id">
        <comment-list-item v-bind:commentObj="item"></comment-list-item>
    </div>
    <!--댓글 입력 부분-->
    <comment-create v-bind:contentId="contentId" v-bind:reloadComment="reloadComment"></comment-create>
</div>
`

export default {
    template : template,
    components : {
        commentListItem,
        commentCreate
    },
    props : ['contentId'],
    data : function(){
        return {
            //해당 게시글의 댓글만 가져오기
            comments : this.$parent.$parent.getData().commentData.filter(comment => {
                                        return comment.content_id == this.contentId;
                                    })
        }
    },
    methods : {
        //게시글의 댓글 다시 가져오기
        reloadComment : function(){
            this.comments = this.$parent.$parent.getData().commentData.filter(comment => {
                                        return comment.content_id == this.contentId;
                                    })
        }
    }
}