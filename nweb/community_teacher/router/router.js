import myBoardList from "../components/myBoardList.js";
import myBoardRead from '../components/myBoardRead.js';
import myBoardWrite from '../components/myBoardWrite.js';

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            //들어올 데이터가 없으므로 props없음
            path : '/',
            name : 'boardList',
            component : myBoardList
        },
        {
            //뭐를 상세보기할건지 알 수 있어야하므로 데이터가 필요
            path : '/boardRead/:post',
            name : 'boardRead',
            component : myBoardRead,
            props : true
        },
        {
            //수정과 작성 둘 다 써야되기 때문에
            //파라미터 값으로 구분
            path : '/boardWrite/:contentId',
            name : 'boardWrite',
            component : myBoardWrite,
            props : true
        },
        {
            path : '*',
            redirect : '/'
        }
    ]
})