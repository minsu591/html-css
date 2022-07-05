let template = `
<header>
    <h2>간단한 게시판</h2>
    <p>게시판 데이터 json 파일 읽기</p>
    <input type="file" v-on:change="loadData($event)">
    <button v-on:click = "saveBoardList">게시판 저장하기</button>
</header>`

export default {
    //이름을 줘야 자식 component형태로 사용 가능함
    name : 'my-header',
    template : template,
    props : ['parentData'],
    methods : {
        loadData : function(event){
            let file = '/board02/'+event.target.files[0].name;
            if(file){
                fetch(file)
                .then(response => response.json())
                .then(data => {
                    this.parentData.dataArray = data;
                    // if(this.parentData.dataArray != null && this.parentData.dataArray['board'].length >0){
                    //     this.parentData.listOk =true;
                    // }
                    //자식 컴포넌트 호출시 v-bind:parentData.sync="뷰 인스턴스 프로퍼티"
                    this.$emit('update:parentData', this.parentData);
                    this.$router.push({name : 'boardList'});
                })
                .catch(err => console.log(err));
            }
        },
        saveBoardList : function(){
            let data = this.parentData.dataArray;
            if(data.length == 0){
                alert('저장할 게시판 내용이 없습니다.');
                return;
            }
            if(typeof data == 'object'){
                //data를 json 문자열로 변환
                data = JSON.stringify(data, undefined, 4);
            }
            //데이터 자체를 링크로 만들어서 다운로드
            let blob = new Blob([data],{type : 'text/json'});
            let a = document.createElement('a');
            a.download = 'board.json';
            a.href = window.URL.createObjectURL(blob);
            a.click();
        }
    }
}