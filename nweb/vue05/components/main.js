let template = `
<div>
    <my-header v-bind:cartItemCount="cartItemCount"></my-header>
    <main>
        <div class="row product" v-for="product in products">
            <div class="col-md-4">
                <!--상품 이미지 출력-->
                <figure>
                    <img v-bind:src="product.image">
                </figure>
            </div>
            <div class="col-md-4 col-expand">
                <router-link tag="h1" v-bind:to="{name:'id',params:{id:product.id}}">
                    {{product.title}}
                </router-link>
                <p v-html="product.description"></p>
                <p class="price">{{product.price | formatPrice}}</p>
            </div>
            <button class="btn btn-primary btn-lg"
            v-on:click="addToCart(product)" 
            v-show="canAddToCart(product)">장바구니 담기</button>
            <!--v-bind:disabled="!canAddToCart"-->
            <span class="inventory-message" v-if="(product.stock - cartCount(product.id)) ==0">품절!</span>
            <span class="inventory-message" v-else-if="(product.stock - cartCount(product.id)) > 2"> {{product.stock - cartCount(product.id)}}개 남았습니다!</span>
            <span class="inventory-message" v-else="">지금 구매하세요!</span>
            <div class="rating">
                <span v-for="n in 5" v-bind:class="{'rating-active':checkRating(n,product)}">☆</span>
            </div>
        </div>
    </main>
</div>`

import myHeader from './header.js'

export default {
    name : 'iMain',
    template : template,
    data : function(){
        return {
            products : [],
            cart : []
        }
    },
    computed : {
        cartItemCount : function(){
            return this.cart.length;
        }
    },
    components : {
        myHeader
    },
    filters : { //원하는 것만 뿌려줌
        formatPrice : function(price){
            //처리하려는 데이터가 숫자인지
            if(!parseInt(price)){return '';}
            if(price > 99999){
                //$1,000 이상의 값
                //소수점 2자리 까지
                var priceString = (price/100).toFixed(2);
                var priceArray = priceString.split('').reverse();
                let index = 3;
                while(priceArray.length>index+3){
                    priceArray.splice(index+3,0,',');
                    index+=4;
                }
                return '$' + priceArray.reverse().join('');
            }else{
                return '$' + (price/100).toFixed(2);
            }
        }
    },
    methods:{
        addToCart : function(product){
            this.cart.push(product.id);
        },
        checkRating : function(n,product){
            return (product.rating - n)>=0;
        },
        canAddToCart : function(product){
            return this.cartCount(product.id) < product.stock;
        },
        cartCount : function(productId){
            let count = 0;
            for(let i =0;i<this.cart.length;i++){
                if(this.cart[i] == productId){
                    count++;
                }
            }
            return count;
        }
    },
    created : function(){
        //vue instance가 생성되고 나서 벌어지는 일련의 작업들을 function 형태로
        //여기서 데이터 가져올 수 있게
        //json 파일에서 데이터를 읽어오고 console 출력
        
        fetch('/vue05/products.json')
        .then(response => {return response.json();})
        .then(data => {
            console.log(data);
            this.products = data.products;
        }).catch(err => console.log(arr));
        

    }
}