let template = `
<div>
    <a>사원 번호 조회 : </a><input type="text"><button>개별 조회</button>
    <table border="1">
        <thead>
            <tr>
                <th v-for="th in headerInfo">{{th}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for = "item in dataArray">
                <td v-for = "header in headerInfo">{{item[header]}}</td>
            </tr>
        </tbody>
    </table>
</div>
`

export default {
    template :template,
    data : function(){
        return{
            headerInfo : ['employee_id','first_name','last_name','email','job_id'],
            dataArray : []
        }
    },
    props : ['empId'],
    created : function(){
        const comp = this;
        $.ajax({
            url : 'http://192.168.0.29/myserver/empSelect',
            dataType : 'json',
            success : function(result){
                comp.dataArray = result;
            }
        })
    }
}