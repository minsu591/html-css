let template = `
<div>
    <a>사원번호</a><input type="number" v-model="empId"><br>
    <a>성</a><input type="text" v-model="lastName"><br>
    <a>이름</a><input type="text" v-model="firstName"><br>
    <a>이메일</a><input type="email" v-model = "email"><br>
    <a>직책</a><input type="text" v-model="jobId"><br>
    <select>
        <template v-for="item in jobIdArray">
            {{item}}
            <option value="item.job_id">{{item.job_title}}</option>
        </template>
    </select>
    <hr>
    <a>오잉</a>
    <a>{{empId}}</a>
    <a>{{lastName}}</a>
    <button type="button">등록</button>
    <router-link tag="button" v-bind:to="{name : 'empList'}">목록 열기</router-link>
</div>`

export default {
    template : template,
    data : function(){
        return {
            empId : '',
            lastName : '',
            firstName : '',
            email : '',
            jobId : '',
            registerFlag : '',
            jobIdArray : []
        }
    },
    created : function(){
        let arr = []
        $.ajax({
            url : 'http://192.168.0.29/myserver/empDeptJob',
            dataType : 'json',
            success : function(data){
                arr = data['jobs'];
                console.log(arr);
            }
        })
        this.jobIdArray = arr;
        console.log(this.jobIdArray);
    }
}
//등록안했으면 flag = false,
//등록했으면 flag = true