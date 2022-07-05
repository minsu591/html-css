import myHeader from './components/myHeader.js'
import router from './router.js'

//프로젝트 시작하자마자 보이는 곳
//my-header -> header부분 뜨고
//router-view에서 경로에 따라 다르게 나옴
let template = `
<div>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view>
</div>
`
new Vue({
    el : '#app',
    router, //router : {}
    data : {
        dataArray:[]
    },
    components:{
        myHeader
    },
    template : template,
    methods : {
       getParentData : function(){
            return this.dataArray['board'];
       },
       setParentData : function(dataArray){
            this.dataArray['board'] = dataArray;
       },
    }
})