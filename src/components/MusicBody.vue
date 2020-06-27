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
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">1</div>
                              <div class="list_name">不安理智</div>
                              <div class="list_singer">网络歌手</div>
                              <div class="list_time">03：41</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">2</div>
                              <div class="list_name">安河桥间奏</div>
                              <div class="list_singer">胡洋</div>
                              <div class="list_time">01：01</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">3</div>
                              <div class="list_name">庐州月</div>
                              <div class="list_singer">许嵩</div>
                              <div class="list_time">03：41</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">3</div>
                              <div class="list_name">庐州月</div>
                              <div class="list_singer">许嵩</div>
                              <div class="list_time">03：41</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">3</div>
                              <div class="list_name">庐州月</div>
                              <div class="list_singer">许嵩</div>
                              <div class="list_time">03：41</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">3</div>
                              <div class="list_name">庐州月</div>
                              <div class="list_singer">许嵩</div>
                              <div class="list_time">03：41</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">3</div>
                              <div class="list_name">庐州月</div>
                              <div class="list_singer">许嵩</div>
                              <div class="list_time">03：41</div>
                            </li>
                            <i class="player_songlist__line"></i>
                            <li class="list_music">
                              <div class="list_check"><i></i></div>
                              <div class="list_number">3</div>
                              <div class="list_name">庐州月</div>
                              <div class="list_singer">许嵩</div>
                              <div class="list_time">03：41</div>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <div class="content_right">
                      <div class="song_info">
                        <a href="javascirpt:;" class="song_info__cover js_album" data-stat="y_new.player.info_area.albumpic">
                          <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002CJON012PxwU.jpg?max_age=2592000" id="song_pic" alt="" class="song_info__pic" title="" style="">
                        </a>
                        <div class="song_info__name" id="song_name">歌曲名：<a href="https://y.qq.com/n/yqq/song/001LuLtP1LqITK.html#stat=y_new.player.info_area.songname" title="庐州月" target="_blank">庐州月</a></div>
                        <div class="song_info__singer" id="singer_name">歌手名：<a href="https://y.qq.com/n/yqq/singer/000CK5xN3yZDJt.html#stat=y_new.player.info_area.singername" title="许嵩" class="js_singer" rel="noopener nofollow" target="_blank">许嵩</a></div>
                        <div class="song_info__album" id="album_name">专辑名：<a href="https://y.qq.com/n/yqq/album/002CJON012PxwU.html#stat=y_new.player.info_area.albumname" title="寻雾启示" target="_blank">寻雾启示</a></div>
                      </div>
                      <div class="song_lyric">
                        <li class="song_lyric_cur">儿时凿壁偷了谁家的光</li>
                        <li>宿昔不梳一苦十年寒窗</li>
                        <li>如今等下闲读 红袖添香</li>
                      </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted: function () {
    $('.content_list').delegate('.list_check', 'click', function () {
      $(this).toggleClass('list_checked')
    })
  }
}

</script>

<style lang='sass' scoped>
$green-color: #31c27c
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
            margin-left: 15px
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
            height: 420px
            overflow: auto
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
              text-align: right
              padding-right: 8px
            .list_name
              width: 50%
              height: 100%
            .list_singer
              width: 20%
              height: 100%
            .list_time
              width: 100px
              height: 100%
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
