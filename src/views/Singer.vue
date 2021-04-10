<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers"></index-list>
  </div>
</template>

<script>
import IndexList from '@/components/base/indexList/IndexList'

import { getSingerList } from '@/service/singer'

export default {
  name: 'Singer',
  components: {
    IndexList
  },
  data() {
    return {
      singers: []
    }
  },
  async created() {
    const result = await getSingerList()
    // console.log(result)
    // 获取歌手列表数据
    this.singers = result.singers
  }
}
</script>

<style lang="scss" scoped>
.singer {
  width: 100%;
  position: fixed;
  top: 88px;
  bottom: 0;
}
</style>
