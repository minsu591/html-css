import router from './router.js'
import empList from './components/empList.js';
import empInput from './components/empInput.js';

let template = `
<div>
    <router-view></router-view>
</div>
`

new Vue({
    el : '#app',
    router,
    template : template,
    data : function(){
        return {
            dataArray : [],
            jobIdArray : []
        }
    },
    components : {
        empList,
        empInput
    },
    created : function(){
        this.loadData();
    },
    methods : {
        loadData : function(){
            //json으로 데이터 불러오기
            $.ajax({
                url : 'http://192.168.0.29/myserver/empSelect',
                dataType : 'json',
                success : function(data){
                    this.dataArray = data;
                }
            })
        }
    }

})