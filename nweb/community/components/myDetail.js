let template = `
<div>
    <table border="1px">
        <thead>
            <tr>
                <th style="width:100px">{{item.content_id}}</th>
                <th style="width:100px">{{item.user_id}}</th>
                <th style="width:150px">{{item.title}}</th>
                <th style="width:100px">{{item.created_at}}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="4">
                    {{item.context}}
                </td>
            </tr>
        </tbody>
    </table>
    <router-link tag="button" v-bind:to="{name : 'myList'}">목록</router-link>
    <router-link tag="button" v-bind:to="{name : 'myModify', params : {item : item}}">수정</router-link>
</div>
`

export default {
    name : 'my-detail',
    template : template,
    props : ['item']
}