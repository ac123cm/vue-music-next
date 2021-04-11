<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic"></music-list>
  </div>
</template>

<script>
import MusicList from '@/components/music-list/MusicList'
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'

export default {
  name: 'SingerDetail',
  components: {
    MusicList
  },
  props: {
    singer: Object
  },
  data() {
    return {
      songs: [],
      loading: true
    }
  },
  computed: {
    pic() {
      return this.singer && this.singer.pic
    },
    title() {
      return this.singer && this.singer.name
    }
  },

  async created() {
    const result = await getSingerDetail(this.singer) // 歌手详情页歌曲列表
    this.songs = await processSongs(result.songs) // 歌手歌曲
    // 一开始是加载中，加载完数据这个loading为false
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: $color-background;
}
</style>
