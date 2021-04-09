<template>
  <div>
    <!-- 头部展示 -->
    <Header></Header>
    <!-- tab切换 -->
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Tab from '@/components/tab/Tab'

export default {
  name: 'App',
  components: {
    Header,
    Tab
  }
}
</script>

<style lang="scss"></style>
