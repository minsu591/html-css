let template = `
<div>
    <input type="text" v-model="title" placeholder="제목을 입력해주세요."><br>
    <textarea v-model="context" placeholder="내용을 입력해주세요." row="5" max-row="10">
    </textarea>
    <!--삼항 연산자 이용해서 updateMode-->
    <button v-on:click="updateMode ? updateContent() : uploadContent()">저장</button>
    <router-link tag="button" v-bind:to="{name : 'boardList'}">취소</router-link>
</div>
`

export default{
    template : template,
    props : ['contentId'],
    data : function(){
        return {
            //게시글 등록시 필요한 정보
            title : '',
            context : '',
            user_id : '',
            created_at : '',
            
            //게시글 수정시 필요한 정보
            updated_at : '',
            updateObject : '',

            //모드 전환용 정보
            updateMode : ''
        }
    },
    created : function(){
        if(this.contentId > 0){
            //contentId가 있음
            //수정모드
            this.contentId = Number(this.contentId);
            this.updateMode = true;

            //컴포넌트 출력모드를 변경하고 원본 데이터를 가져옴
            this.updateObject = this.$parent.getData().postData.filter(post => {
                return (post.content_id == this.contentId)
            })[0];
            //원본 데이터에서 필요한 정보를 렌더링
            this.title = this.updateObject.title;
            this.context = this.updateObject.context;
            //수정일자를 셋팅
            this.updated_at = this.getDate();
        }else{
            //새글모드
            console.log('새글')
            this.updateMode = false;
            this.user_id = this.$parent.getLoginInfo().user_id;
            this.created_at = this.getDate();
        }
    },
    methods : {
        getDate : function(){
            let today = new Date();

            let year = today.getFullYear();
            let month = ('0'+(today.getMonth()+1)).slice(-2);
            let day = ('0'+today.getDate()).slice(-2);

            return year+ '-'+month +'-'+day;
        },
        uploadContent : function(){
            let contentData = this.$parent.getData().contentData;

            //업로드할 콘텐츠의 아이디 찾기
            let newContentId = 1;
            if(contentData.length > 0){
                //객체 배열이므로 기준을 설정해주어야함.
                //sort 해서 return 값이 +면 내림차순, -면 오름차순
                contentData.sort((a,b)=>{
                    return a.content_id - b.content_id
                });
                //마지막 데이터의 content_id에 1을 증가
                newContentId = contentData[contentData.length-1].content_id+1;
            }
            //콘텐츠 데이터 추가하기
            contentData.push({
                content_id : newContentId,
                user_id : this.user_id,
                title : this.title,
                context : this.context,
                created_at : this.created_at,
                updated_at : this.updated_at
            })

            this.$parent.setContentData(contentData);
            this.$router.push({name : 'boardList'});
        },
        updateContent : function(){
            let contentData = this.$parent.getData().contentData;
            for(let i = 0; i<contentData.length;i++){
                if(contentData[i].content_id==this.updateObject.content_id){
                    contentData[i].title = this.title;
                    contentData[i].context = this.context;
                }
            }

            this.$parent.setContentData(contentData);
            this.$router.push({name : 'boardList'});
        }

    }
}