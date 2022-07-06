let template = `
<div>
    <table id="list">
        <tr>
            <td v-for="info in headerInfo">{{info}}</td>
        </tr>
        <tr v-for="empInfo in empList">
            <td v-for="info in headerInfo">{{empInfo[info]}}</td>
        </tr>
    </table>
    <router-link tag="button" v-bind:to="{name : 'empWrite'}">직원등록</router-link>
</div>
`

const empSelect = {
    template : template,
    data : function(){
        return {
            headerInfo : ['employee_id','first_name','last_name','email','job_id'],
            empList : []
        }
    },
    created : function(){
        $.ajax({
            url : 'http://192.168.0.29/myserver/empSelect',
            dataType : 'json',
            success : function(data){
                //this 사용하지말고 변수값을 이용해서 empList 선택하기
                empSelect.empList = data;
            }, error : function(reject){
                console.log(reject);
            }
        })
    }
}

export {empSelect}