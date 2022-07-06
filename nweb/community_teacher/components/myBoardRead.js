import commentList from './commentList.js'

let template = `
<div>
    <div>
        <!--게시글-->
        <div>
            <span>{{post.content_id}}</span>
            <span>{{post.title}}</span>
            <span>글쓴이 : {{post.user_name}}</span>
            <span>작성일 : {{post.created_at}}</span>
        </div>
        <div>{{post.context}}</div>
    </div>
    <div>
        <!--버튼(수정,삭제)-->
        <router-link tag="button" v-bind:to="{name : 'boardWrite', params : {contentId : post.content_id}}">
            수정
        </router-link>
        <button v-on:click="deleteData">삭제</button>
    </div>
    <div>
        <!--해당 게시글 댓글-->
        <comment-list v-bind:contentId="post.content_id"></comment-list>
    </div>
</div>
`

export default {
    name :'my-board-read',
    template : template,
    //router에서 정의된 이름을 써주기
    props : ['post'],
    created : function(){
        this.comments = this.$parent.getData().commentData;
    },
    components : {
        commentList
    },
    computed : {
        myComments : function(){
            let comments = this.$parent.getData().commentData;
            comments = comments.filter(comm => {
                return comm.content_id == this.post.content_id
            });
            return comments;
        },
    },
    methods : {
        deleteData : function(){
            let contentData = this.$parent.contentData;
            for(let i = 0; i< contentData.length;i++){
                if(contentData[i].content_id == this.post.content_id){
                    contentData.splice(i,1);
                }
            }
            this.$parent.setContentData(contentData);
            //과정이 끝나고 나면 라우터를 타서 경로가 변경
            this.$router.push({name : 'boardList'});
        }
    }
}