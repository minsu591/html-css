import router from './router.js';
import myList from './components/myList.js';
import index from './index.js';

let template = `
<div>
    <router-view></router-view>
</div>`

new Vue({
    el : '#app',
    router,
    data : {
        dataArray : [],
        user : {
            user_id: 5,
            name: "예나",
            created_at: "2018-09-15"
        }
    },
    components : {
        myList
    },
    created : function(){
        this.dataArray = index;
    },
    template : template,
    methods : {
        getContentData : function(){
            return this.dataArray['Content'];
        },
        setContentData : function(dataArray){
            this.dataArray['Content'] = dataArray;
        },
        getUserData : function(){
            return this.dataArray['User'];
        },
        setUserData : function(user){
            return this.dataArray['User']=user;
        }
    }
})