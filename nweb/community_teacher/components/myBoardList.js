let template = `
<div>
    <table id="list">
        <!--테이블 헤더-->
        <tr>
            <td>글 번호</td>
            <td>제목</td>
            <td>글쓴이</td>
            <td>작성일</td>
            </tr>
            <!--테이블 바디-->
        <tr v-for="post in currentData" v-bind:key="post.content_id">
            <td>{{post.content_id}}</td>
            <router-link tag = "td" v-bind:to="{name : 'boardRead', params : {post: post}}">{{post.title}}</router-link>
            <td>{{post.user_name}}</td>
            <td>{{post.created_at}}</td>
        </tr>
    </table>
    <div>
        <!--페이지네이션
        <ul>
            <li v-for="page in pagingInfo.totalPage" v-on:click="currentPage = page">{{page}}</li>
        </ul>
        -->
    </div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <template v-for="page in pagingInfo.totalPage">
                <li class="page-item"><a class="page-link" href="#" v-on:click="currentPage = page">{{page}}</a></li>
            </template>
        </ul>
    </nav>
    <router-link tag="button" v-bind:to="{name : 'boardWrite'}">글쓰기</router-link>
</div>
`

export default {
    name : 'my-board-list',
    template : template,
    data : function(){ //내부에서 사용될 것만 정의
        return {
            posts : [],
            currentPage : 1
        }
    },
    computed : {
        //data 속성을 필요에 따라 산출해서 또 다른 property가 되도록함
        //페이징관련 totalPage
        pagingInfo : function(){
            let perData = 10;
            //실수를 넣으면 올림
            let totalPage = Math.ceil(this.posts.length/perData);

            let totalPageArray = [];
            for(let i = 1 ; i<=totalPage;i++){
                totalPageArray.push(i);
            }

            return {
                perData : perData,
                totalPage : totalPageArray
            }
        },
        currentData : function(){
            let firstIndex = (this.currentPage -1) * this.pagingInfo.perData;
            let lastIndex = firstIndex + this.pagingInfo.perData -1;

            return this.posts.filter((post,idx)=>{
                //1. post의 idx가 firstIndex보다 큰 것만 가져오기
                //2. 그 중에서도 lastIndex보다 작은 것만 가져오기
                return idx >= firstIndex ? (idx <= lastIndex ? true : false) : false;
            })
        }
    },
    watch : {

    },
    created : function(){
        //별도의 값을 받아오지 않고
        //상위의 getData를 통해서 객체를 받아오고 해당 객체의 postData를 찾아오기
        this.posts = this.$parent.getData().postData;
    }
}