<template>
  <div class="recommend" v-loading:[loadingText]="loading">
    <!-- BScroll滚动区域 -->
    <scroll class="recommend-content">
      <div>
        <!-- 轮播图 -->
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders"></slider>
          </div>
        </div>
        <!-- 热门推荐列表 -->
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="item in albums" :key="item.id">
              <div class="icon">
                <img v-lazy="item.pic" alt="" />
              </div>
              <div class="text">
                <h2 class="name">{{ item.username }}</h2>
                <p class="title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from '@/components/base/slider/Slider'
import Scroll from '@/components/base/scroll/Scroll'

import { getRecommend } from '@/service/recommend'

export default {
  name: 'Recommend',
  components: {
    Slider,
    Scroll
  },
  data() {
    return {
      sliders: [],
      albums: [],
      loadingText: '正在载入...'
    }
  },
  computed: {
    loading() {
      // 如果这两个数据都没有
      return !this.sliders.length && !this.albums.length
    }
  },
  async created() {
    const result = await getRecommend()
    // console.log(result)
    // 获取轮播图数据
    this.sliders = result.sliders
    // 获取热门推荐列表数据
    this.albums = result.albums
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  position: fixed;
  top: 88px;
  bottom: 0;
  overflow: scroll; //浏览器原生滚动

  .recommend-content {
    height: 100%;
    overflow: hidden;
  }

  .slider-wrapper {
    width: 100%;
    position: relative;
    height: 0;
    padding-top: 40%;
    overflow: hidden;

    .slider-content {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }

    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;

        img {
          width: 60px;
          height: 60px;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }

      .name {
        margin-bottom: 19px;
        color: $color-text;
      }

      .title {
        color: $color-text-d;
      }
    }
  }
}
</style>
