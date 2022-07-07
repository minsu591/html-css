let template = `
<div>
    <form id="info" onsubmit="return false">
        <template v-for="info in infos">
            <div>
                <label v-bind:for="info">{{info}}</label>
                <input type="text" v-bind:id = 'info' v-bind:name="info" v-model="empInfo[info]">
            </div>
        </template>
    </form>
    <div>
        <button v-on:click="updateMode ? updateContent() : uploadContent()">저장</button>
        <router-link tag="button" v-bind:to="{name : 'empSelect'}">취소</router-link>
    </div>
</div>
`

export default {
    template : template,
    props : ['empId'],
    data : function(){
        return{
            empInfo : {
                employee_id : 0,
                first_name : '',
                last_name : '',
                email : '',
                job_id : '',
            },
            infos : ['employee_id','first_name','last_name','email','job_id'],
            updateMode : false,
            updateInfo : {}
        }
    },
    created :function(){
        this.empId = Number(this.empId);
        if(this.empId > 0){
            const component = this;
            $.ajax({
                url : 'http://192.168.0.29/myserver/empFind',
                type : 'get',
                dataType : 'json',
                data : {employee_id : component.empId},
                success : function(data){
                    if(data != null){
                        component.empInfo = data;
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            });
        }
    },
    methods : {
        updateContent : function(){
            const component = this;
            $.ajax({
                url : 'http://192.168.0.29/myserver/empUpdate',
                type : 'post',
                data : component.empInfo,
                success : function(data){
                    if(data != null){
                        component.$router.push({name : 'empSelect'});
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            });
        },
        uploadContent : function(){
            const component = this;
            console.log(component.empInfo);
            $.ajax({
                url : 'http://192.168.0.29/myserver/empInsert',
                type : 'post',
                data : component.empInfo,
                success : function(data){
                    console.log(data);
                    if(data != null){
                        component.$router.push({name : 'empSelect'});
                    }
                },
                error : function(reject){
                    console.log(reject);
                }
            });
        }
    }
}