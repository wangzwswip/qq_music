<template>
  <div class="player_bd">
    <div class="player_normal">
        <div class="content">
            <div class="content_left">
                <div class="mod_songlist_toolbar">
                    <a href="javascript:;" class="mod_btn js_all_like" ><i class="mod_btn_green__icon_like"></i>收藏<span class="mod_btn__border"></span></a>
                    <a href="javascript:;" class="mod_btn js_all_fav"><i class="mod_btn_green__icon_add"></i>添加到<span class="mod_btn__border"></span></a>
                    <a href="javascript:;" class="mod_btn js_all_down"><i class="mod_btn_green__icon_down"></i>下载<span class="mod_btn__border"></span></a>
                    <a href="javascript:;" class="mod_btn js_all_delete"><i class="mod_btn_green__icon_delete"></i>删除<span class="mod_btn__border"></span></a>
                    <a href="javascript:;" class="mod_btn js_all_deleted"><i class="mod_btn_green__icon_clear"></i>清空列表<span class="mod_btn__border"></span></a>
                </div>
                <div class="content_list">
                  <ul>
                    <i class="player_songlist__line"></i>
                    <li class="list_title">
                      <div class="list_check"><i></i></div>
                      <div class="list_number"></div>
                      <div class="list_name">歌曲</div>
                      <div class="list_singer">歌手</div>
                      <div class="list_time">时长</div>
                    </li>
                    <i class="player_songlist__line"></i>
                    <!-- <li class="list_music">
                      <div class="list_check"><i></i></div>
                      <div class="list_number list_number2">1</div>
                      <div class="list_name">
                        不安理智
                        <div class="list_menu">
                          <a href="javascript:;" title="播放" class="list_menu_play"></a>
                          <a href="javascript:;" title="添加到歌单"></a>
                          <a href="javascript:;" title="下载"></a>
                          <a href="javascript:;" title="分享"></a>
                        </div>
                      </div>
                      <div class="list_singer">网络歌手</div>
                      <div class="list_time">
                        <span>03：41</span>
                        <a href="javascript:;" title="删除" class="list_menu_del"></a>
                      </div>
                    </li> -->
                  </ul>
                </div>
            </div>
            <div class="content_right">
              <div class="song_info">
                <a href="javascirpt:;" class="song_info__cover js_album">
                  <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002CJON012PxwU.jpg?max_age=2592000" id="song_pic" alt="" class="song_info__pic" title="" style="">
                </a>
                <div class="song_info__name" id="song_name">歌曲名：<a href="javascrpt:;" title="庐州月" target="_blank">庐州月</a></div>
                <div class="song_info__singer" id="singer_name">歌手名：<a href="javascrpt:;" title="许嵩" class="js_singer" rel="noopener nofollow" target="_blank">许嵩</a></div>
                <div class="song_info__album" id="album_name">专辑名：<a href="javascrpt:;" title="寻雾启示" target="_blank">寻雾启示</a></div>
              </div>
              <div class="song_lyric">
                <li class="song_lyric_cur">儿时凿壁偷了谁家的光</li>
                <li>宿昔不梳一苦十年寒窗</li>
                <li>如今等下闲读 红袖添香</li>
              </div>
            </div>
        </div>
    </div>
    <audio></audio>
  </div>
</template>

