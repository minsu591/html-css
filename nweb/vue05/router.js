import form from './components/form.js'
import main from './components/main.js'
import product from './components/product.js'
import editProduct from './components/editProduct.js'

export default new VueRouter({
    //mode를 통해 뒤로가기 등이 가능함
    mode : 'history',
    routes : [{
        path : '/',
        name : 'iMain',
        component : main,
        props : true //$route.params -> props
    },
    {
        //경로에는 가능한 name을 붙여주기
        path : '/form',
        name : 'form',
        component : form,
        props : true
    },
    
    {
        path : 'product/:id',
        name : 'id',
        component : product,
        props : true,
        chlidren : [
            {
                path : 'edit',
                //-> /product/1/edit -> 단독으로 edit으로 들어갈 수는 없음
                //상대경로라 생각하면 됨
                name : 'edit',
                component : editProduct,
                props : true
            }
        ]
    },
    {
        path : '*',
        redirect : '/'
    }]
})