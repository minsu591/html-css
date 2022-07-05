let template = `
<div>
    <table border="1">
        <thead>
            <tr>
                <th style="width:100px">번호</th>
                <th>제목</th>
                <th style="width:100px">글쓴이</th>
                <th style="width:170px">작성일</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in object" v-bind:key = "item.content_id">
                <td>{{item.content_id}}</td>
                <router-link tag="td" v-bind:to="{name : 'myDetail', params : {item: item}}">{{item.title}}</router-link>
                <td>{{findName(item.user_id)}}</td>
                <td>{{item.created_at}}</td>
            </tr>
        </tbody>
    </table>
    <router-link tag="button" v-bind:to="{name : 'myWrite'}">글쓰기</router-link>
</div>
`

export default {
    name : 'my-list',
    template :template,
    data : function(){
        return {
            object : [],
            users : []
        }
    },
    created : function(){
        this.object =this.$parent.getContentData();
        this.users = this.$parent.getUserData();
    },
    methods : {
        findName : function(no){
            let users = this.users;
            for(let i=0;i<users.length;i++){
                if(users[i].user_id == no){
                    return users[i].name;
                }
            }
        }
    }

}

