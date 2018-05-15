<template>
  <div id="app">
    <!-- 当前路由地址对应的组件   然后去找router中的index。js -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
