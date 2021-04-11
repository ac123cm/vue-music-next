<template>
  <div class="music-list">
    <!-- 歌曲上方内容（返回按钮、歌手标题名字、歌手背景图片 -->
    <div class="back" @click="goBack">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">{{ title }}</h1>
    <div class="bg-image" :style="bgImageStyle" ref="bgImage">
      <div class="filter"></div>
    </div>
    <!-- 歌曲列表 -->
    <scroll class="list" :style="scrollStyle" v-loading="loading">
      <div class="song-list-wrapper">
        <song-list :songs="songs"></song-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/base/scroll/Scroll'
import SongList from '@/components/base/song-list/SongList'

export default {
  name: 'MusicList',
  components: {
    Scroll,
    SongList
  },
  props: {
    songs: {
      type: Array,
      default() {
        return []
      }
    },
    title: String,
    pic: String,
    loading: Boolean
  },
  data() {
    return {
      imageHeight: 0
    }
  },
  computed: {
    bgImageStyle() {
      return {
        backgroundImage: `url(${this.pic})`
      }
    },
    scrollStyle() {
      return {
        top: `${this.imageHeight}px`
      }
    }
  },
  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.music-list {
  position: relative;
  height: 100%;

  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 20;
    transform: translateZ(2px);

    icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }

  .title {
    width: 80%;
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 20;
    transform: translateZ(2px);
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: $font-size-large;
    color: $color-text;
  }

  .bg-image {
    position: relative;
    width: 100%;
    height: 263px; // 先给图片设置下高度，动态获取高度失效，暂时不知道怎么回事
    transform-origin: top;
    background-size: cover;

    .filter {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(7, 17, 27, 0.4);
    }
  }

  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 0;
    .song-list-wrapper {
      padding: 20px 30px;
      background: $color-background;
    }
  }
}
</style>
