import myHeader from './components/myHeader.js'
import router from './router/router.js'
import originalData from './data/index.js'

let template = `
<div>
    <my-header></my-header>
    <router-view></router-view>
</div>
`

new Vue({
    el : '#app',
    router,
    template : template,
    components : {
        myHeader
    },
    data : {
        userData : [],
        contentData : [],
        commentData : [],
        subCommentData : [],
        loginUser : {}
    },
    computed : {
        //기본 property처럼 사용할 수 있음
        postData : function(){
            //content만 봐서는 user가 누구인지 알 수 없기 때문에
            //map : 기존의 배열을 재구성
            //filter : 기존의 배열을 걸러냄
            return this.contentData.map(content => {
                //각 데이터끼리 매칭을 진행
                let selectUserName = this.userData.filter(user =>{
                                //어차피 한 개만 나옴
                                return (user.user_id == content.user_id);
                            })[0].name;
                //content 데이터에 name을 추가
                return {
                    ...content,
                    user_name : selectUserName
                }
            })
        }
    },
    created : function(){
        //vue instance가 완전히 생성되고 나서
        this.userData = originalData['User'];
        this.contentData = originalData['Content'];
        this.commentData = originalData['Comment'];
        this.loginUser = this.userData[0];
    },
    methods : {
        getData : function(){
            return {
                userData : this.userData,
                contentData : this.contentData,
                commentData : this.commentData,
                postData : this.postData
            }
        },
        getLoginInfo : function(){
            //로그인 정보
            return this.loginUser;
        },
        setContentData : function(contentData){
            this.contentData = contentData;
        },
        setCommentData : function(commentData){
            this.commentData = commentData;
        }
    }
})



