import myBoardList from "../components/myBoardList";

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            name : 'boardList',
            component : myBoardList,
            props : true
        },
        {
            path : '*',
            redirect : '/'
        }
    ]
})