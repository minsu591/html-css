import empInput from './empInput.js';
let template = `
<div>
    <emp-input></emp-input>
    <button>전체 조회</button><br>
    <a>사원 번호 조회 : </a><input type="text"><button>개별 조회</button>
    <table border="1">
        <thead>
            <tr>
                <th>department_id</th>
                <th>manager_id</th>
                <th>commission_pct</th>
                <th>salary</th>
                <th>hire_date</th>
                <th>phone_number</th>
                <th>email</th>
                <th>last_name</th>
                <th>first_name</th>
                <th>employee_id</th>
                <th>department_name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>department_id</td>
                <td>manager_id</td>
                <td>commission_pct</td>
                <td>salary</td>
                <td>hire_date</td>
                <td>phone_number</td>
                <td>email</td>
                <td>last_name</td>
                <td>first_name</td>
                <td>employee_id</td>
                <td>department_name</td>
            </tr>
        </tbody>
    </table>
</div>
`

export default {
    template :template,
    props : ['empId'],
    components : {
        empInput
    }
}