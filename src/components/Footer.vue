<template>
  <div class="player_ft">
        <div class="player_ft_in">
            <a href="javascript:;" class="music_pre"></a>
            <a href="javascript:;" class="music_play"></a>
            <a href="javascript:;" class="music_next"></a>
            <div class="music_progress_info">
                <div class="music_progress_top">
                    <span class="music_progress_name">断桥残雪/许嵩</span>
                    <span class="music_progress_time">00:00/05:23</span>
                </div>
                <div class="music_progress_bar">
                    <div class="music_progress_line">
                        <div class="music_progress_dot"></div>
                    </div>
                </div>
            </div>
            <a href="javascript:;" class="music_mode"></a>
            <a href="javascript:;" class="music_fav"></a>
            <a href="javascript:;" class="music_down"></a>
            <a href="javascript:;" class="music_comment"></a>
            <a href="javascript:;" class="music_only"></a>
            <div class="music_voice_info">
            <a href="javascript:;" class="music_voice_icon"></a>
            <div class="music_voice_bar">
                <div class="music_voice_line">
                    <div class="music_voice_dot"></div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  methods: {
    initFooterEvents () {
      var $musicPlay = $('.music_play')
      if (this.$store.playstate) {
        // 当前子菜单的播放按钮是播放状态
        $musicPlay.addClass('music_play2')
      }
    },
    // 切换播放和暂停供子组件使用
    togglePlay (play) {
      var $musicPlay = $('.music_play')
      if (play) {
        $musicPlay.addClass('music_play2')
      } else {
        $musicPlay.removeClass('music_play2')
      }
    }
  },
  mounted: function () {
    // 订阅消息
    PubSub.subscribe('togglePlay', (msg, index) => {
      this.togglePlay(index)
    })
    // 初始化
    $('.music_play').removeClass('music_play2')
    // 监听底部播放按钮的点击
    $('.music_play').click(function () {
      PubSub.publish('togglePlayBody', true)
    //   $('.music_play').toggleClass('music_play2')
    })
  }
}
</script>

<style lang='sass' scoped>
.player_ft
    width: 100%
    height: 80px
    position: absolute
    left: 0
    bottom: 0
    .player_ft_in
        width: 1300px
        height: 100%
        margin: 0 auto
        -webkit-user-select: none
        // background-color: #69EE11
        a
            display: inline-block
            text-decoration: none
            color: #fff
            margin-right: 15px
            background: url("../assets/player.png") no-repeat 0 -30px
        .music_pre
            width: 19px
            height: 20px
            background-position: 0 -30px
            margin-right: 30px
            vertical-align: -5px
        .music_play
            width: 21px
            height: 29px
            background-position: 0 0
            vertical-align: -8px
            margin-right: 30px
        .music_play2
            background-position: -30px 0
        .music_next
            width: 19px
            height: 20px
            background-position: 0 -52px
            vertical-align: -5px
        .music_mode
            width: 26px
            height: 25px
            background-position: 0 -205px
            margin-left: 25px
            vertical-align: -8px
        .music_mode2
            width: 23px
            height: 20px
            background-position: 0 -260px
        .music_mode3
            width: 25px
            height: 19px
            background-position: 0 -74px
        .music_mode4
            width: 23px
            height: 20px
            background-position: 0 -232px
        .music_fav
            width: 24px
            height: 21px
            background-position: 0 -96px
            vertical-align: -8px
        .music_fav2
            background-position: -30px -96px
        .music_down
            width: 22px
            height: 21px
            background-position: 0 -120px
            vertical-align: -8px
        .music_comment
            width: 24px
            height: 24px
            background-position: 0 -400px
            vertical-align: -8px
        .music_only
            width: 74px
            height: 27px
            background-position: 0 -281px
            vertical-align: -8px
        .music_only2
            background-position: 0 -310px
        .music_progress_info
            display: inline-block
            width: 720px
            height: 40px
            position: relative
            top: 10px
            margin-left: 20px
            .music_progress_top
                width: 100%
                height: 30px
                line-height: 30px
                color: #fff
                .music_progress_name
                    float: left
                    opacity: 0.5
                    &:hover
                        opacity: 1
                .music_progress_time
                    float: right
                    opacity: 0.7
            .music_progress_bar
                width: 100%
                height: 4px
                background: rgba(255, 255, 255, 0.5)
                margin-top: 5px
                position: relative
                .music_progress_line
                    width: 100px
                    height: 100%
                    background: #fff
                    .music_progress_dot
                        width: 14px
                        height: 14px
                        border-radius: 50%
                        background: #fff
                        position: absolute
                        top: -5px
                        left: 100px
        .music_voice_info
            display: inline-block;
            width: 100px
            height: 40px
            line-height: 40px
            position: relative
            top: 15px
            .music_voice_icon
                width: 26px
                height: 21px
                background-position: 0 -144px
                position: absolute
                left: 0
                top: 10px
            .music_voice_icon2
                background-position: 0 -182px
            .music_voice_bar
                width: 70px
                height: 4px
                background: rgba(255,255,255,0.5)
                position: absolute
                right: 0
                top: 18px
                display: inline-block
                .music_voice_line
                    width: 70px
                    height: 100%
                    background: #fff
                .music_voice_dot
                    width: 14px
                    height: 14px
                    border-radius: 50%
                    background: #fff
                    position: relative
                    top: -5px
                    left: 70px
</style>
