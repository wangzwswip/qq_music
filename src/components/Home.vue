<template>
  <div class="home">
    <!-- <button v-on:click="linkto">我的音乐</button> -->
    <!-- <router-link target="_blank" :to="{path:'/user',query:{id:'1'}}">新页面打开我的音乐</router-link> -->
    <!-- 头部 -->
    <div class="mod_header">
      <div class="section_inner">
        <h1 class="qqmusic_title">
          <a href="javascript:">
            <img
              srcset="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x"
              src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1"
              alt="QQ音乐"
              class="qqmusic_logo"
            />
          </a>
        </h1>
        <!-- 导航s -->
        <ul class="mod_top_nav">
          <li class="top_nav__item">
            <a href="//y.qq.com" class="top_nav__link top_nav__link--current" title="音乐馆">音乐馆</a>
          </li>
          <li class="top_nav__item">
            <a href="/portal/profile.html" class="top_nav__link" title="我的音乐">我的音乐</a>
          </li>
          <li class="top_nav__item top_nav__item--subnav">
            <a
              href="//y.qq.com/download/index.html"
              class="top_nav__link js_toDownload"
              title="客户端"
              rel="noopener"
              target="_blank"
            >客户端</a>
          </li>
          <li class="top_nav__item">
            <a
              href="//y.qq.com/artists"
              data-stat="y_new.top.artists"
              class="top_nav__link js_nav_click"
              title="开放平台"
              rel="noopener"
              target="_blank"
            >开放平台</a>
          </li>
          <li class="top_nav__item">
            <a
              href="//y.qq.com/portal/vipportal/index.html"
              class="top_nav__link"
              title="VIP"
              rel="noopener"
              target="_blank"
            >VIP</a>
          </li>
        </ul>
        <ul class="mod_top_subnav" style="display:;">
          <li class="top_subnav__item">
            <a href="//y.qq.com" class="top_subnav__link top_subnav__link--current">首页</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/singer_list.html" class="top_subnav__link">歌手</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/album_lib.html" class="top_subnav__link">新碟</a>
          </li>
          <li class="top_subnav__item">
            <a href="/n/yqq/toplist/4.html" class="top_subnav__link">排行榜</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/playlist.html" class="top_subnav__link">分类歌单</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/radio.html" class="top_subnav__link">电台</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/mv_lib.html#t6=2" class="top_subnav__link">MV</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/album_mall.html" class="top_subnav__link">数字专辑</a>
          </li>
          <li class="top_subnav__item">
            <a href="/portal/piao_wu.html" class="top_subnav__link">票务</a>
          </li>
        </ul>
        <!-- 导航E -->
        <div class="mod_top_search">
          <div class="mod_search_input">
            <input
              class="search_input__input"
              aria-label="请输入搜索内容"
              type="text"
              placeholder="搜索音乐、MV、歌单、用户"
              accesskey="s"
            />
            <button class="search_input__btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="header_opt">
          <span class="mod_top_login">
            <a class="top_login__link" href="javascript:;" @click="login">登录</a>
            <a class="top_login_btn" href="javascript:;">开通绿钻豪华版</a>
            <a class="top_login_btn_vip" href="javascript:;">开通付费包</a>
          </span>
        </div>
      </div>
    </div>
    <!-- 热门歌单 -->
    <div class="mod_index">
      <div class="section_inner">
        <div class="index_hd">
          <h2>歌单推荐</h2>
        </div>
        <div class="mod_index_tab">
          <a href="javascript:;" class="index_tab__item index_tab__item--current">为你推荐</a>
          <a href="javascript:;" class="index_tab__item">经典</a>
          <a href="javascript:;" class="index_tab__item">网路歌曲</a>
          <a href="javascript:;" class="index_tab__item">情歌</a>
          <a href="javascript:;" class="index_tab__item">官方歌单</a>
          <a href="javascript:;" class="index_tab__item">KTV热歌</a>
        </div>
        <div class="mod_playlist">
          <ul class="playlist__list">
            <li class="playlist__item">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a
                    href="https://y.qq.com/n/yqq/playsquare/803727820.html#stat=y_new.index.playlist.pic"
                    class="js_playlist"
                  >
                    <img
                      src="//qpic.y.qq.com/music_cover/LMsiatzDGZputqVjsAcg4nQVdIsvXjSvCiaPfo9RaVqKXWBQHStibJpMA/300?n=1"
                      alt="减压良曲：前奏就能帮你赶走70%负能量！"
                      class="playlist__pic"
                    />
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a
                      href="https://y.qq.com/n/yqq/playsquare/803727820.html#stat=y_new.index.playlist.name"
                      class="js_playlist"
                    >减压良曲：前奏就能帮你赶走70%负能量！</a>
                  </span>
                </h4>
                <div class="playlist__other">播放量：4263.0万</div>
              </div>
            </li>
            <li
              class="playlist__item slide__item"
            >
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a
                    href="https://y.qq.com/n/yqq/playsquare/7577072818.html#stat=y_new.index.playlist.pic"
                    class="js_playlist"
                  >
                    <img
                      src="//qpic.y.qq.com/music_cover/QrmdXDG3R4jGSEzqu0qtRxlW4nUjoeKFSndFPQCYUFT4gEicwWpUtvQ/300?n=1"
                      alt="抖音热歌精选：共享宅家欢乐时光"
                      class="playlist__pic"
                    />
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a
                      href="https://y.qq.com/n/yqq/playsquare/7577072818.html#stat=y_new.index.playlist.name"
                      class="js_playlist"
                    >抖音热歌精选：共享宅家欢乐时光</a>
                  </span>
                </h4>
                <div class="playlist__other">播放量：650.8万</div>
              </div>
            </li>
            <li
              class="playlist__item slide__item"
            >
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a
                    href="https://y.qq.com/n/yqq/playsquare/7565079350.html#stat=y_new.index.playlist.pic"
                    class="js_playlist"
                  >
                    <img
                      src="//qpic.y.qq.com/music_cover/AhbCa0vazSRDjEJhYwthggmd6TYPkCqTVUnYpYY7ym4SJic5v9dqL8g/300?n=1"
                      alt="小阿七：童话般的治愈音"
                      class="playlist__pic"
                    />
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a
                      href="https://y.qq.com/n/yqq/playsquare/7565079350.html#stat=y_new.index.playlist.name"
                      class="js_playlist"
                    >小阿七：童话般的治愈音</a>
                  </span>
                </h4>
                <div class="playlist__other">播放量：27.7万</div>
              </div>
            </li>
            <li
              class="playlist__item slide__item"
            >
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a
                    href="https://y.qq.com/n/yqq/playsquare/3269006954.html#stat=y_new.index.playlist.pic"
                    class="js_playlist"
                  >
                    <img
                      src="//qpic.y.qq.com/music_cover/5BukrAsDEyicS7xzFSMyv6gdPJicq2T4ibo8BtNtVkvafnPJQN2eCVrzw/300?n=1"
                      alt="「欧美」100首经典英文歌"
                      class="playlist__pic"
                    />
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a
                      href="https://y.qq.com/n/yqq/playsquare/3269006954.html#stat=y_new.index.playlist.name"
                      class="js_playlist"
                    >「欧美」100首经典英文歌</a>
                  </span>
                </h4>
                <div class="playlist__other">播放量：982.3万</div>
              </div>
            </li>
            <li
              class="playlist__item slide__item"
            >
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a
                    href="https://y.qq.com/n/yqq/playsquare/861218535.html#stat=y_new.index.playlist.pic"
                    class="js_playlist"
                  >
                    <img
                      src="//qpic.y.qq.com/music_cover/Biax4WTSMic4N0bgPWDwUCsx1rlEp4KZOZQrPRJVvVXHsdc9rhPBGh9w/300?n=1"
                      alt="400位华语民谣歌手，一人一首入耳曲"
                      class="playlist__pic"
                    />
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a
                      href="https://y.qq.com/n/yqq/playsquare/861218535.html#stat=y_new.index.playlist.name"
                      class="js_playlist"
                    >400位华语民谣歌手，一人一首入耳曲</a>
                  </span>
                </h4>
                <div class="playlist__other">播放量：6349.8万</div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <div class="mod_index">
      <div class="section_inner">
        <div class="index_hd">
          <h2 class="index__tit">精彩推荐</h2>
        </div>
        <div class="mod_event mod_slid">
          <ul class="event_list slide_list">
            <li class="event_list__item slide__item">
              <a href="javascript:;" class="event_list__link js_focus_jump" data-type="10002" data-stat="y_new.index.focus.click" data-id="002ngBNv3dlht1" data-focusid="28578">
              <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2597019.jpg?max_age=2592000" class="event_list__pic" alt="其他 说唱听我的2" title="" style="outline: red dashed 1px;">
              </a>
            </li>
            <li class="event_list__item slide__item">
              <a href="javascript:;" class="event_list__link js_focus_jump" data-type="10002" data-stat="y_new.index.focus.click" data-id="000c1tAw1BKNkX" data-focusid="28533">
              <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2596808.jpg?max_age=2592000" class="event_list__pic" alt="【非绿钻非移动端】创造营第8期" title="" style="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="section_inner">
        <div class="footer_info">
          <div class="footer_download">
            <h3 class="footer_tit">下载QQ音乐客户端</h3>
            <ul class="footer_download_list">
              <li class="footer_download_list__item"><a href="//y.qq.com/download/" class="js_footer_down"><i class="fa fa-windows fa-3x" aria-hidden="true"></i><br/>PC版</a></li>
              <li class="footer_download_list__item"><a href="//y.qq.com/download/" class="js_footer_down"><i class="fa fa-desktop fa-3x" aria-hidden="true"></i><br/>Mac版</a></li>
              <li class="footer_download_list__item"><a href="//y.qq.com/download/" class="js_footer_down"><i class="fa fa-android fa-3x" aria-hidden="true"></i><br/>Android版</a></li>
              <li class="footer_download_list__item"><a href="//y.qq.com/download/" class="js_footer_down"><i class="fa fa-apple fa-3x" aria-hidden="true"></i><br/>iPhone版</a></li>
            </ul>
          </div>
          <div class="footer_product">
            <h3 class="footer_tit">特色产品</h3>
            <ul class="footer_product_list">
              <li class="footer_product_list__item footer_product_list__item--pic"><a href="http://kg.qq.com/?pgv_ref=qqmusic.y.topmenu" rel="noopener" target="_blank" class="js_other_link" ><i class="fa fa-bandcamp fa-3x" aria-hidden="true"></i><br/>全民K歌</a></li>
              <li class="footer_product_list__item footer_product_list__item--pic"><a href="http://y.qq.com/vip/voice_intro/index.html" rel="noopener" target="_blank" class="js_other_link" ><i class="fa fa-xing fa-3x" aria-hidden="true"></i><br/>Super Sound</a></li>
              <li class="footer_product_list__item footer_product_list__item--pic"><a href="http://y.qq.com/y/static/down/qplay.html?pgv_ref=qqmusic.y.topmenu" rel="noopener" target="_blank" class="js_other_link" ><i class="fa fa-podcast fa-3x" aria-hidden="true"></i><br/>QPlay</a></li>
              <li class="footer_product_list__item"><a href="http://y.qq.com/y/static/down/car_introduce.html" rel="noopener" target="_blank" class="js_other_link" >车载互联</a></li>
              <li class="footer_product_list__item"><a href="http://y.qq.com/yanchu/?pgv_ref=qqmusic.y.topmenu" rel="noopener" target="_blank" class="js_other_link" >QQ演出</a></li>
            </ul>
          </div>
          <div class="footer_group">
            <h3 class="footer_tit">TME集团官网</h3>
            <ul class="footer_group_list">
              <li class="footer_platform_list__item"><a href="https://www.tencentmusic.com/" target="_blank" class="js_other_link" data-stat="y_new.footer.other_music.thetme">腾讯音乐</a></li>
            </ul>
          </div>
          <div class="footer_link">
            <h3 class="footer_tit">合作链接</h3>
            <ul class="footer_link_list">
              <li class="footer_link_list__item"><a href="//y.qq.com/portal/company_detail.html?id=297" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">CJ ENM</a></li>
              <li class="footer_link_list__item"><a href="http://v.qq.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">腾讯视频</a></li>
              <li class="footer_link_list__item"><a href="http://z.qzone.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">手机QQ空间</a></li>
              <li class="footer_link_list__item"><a href="http://im.qq.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">最新版QQ</a></li>
              <li class="footer_link_list__item"><a href="http://e.qq.com/index.shtml" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">腾讯社交广告</a></li>
              <li class="footer_link_list__item"><a href="http://guanjia.qq.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">电脑管家</a></li>
              <li class="footer_link_list__item"><a href="http://browser.qq.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">QQ浏览器</a></li>
              <li class="footer_link_list__item"><a href="http://www.weiyun.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">腾讯微云</a></li>
              <li class="footer_link_list__item"><a href="https://cloud.tencent.com/?fromSource=gwzcw.756433.756433.756433" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">腾讯云</a></li>
              <li class="footer_link_list__item"><a href="http://fm.qq.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">企鹅FM</a></li>
              <li class="footer_link_list__item"><a href="http://www.znds.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">智能电视网</a></li>
              <li class="footer_link_list__item"><a href="http://www.dangbei.com/" rel="noopener" target="_blank" class="js_other_link" data-stat="y_new.footer.other_link">当贝市场</a></li>
            </ul>
          </div>
          <div class="footer_platform">
            <h3 class="footer_tit">开放平台</h3>
            <ul class="footer_platform_list">
              <li class="footer_platform_list__item"><a href="//y.qq.com/artists" target="_blank" class="js_other_link" data-stat="y_new.footer.other_music.artists">QQ音乐开放平台</a></li>
              <li class="footer_platform_list__item"><a href="http://y.tencentmusic.com/" target="_blank" class="js_other_link" data-stat="y_new.footer.other_music.tme">腾讯音乐人</a></li>
            </ul>
          </div>
        </div>
        <div class="footer_copyright">
          <p>
            <a href="http://www.tencent.com/" rel="noopener nofollow" target="_blank" title="关于腾讯">关于腾讯</a> |
            <a href="http://www.tencent.com/index_e.shtml" rel="noopener nofollow" target="_blank" title="About Tencent">About Tencent</a> |
            <a href="http://www.qq.com/contract.shtml" rel="noopener nofollow" target="_blank" title="服务条款">服务条款</a> |
            <a href="http://y.qq.com/y/static/tips/service_tips.html" rel="noopener nofollow" target="_blank" title="用户服务协议">用户服务协议</a> |
            <a href="https://y.qq.com/m/client/intro/privacy.html" rel="noopener nofollow" target="_blank" title="隐私政策">隐私政策</a> |
            <a href="https://y.qq.com/vip/right_declare/index.html" rel="noopener nofollow" target="_blank" title="权利声明">权利声明</a> |
            <a href="http://www.tencentmind.com/" rel="noopener nofollow" target="_blank" title="广告服务">广告服务</a> |
            <a href="http://hr.tencent.com/" rel="noopener nofollow" target="_blank" title="腾讯招聘">腾讯招聘</a> |
            <a href="http://service.qq.com/" rel="noopener nofollow" target="_blank" title="客服中心">客服中心</a> |
            <a href="http://www.qq.com/map/" rel="noopener nofollow" target="_blank" title="网站导航">网站导航</a>
          </p>
          <p>Copyright © 1998 - 2020 Tencent. <a target="_blank" href="http://www.tencent.com/en-us/le/copyrightstatement.shtml" rel="noopener nofollow" title="All Rights Reserved.">All Rights Reserved.</a></p>
          <p>腾讯公司 <a target="_blank" href="http://www.tencent.com/zh-cn/le/copyrightstatement.shtml" rel="noopener nofollow" title="版权所有">版权所有</a> <a target="_blank" href="http://www.tencent.com/law/mo_law.shtml?/law/copyright.htm" rel="noopener nofollow" title="腾讯网络文化经营许可证">腾讯网络文化经营许可证</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    login: function () {
      console.log('已转移网页')
      this.$router.push('/user')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$green-color: #31c27c
@mixin section_inner_rule
  max-width: 1200px
  margin: 0 auto
  position: relative
  display: block
  font-size: 14px
  line-height: 1.5
.mod_header
  width: 100%
  position: relative
  display: block
  color: #000
  font-size: 14px
  .section_inner
    padding-top: 90px
    @include section_inner_rule
    .qqmusic_title
      position: absolute
      left: 0
      top: 22px
      font-size: 100%
    .mod_top_nav
      position: absolute
      left: 198px
      top: 0
      list-style: none
      // line-height: 1.5
      font-size: 14px
      margin: 0
      padding: 0
      color: #fff
      .top_nav__item
        position: relative
        float: left
        margin-right: -5px
        font-size: 14px
        // line-height: 1.5
        display: list-item
        a
          &:hover
            color: $green-color
        .top_nav__link
          padding: 0 20px
          height: 90px
          line-height: 90px
          font-size: 18px
          text-align: center
          text-decoration: none
          list-style: none
          color: #000
          display: block
        .top_nav__link--current
          background-color: $green-color
          color: #fff
    .mod_top_subnav
      height: 51px
      line-height: 51px
      margin: 0
      padding: 0
      border-top: 1px solid #f2f2f2
      padding-left: 230px
      // margin-right: -50px
      .top_subnav__item
        float: left
        font-size: 15px
        color: #c1c1c1
        margin-right: 47px
        list-style: none
        .top_subnav__link--current
          color: $green-color
        a
          text-decoration: none
          color: #000
          &:hover
            color: $green-color
            text-decoration: none
    .mod_top_search
      position: absolute
      top: 0
      right: 284px
      .mod_search_input
        border: 1px solid #c9c9c9
        padding: 0 33px 0 11px
        line-height: 36px
        height: 36px
        margin-top: 26px
        position: relative
        border-radius: 3px
        // background-color: #fff
        // transition: width .6s ease-out
        .search_input__input
          width: 174px
          height: 36px
          border: none
          color: #000
          // transition: width .6s ease-out, visibility .6s 1ms ease-out
          background: none
          margin: 0
          padding: 0
          outline: none
        .search_input__btn
          position: absolute
          top: 0
          right: 0
          border: 0 none
          width: 38px
          height: 35px
          overflow: visible
          background: 0 0
    .header_opt
      position: absolute
      top: 0
      right: 0
      height: 90px
      line-height: 90px
      .mod_top_login
        line-height: 90px
        height: 90px
        font-size: 0
        a
          text-decoration: none
          color: #000
          font-size: 16px
          vertical-align: top
        .top_login_link
          position: relative
          float: left
          width: 38px
          margin-right: 10px
          text-align: center
          line-height: 90px
        .top_login_btn
          margin-top: 24px
          padding: 0 9px
          margin-left: 10px
          margin-right: 0
          font-size: 13px
          border: 1px solid $green-color
          background-color: $green-color
          color: #fff
          border-radius: 2px
          height: 38px
          line-height: 38px
          display: inline-block
          box-sizing: border-box
          overflow: hidden
        .top_login_btn_vip
          line-height: 38px
          margin-top: 24px
          padding: 0 9px
          margin-left: 10px
          margin-right: 0
          font-size: 13px
          border: 1px solid #c9c9c9
          border-radius: 2px
          height: 38px
          display: inline-block
          box-sizing: border-box
          overflow: hidden
.mod_index
  position: relative
  display: block
  font-size: 14px
  line-height: 1.5
  color: #000
  background: url(https://y.gtimg.cn/mediastyle/yqq/img/bg_detail.jpg?max_age=2592000&v=05ddeeeeca10d505b8501911cfbda543) 50% 0 repeat-x
  .section_inner
    @include section_inner_rule
    .index_hd
      padding-top: 4.1%
      padding-bottom: 2%
      h2
        display: block
        margin: 0 auto
        width: 196px
        height: 40px
        font-size: 30px
    .mod_index_tab
      height: 50px
      text-align: center
      .index_tab__item--current
        color: $green-color
      a
        display: inline-block
        font-size: 15px
        margin: 0 24px
        text-decoration: none
        color: #000
        &:hover
          color: $green-color
  .mod_event
    margin-right: -20px
    padding-bottom: 10px
    margin-top: 10px
  .mod_slid
    margin-bottom: 20px
    overflow: hidden
    .slide_list
      position: relative
      font-size: 0
      width: 1250%
      padding: 0
      margin: 0
      .event_list__item
        display: inline-block
        width: 4%
        box-sizing: border-box
        padding-right: 20px
        img
          width: 590px
          height: 236px
.playlist__list // ul
  display: flex
  justify-content: center
  .playlist__item // li
    list-style: none
    // width: 1.6%
    padding-bottom: 0
    text-align:center
    display: inline-block
    position: relative
    vertical-align: top
    // overflow: hidden
    .playlist__item_box // 外层盒子
      // position: absolute
      // top: 0
      // left: 0
      // right: 0
      margin-right: 20px
      .playlist__cover // 图片盒子
        a
          list-style: none
          text-decoration: none
          img
            width: 224px
            height: 224px
      .playlist__title
        margin: 0
        .playlist__title_txt
          // float: left
          max-width: 100%
          line-height: 22px
          max-height: 44px
        a
          text-decoration: none
          color: #000
      .playlist__other
        color: #999
        height: 22px
.footer
  color: #999
  background-color: #333
  clear: both
  font-size: 14px
  line-height: 1.5
  display: block
  .section_inner
    @include section_inner_rule
  a
    color: #999
    text-decoration: none
    &:hover
      color: $green-color
  li
    list-style: none
  .footer_info
    overflow: hidden
    border-bottom: 1px solid #353535
    position: relative
    padding-bottom: 45px
    .footer_tit
      font-size: 15px
      font-weight: 400
      padding: 80px 0 46px
      margin: 0
    .footer_download
      position: absolute
      top: 0
      left: 10px
      .footer_download_list
        margin: 0
        padding: 0
        .footer_download_list__item
          float: left
          text-align: center
          position: relative
          padding: 0 20px
          line-height: 2.0
    .footer_product
      position: absolute
      top: 0
      left: 476px
      width: 304px
      .footer_product_list
        position: relative
        z-index: 1
        padding: 0 10px 0 0
        .footer_product_list__item
          padding-right: 20px
          text-indent: 4px
          float: left
          margin-bottom: 18px
        .footer_product_list__item--pic
          text-align: center
          position: relative
          text-indent: 0
    .footer_link
      float: right
      width: 300px
      padding-bottom: 57px
      margin: 0
      padding: 0
      .footer_link_list
        margin: 0
        padding: 0
      li
        float: left
        min-width: 100px
        margin-bottom: 12px
    .footer_group
      position: absolute
      top: 230px
      left: 476px
      width: 304px
      .footer_group_list
        margin: 0
        padding: 0
        float-left: -25px
    .footer_platform
      margin: 230px 0 10px
      .footer_platform_list
        margin: 0
        padding: 0
        margin-left: -25px
        .footer_platform_list__item
          float: left
          min-width: 100px
          margin: 0 5px 12px 0
          text-indent: 25px
.footer_copyright
  text-align: center
  line-height: 24px
  padding: 24px 0
  font-size: 12px
</style>
