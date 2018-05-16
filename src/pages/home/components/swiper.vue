<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for = "item of swiperList" :key = "item.id">
                <img class = "swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper" ,
    data (){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true
            },
            swiperList:[
                {id:1,imgUrl:"https://imgs.qunarzz.com/vc/18/9b/1b/2fea915c71f5981976721720ec.jpg_92.jpg"},
                {id:2,imgUrl:"https://imgs.qunarzz.com/vc/a3/61/71/7e6365a9a73427604e7e4eecee.jpg_92.jpg"}
            ]
        }
       
    }   
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active 
        background:#fff !important
    .wrapper
        width:100%
        height:0
        overflow :hidden
        padding-bottom:51.73%
        .swiper-img
            width:100%
</style>
