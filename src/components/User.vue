<template>
  <div class="main">
        <div class="top">
            <h1 class="player_logo"><a href="//y.qq.com/#stat=y_new.player.header.logo" onclick="setStatCookie&amp;&amp;setStatCookie();" rel="noopener" target="_blank"><img class="player_logo__pic" srcset="//y.gtimg.cn/mediastyle/yqq/img/player_logo@2x.png 2x" src="//y.gtimg.cn/mediastyle/yqq/img/player_logo.png" alt="QQ音乐"></a></h1>
            <div class="mod_player_login">
                <div class="player_login__guide">
                    QQ音乐，千万高品质曲库尽享
                    <a href="javascript:;" class="player_login__guide_btn js_floatLayer_download"><i class="fa fa-windows fa-1x" aria-hidden="true"></i>客户端下载</a>
                </div>
                <a class="player_login__link player_login__link--unlogin js_login" data-stat="y_new.player.header.login" href="javascript:;">
                <span class="player_login__txt">登录</span>
                </a>
                <a class="player_login__link player_login__link--set js_opts_unlogin" href="javascript:;"><span class="player_login__txt">设置</span></a>
            </div>
        </div>
        <MusicBody></MusicBody>
        <Footer/>
        <div class="mask_bg"></div>
        <div class="mask"></div>
    </div>
</template>

<script>
import MusicBody from '../components/MusicBody'
import Footer from '../components/Footer'
export default {
  components: {
    MusicBody,
    Footer
  }
}
</script>

<style lang='sass' scoped>
$green-color: #31c27c
*
    margin: 0
    padding: 0
.main
    width: 100%
    height: 100%
    font-size: 14px
    line-height: 1.5
.top
    width: 100%
    height: 45px
    font-size: 14px
    line-height: 1.5
    position: relative
    a
        text-decoration: none
        color: rgb(255, 255, 255)
        opacity: 1
    .player_logo
        float: left
        margin-left: 20px
        color: rgb(255, 255, 255)
        opacity: 0.5
        &:hover
            opacity: 1
    .mod_player_login
        position: absolute
        top: 50%
        transform: translateY(-50%)
        right: 10px
        line-height: 35px
        color: rgb(255, 255, 255)
        .player_login__guide
            display: inline-block
            margin-right: 26px
            a
                margin-left: 10px
                opacity: 1
                font-size: 15px
                background-color: $green-color
                border-radius: 28px
                padding: 0 17px
                height: 30px
                display: inline-block
                line-height: 30px
                &:hover
                    background-color: rgb(44, 175, 111)
        a
            margin-right: 10px
            opacity: 0.5
            &:hover
                opacity: 1
.mask_bg
    position: absolute
    left: 0
    top: 0
    z-index: -2
    width: 100%
    height: 100%
    background: url("https://y.gtimg.cn/music/photo_new/T002R300x300M000002CJON012PxwU.jpg?max_age=2592000") no-repeat 0 0
    background-size: cover
    filter: blur(100px)
.mask
    position: absolute
    left: 0
    top: 0
    z-index: -1
    width: 100%
    height: 100%
    background: rgba(0,0,0,0.35)
</style>
