let template = `
<div>
    <table id="list">
        <tr>
            <td v-for="info in headerInfo">{{info}}</td>
        </tr>
        <template v-for="empInfo in currentData">
            <router-link tag="tr" v-bind:to="{name : 'empRead', params : {empId : empInfo.employee_id}}">
                <td v-for="info in headerInfo">{{empInfo[info]}}</td>
            </router-link>
        </template>
    </table>
    <!--페이지네이션-->
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <template v-for="page in pagingInfo.totalPage">
                <li class="page-item"><a class="page-link" href="#" v-on:click="currentPage = page">{{page}}</a></li>
            </template>
        </ul>
    </nav>
    <router-link tag="button" v-bind:to="{name : 'empWrite'}">직원등록</router-link>
</div>
`

const empSelect = {
    template : template,
    data : function(){
        return {
            headerInfo : ['employee_id','first_name','last_name','email','job_id'],
            empList : [],
            currentPage : 1,
        }
    },
    created : function(){
        //ajax를 실행하기 전에 this를 불러와서 임시로 값을 담아줘야함.
        //this는 function을 가르키는 객체이기 때문에
        const component = this;
        $.ajax({
            url : 'http://192.168.0.29/myserver/empSelect',
            dataType : 'json',
            success : function(data){
                console.log('created');
                if(data != null){
                    //this 사용하지말고 변수값을 이용해서 empList 선택하기
                    component.empList = data;
                }
            }, error : function(reject){
                console.log(reject);
            }
        })
    },
    computed : {
        pagingInfo : function(){
            let perData = 10;
            let totalPage = Math.ceil(this.empList.length/perData);

            let totalPageArray = [];
            for(let i = 1 ; i<=totalPage;i++){
                totalPageArray.push(i);
            }

            return {
                perData : perData,
                totalPage : totalPageArray
            }
        },
        currentData : function(){
            let firstIndex = (this.currentPage -1) * this.pagingInfo.perData;
            let lastIndex = firstIndex + this.pagingInfo.perData -1;

            return this.empList.filter((empInfo,idx)=>{
                return idx >= firstIndex ? (idx <= lastIndex ? true : false) : false;
            })
        }
    }
}

export {empSelect}