<script>
import $ from 'jquery'
import PubSub from 'pubsub-js'
// import Player from '../utils/player.js'
export default {
  props: {
    userInfo: {
      required: true
    }
  },
  data () {
    return {
      // 用户歌单信息
      listInfo: [], // name: '',id: '',description: null,tags: []
      // 歌单歌曲信息列表
      songInfo: [], // name id description tags
      // 当前播放音乐索引
      currentIndexCopy: -1
    }
  },
  methods: {
    // 请求用户歌单
    async requireList () {
      var tepId = document.cookie.split(';')[1].split('=')[1]
      var url = '/user/playlist?uid=' + tepId
      const {data: res} = await this.$http.get(url)
      var tepInfo = {}
      var listInfo = this.listInfo
      if (res.code !== 200) {
        this.$message.error('获取歌单失败')
      } else {
        this.$message.success('获取歌单成功')
        const {playlist: playlists} = res
        $.each(playlists, function (index, ele) {
          if (!ele.subscribed) {
            tepInfo.name = ele.name
            tepInfo.id = ele.id
            tepInfo.description = ele.description
            tepInfo.tags = ele.tags
            listInfo.push(tepInfo)
          }
          tepInfo = {}
        })
        this.listInfo = listInfo
        this.requireListId()
      }
    },
    // 请求歌单对应歌曲id
    async requireListId () {
      // console.log(player.musicList)
      var songInfo = this.songInfo
      var soninfotmp = {}
      var tmpsinger = ''
      const {data: res} = await this.$http.get('playlist/detail?id=' + this.listInfo[0].id)
      if (res.code !== 200) {
        this.$message.error('获取歌单id失败')
      } else {
        const {playlist: playlists} = res
        const {tracks: trackss} = playlists
        $.each(trackss, function (index, ele) {
          soninfotmp.name = ele.name
          soninfotmp.id = ele.id
          soninfotmp.album = ele.al.name
          soninfotmp.cover = ele.al.picUrl
          soninfotmp.time = Math.round(ele.dt / 1000)
          $.each(ele.ar, function (index, eles) {
            if (index === 0) {
              tmpsinger = tmpsinger + eles.name
            } else {
              tmpsinger = tmpsinger + '/' + eles.name
            }
          })
          soninfotmp.singer = tmpsinger
          songInfo.push(soninfotmp)
          tmpsinger = ''
          soninfotmp = {}
        })
        // eslint-disable-next-line no-undef
        this.player.musicList = songInfo
        // console.log(player.musicList)
        // console.log(this.songInfo)
        this.creatList()
        this.initMusicInfo(songInfo[0])
      }
      this.initEvents()
      // this.addSongUrl()
    },
    // 加载歌曲URL
    // async addSongUrl () {
    //   // var $this = this
    //   $.each(this.songInfo, function (index, ele) {
    //     console.log(ele.id)
    //     // console.log($this.$http.get('playlist/url?id=' + ele.id))
    //   })
    // },
    // 处理时间
    formatTime (time) {
      var Min = parseInt(time / 60)
      var Sec = parseInt(time % 60)
      if (Min < 10) {
        Min = '0' + Min
      }
      if (Sec < 10) {
        Sec = '0' + Sec
      }
      return Min + ':' + Sec
    },
    // 创建列表
    creatList () {
      var $musicList = $('.content_list ul')
      var $this = this
      $.each(this.songInfo, function (index, ele) {
        ele.time = $this.formatTime(ele.time)
        var $item = $this.creatMusicItem(index, ele)
        $musicList.append($item)
        // console.log(Object.keys($item.get(0)))
      })
    },
    // 创建一条音乐
    creatMusicItem (index, music) {
      var $item = $('<i class="player_songlist__line"></i>\n' +
      '<li class="list_music">\n' +
        '<div class="list_check"><i></i></div>\n' +
        '<div class="list_number">' + (index + 1) + '</div>\n' +
        '<div class="list_name">' + '<span>' + music.name + '</span>' +
            '<div class="list_menu">\n' +
                '<a href= "javascript:;" title="播放" class="list_menu_play"></a>\n' +
                '<a href="javascript:;" title="添加"></a>\n' +
                '<a href="javascript:;" title="下载"></a>\n' +
                '<a href="javascript:;" title="分享"></a>\n' +
            '</div>\n' +
        '</div>\n' +
        '<div class="list_singer">' + '<span>' + music.singer + '</span>' + '</div>\n' +
        '<div class="list_time">\n' +
            '<span>' + music.time + '</span>\n' +
            "<a href=\"javascript:;\" title=\"删除\" class='list_menu_del'></a>\n" +
        '</div>\n' +
      '</li>')
      $item.get(2).index = index
      $item.get(2).music = music
      // 这里索引2才是li
      return $item
    },
    // 根据歌曲id请求详细信息
    requireSongInfo () {
      this.$http.get()
    },
    // 初始化歌曲信息
    initMusicInfo (music) {
      var $musicImage = $('.song_info__cover img')
      var $musicName = $('.song_info__name a')
      var $musicSinger = $('.song_info__singer a')
      var $musicAlbum = $('.song_info__album a')

      // 给取到的元素赋值
      $musicImage.attr('src', music.cover)
      $musicName.attr('title', music.name)
      $musicName.text(music.name)
      $musicSinger.attr('title', music.singer)
      $musicSinger.text(music.singer)
      $musicAlbum.attr('title', music.album)
      $musicAlbum.text(music.album)

      // 发布消息
      PubSub.publish('toggleFooterSong', music)
      PubSub.publish('toggleBackground', music.cover)
    },
    // 监听鼠标移入歌曲列表事件
    initEvents () {
      var $this = this
      $('.content_list').on('mouseenter', '.list_music', function () {
        // 显示子菜单
        $(this).find('.list_menu').stop().fadeIn(100)
        $(this).find('.list_time a').stop().fadeIn(100)
        // 隐藏时长
        $(this).find('.list_time span').stop().fadeOut(100)
      })
      $('.content_list').on('mouseleave', '.list_music', function () {
        // 显示子菜单
        $(this).find('.list_menu').stop().fadeOut(100)
        $(this).find('.list_time a').stop().fadeOut(100)
        // 隐藏时长
        $(this).find('.list_time span').stop().fadeIn(100)
      })
      // 2.监听鼠标点击复选框事件
      $('.content_list').delegate('.list_check ', 'click', function () {
        $(this).toggleClass('list_checked')
      })
      // 3.添加子菜单播放按钮的点击
      // var $musicPlay = $('.music_play')
      $('.content_list').on('click', '.list_menu_play', function () {
        var $item = $(this).parents('.list_music')
        // console.log($item.get(0).music) 这里索引1
        // console.log($item.get(0).index)
        // 3.1 切换播放图标
        $(this).toggleClass('list_menu_play2')
        // 3.2 复原其他的播放图标
        $(this).parents('.list_music').siblings().find('.list_menu_play').removeClass('list_menu_play2')
        // 3.3 修改播放状态码
        if ($(this).attr('class').indexOf('list_menu_play2') !== -1) {
          // 当前子菜单的播放按钮是播放状态
          $this.$store.commit('songPlay')
          // 让文字高亮
          $item.find('div').css('color', '#fff')
          $item.siblings().find('div').css('color', 'rgba(255,255,255,0.5)')
          // 发布消息
          PubSub.publish('togglePlay', true)
        } else {
          // 当前子菜单的播放按钮不是播放状态
          PubSub.publish('togglePlay', false)
          // 让文字不高亮
          $item.find('div').css('color', 'rgba(255,255,255,0.5)')
        }
        // 3.4 切换序号状态
        $item.find('.list_number').toggleClass('list_number2')
        $item.siblings().find('.list_number').removeClass('list_number2')
        // 3.5 播放音乐
        $this.player.playMusic($item.get(0).index, $item.get(0).music)
        if (!($this.currentIndexCopy === $item.get(0).index)) {
          // 3.6 切换歌曲信息
          $this.initMusicInfo($item.get(0).music)
          console.log('该切换歌曲啦')
        }
        $this.currentIndexCopy = $item.get(0).index
        console.log($this.currentIndexCopy, $item.get(0).index)
        // 3.6 切换歌曲信息
        // $this.initMusicInfo($item.get(0).music)
      })
      // 7 监听删除按钮的点击
      $('.content_list').on('click', '.list_menu_del', function () {
        // 找到被点击的音乐
        var $item = $(this).parents('.list_music')
        // 判断当前删除的音乐是否正在播放
        // eslint-disable-next-line eqeqeq
        if ($item.get(0).index == $this.player.currentIndex) {
          $('.list_music').eq($this.player.nextIndex()).find('.list_menu_play').trigger('click')
        }
        $item.remove()
        $this.player.changeMusic($item.get(0).index)
        // 重新排序
        $('.list_music').each(function (index, ele) {
          ele.index = index
          $(ele).find('.list_number').text(index + 1)
        })
      })
      // 8.监听播放的进度
      $this.player.musicTimeUpdate(function (data) {
        // 同步播放的时间
        PubSub.publish('toggleFooterTime', data)
      })
    },
    // 供footer切换播放用
    togglePlayBody (play) {
      // console.log('来自toggle的')
      // console.log(this.player.currentIndex)
      // console.log(this.player)
      // eslint-disable-next-line eqeqeq
      if (this.player.currentIndex == -1) {
        $('.list_music').eq(0).find('.list_menu_play').trigger('click')
      } else {
        $('.list_music').eq(this.player.currentIndex).find('.list_menu_play').trigger('click')
      }
    },
    togglePreBody () {
      $('.list_music').eq(this.player.preIndex()).find('.list_menu_play').trigger('click')
    },
    toggleNextBody () {
      $('.list_music').eq(this.player.nextIndex()).find('.list_menu_play').trigger('click')
    }
  },
  mounted: function () {
    // 监听鼠标在歌曲列表行为
    const $audio = $('audio')
    this.player = new this.$Player($audio)
    this.requireList()
    // this.initEvents()
    // 初始化事件监听
    // console.log(this.$store.state.playState)
    // 订阅消息
    PubSub.subscribe('togglePlayBody', (msg, index) => {
      this.togglePlayBody(index)
    })
    PubSub.subscribe('togglePreBody', (msg, index) => {
      this.togglePreBody()
    })
    PubSub.subscribe('toggleNextBody', (msg, index) => {
      this.toggleNextBody()
    })
  }
}

