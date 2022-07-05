import main from './components/main'
import detail from './components/myBoardRead'
import list from './components/myBoardList'
import write from './components/myBoardWrite'

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '*',
            redirect : '/'
        },
        {
            path : '/',
            name : 'iMain',
            component : main,
            props : true
        },
        {
            path : '/detail',
            name : 'detail',
            component : detail,
            props : true
        },
        {
            path : '/list',
            name : 'list',
            component : list,
            props : true
        },
        {
            path : '/write',
            name : 'write',
            component : write,
            props : true
        }
    ]

});