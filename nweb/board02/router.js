import main from './components/main.js'
import myBoardList from './components/myBoardList.js'
import myBoardRead from './components/myBoardRead.js'
import myBoardWrite from './components/myBoardWrite.js'

export default new VueRouter({
    mode : 'history', //default : hash -> '#'/path
    //한 페이지 내에서 동작하는건 #이 붙는게 문제 없음. 서버를 왔다갔다할 때는 문제 O 
    routes : [
        {
            path : '/',
            name : 'main',
            component : main,
            //props 사용하려면 true로 해야함
            props : true
        },
        //boardList
        {
            path : '/boardList',
            name : 'boardList',
            component : myBoardList,
            props : true
        },
        //boardRead
        {
            //넘겨줄 데이터가 있기 때문에
            //컴포넌트에서 다룰 이름을 지정해주기
            path : '/boardRead/:item',
            name : 'boardRead',
            component : myBoardRead,
            props : true
        },
        //boardWrite
        {
            path : '/boardWrite',
            name : 'boardWrite',
            component : myBoardWrite,
            props : true
        },
        { //엉뚱한 값이 들어오면 메인으로 넘기기
            path : '*',
            redirect : '/'
        }
    ]
})