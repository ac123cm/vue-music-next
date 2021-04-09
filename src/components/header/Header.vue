<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">音乐</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  font-size: 0;
  text-align: center;
  color: $color-theme;

  .icon {
    width: 30px;
    height: 32px;
    margin-top: 6px;
    margin-right: 9px;
    display: inline-block;
    vertical-align: top;
    @include bg-image('logo');
    background-size: 30px 32px;
  }

  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>
