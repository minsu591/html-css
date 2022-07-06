import {empSelect} from './components/empSelect.js';

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'empSelect',
            component : empSelect
        },
        {
            path :'*',
            redirect : '/'
        }
    ]
})