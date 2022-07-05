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
        <tr v-for="post in posts" v-bind:key="post.content_id">
            <td>{{post.content_id}}</td>
            <router-link v-bind:to="{name : 'boardRead', params : {post: post}}">{{post.title}}</router-link>
            <td>{{post.user_name}}</td>
            <td>{{post.content_id}}</td>
            <td>{{post.created_at}}</td>
        </tr>
    </table>
    <div>
        <!--페이지네이션-->
    </div>
    <router-link tag="button" v-bind:to="{name : 'boardWrite'}">글쓰기</router-link>
</div>
`