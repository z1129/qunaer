<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe602;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">三亚<span class="iconfont arrow-icon">&#xe695;</span></div>
    </div>
</template>

<script>
    
    export default{
        name:"HomeHeader"
    }

</script>
<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        display: flex
        line-height: .86rem
        background : $bgColor
        color : #ffffff
        .header-left
            float: left
            width : .64rem
            .back-icon
                font-size :.4rem
                text-align:center
        .header-input
            flex:1
            background :#fff
            height:.64rem
            line-height:.64rem
            margin-top :.12rem
            margin-left :.2rem
            padding-left : .2rem
            border-radius:.1rem
            color:#ccc
        .header-right
            float :right
            width :1.24rem
            text-align :center
            .arrow-icon
                font-size :.24rem
                margin-left:.06rem

</style>