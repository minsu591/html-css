import empInput from './components/empInput.js'
import empList from './components/empList.js'

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'empInput',
            component : empInput
        },
        {
            path : '/empList/:empId',
            name : 'empList',
            component : empList
        },
        {
            path : '*',
            redirect : '/'
        }

    ]
    
})