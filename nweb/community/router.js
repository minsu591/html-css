import myList from './components/myList.js';
import myWrite from './components/myWrite.js';
import myDetail from './components/myDetail.js';
import myModify from './components/myModify.js';

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'myList',
            component : myList,
            props : true
        },
        {
            path : '/myDetail/:id',
            name : 'myDetail',
            component : myDetail,
            props : true
        },
        {
            path : '/myWrite',
            name : 'myWrite',
            component : myWrite,
            props : true
        },
        {
            path: '/myModify',
            name : 'myModify',
            component : myModify,
            props : true
        },
        {
            path : '*',
            redirect : '/'
        }
    ]
})