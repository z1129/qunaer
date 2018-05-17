<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of  pages" :key="index">
                <div class="icon" v-for="item of page" :key ="item.id">
                    <div class="icon-img">
                        <img class = "icon-img-content" :src ="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return {
            iconList:[
                {
                    id:'0001',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0002',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0003',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0004',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0005',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0006',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0007',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0008',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0009',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                },
                {
                    id:'0010',
                    imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                    desc:"热门景点"
                }
            ]
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                } 
                pages[page].push(item);
                
            })
            return pages
        }
    }
}
</script>

<style lang = "stylus" scoped>
.icons >>> .swiper-container-horizontal
    height:0
    padding-bottom:50%
    .icon 
        position :relative
        overflow :hidden
        float:left
        width:25%
        padding-bottom:25%
        .icon-img
            position :absolute
            top:0
            bottom :0.44rem
            left :0
            right:0
            box-sizing :border-box
            padding:.1rem
            .icon-img-content
                height:100%
                display :block
                margin :0 auto
        .icon-desc
            position:absolute
            left :0
            right:0
            bottom:0
            height :.44rem
            line-height :.44rem
            text-align :center
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis


</style>