</script>

<style lang='sass'>
$green-color: #31c27c
.el-scrollbar__wrap
  overflow-x: hidden
.player_bd
  width: 100%
  height: 550px // 460px
  .content
    width: 1300px
    height: 500px
    margin: 0 auto
    font-size: 14px
    .content_left
      width: 861px
      height: 100%
      float: left
      padding-top: 20px
      li
        list-style: none
        width: 100%
        height: 50px
        box-sizing: border-box
        -webkit-user-select: none
      .player_songlist__line
        display: block
        width: 100%
        height: 1px
        background-color: rgba(255, 255, 255, 0.3)
      .mod_songlist_toolbar
        position: relative
        margin-bottom: 20px
        display: block
        width: 100%
        height: 40px
        // margin-left: 20px
        box-sizing: border-box
        a
          border: 1px solid #fff
          display: inline-block
          width: 122px
          height: 100%
          border-radius: 5px
          color: #fff
          opacity: 0.5
          text-align: center
          line-height: 40px
          text-decoration: none
          &:hover
            opacity: 1.0
      .content_list
        width: 100%
        height: 420px
        overflow: auto
        ul
          padding: 0
          li
          // display: inline-block
          list-style: none
          width: 100%
          height: 50px
          box-sizing: border-box
          -webkit-user-select: none
          div
            float: left
            color: rgba(255, 255, 255, 0.5)
            line-height: 50px
        .list_check
          width: 50px
          height: 100%
          text-align: center
          i
            width: 14px
            height: 14px
            border: 1px solid #fff
            display: inline-block
            opacity: 0.5
        .list_checked i
          background: url("../assets/icon_sprite.png") no-repeat -60px -80px
          opacity: 1
        .list_number
          width: 36px
          height: 100%
          color: rgba(255,255,255,0.5)
          // text-align: right
          // padding-right: 8px
        .list_number2
          color: transparent !important
          background: url("../assets/wave.gif") no-repeat 0 center
        .list_name
          width: 50%
          height: 100%
          overflow: hidden
          text-overflow: ellipsis
          // white-space:nowrap
          span
            display: inline-block
            max-width: 50%
            box-sizing: border-box
            // overflow: hidden
            // text-overflow: ellipsis
            // white-space:nowrap
          .list_menu
            margin-top: 5px
            float: right
            margin-right: 20px
            display: none
            a
              display: inline-block
              width: 36px
              height: 36px
              background: url("../assets/icon_list_menu.png") no-repeat 0 0
              opacity: 0.5
              &:hover
                opacity: 1
              &:nth-child(1)
                background-position: -120px 0
              &:nth-child(2)
                background-position: -120px -80px
              &:nth-child(3)
                background-position: -120px -120px
              &:nth-child(4)
                background-position: -120px -40px
            .list_menu_play2
              background-position: -80px -200px !important
        .list_singer
          width: 20%
          height: 100%
          max-width: 100%
          overflow: hidden
          text-overflow: ellipsis
          span
            display: inline-block
            max-width: 50%
            box-sizing: border-box
        .list_time
          width: 100px
          height: 100%
          a
            display: none
            width: 36px
            height: 36px
            background: url("../assets/icon_list_menu.png") no-repeat -120px -160px
            margin-top: 5px
            float: left
            opacity: 0.5
            &:hover
              opacity: 1
    .content_right
      float: right
      width: 400px
      height: 100%
      -webkit-user-select: none
      padding-top: 20px
      bordersi
      .song_info
        color: rgba(255, 255, 255, 0.7)
        text-align: center
        line-height: 30px
        a
          list-style: none
          color: rgba(255, 255, 255, 0.7)
          text-decoration: none
          &:hover
            color: rgba(255, 255, 255, 1)
        .song_info__cover
          display: inline-block
          width: 201px
          height: 180px
          text-align: left
          background: url(https://y.gtimg.cn/mediastyle/yqq/img/album_cover_player.png?max_age=2592000&v=23ea536d34facedf9ae4169d95b1056e) 0 0 no-repeat
          img
            width: 180px
            height: 180px
      .song_lyric
        text-align: center
        margin-top: 30px
        height: 150px
        overflow: hidden
        li
          list-style: none
          line-height: 30px
          font-weight: bold
          color: rgba(255, 255, 255, 0.5)
          cursor: -webkit-grab
        .song_lyric_cur
          color: $green-color
</style>
