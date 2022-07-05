export default{
    template : `
    <div>
        <router-link v-bind:to="{name : 'boardList'}">{{sitename}}</router-link>
    </div>`,
    data : function(){
        return {
            sitename : 'Vue.js 게시판'
        }
    }
}