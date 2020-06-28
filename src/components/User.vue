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
                <span class="player_login__txt" @click="login_dialogVisible=true">登录</span>
                </a>
                <a class="player_login__link player_login__link--set js_opts_unlogin" href="javascript:;"><span class="player_login__txt">设置</span></a>
            </div>
        </div>
        <MusicBody></MusicBody>
        <Footer/>
        <div class="mask_bg"></div>
        <div class="mask"></div>
        <!-- 登录弹窗 -->
        <el-dialog
        title="手机号登录"
        :visible.sync="login_dialogVisible"
        width="50%" @close="loginDialogClose">
            <el-form :model="loginForm" :rules="loginRules" ref="loginRef" label-width="100px" >
                <el-form-item label="手机号码" prop="iphone">
                <el-input v-model="loginForm.iphone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
            </el-form>
            <!-- 底部区域 -->
            <span slot="footer" class="dialog-footer">
              <el-button @click="login_dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="login">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import MusicBody from '../components/MusicBody'
import Footer from '../components/Footer'
export default {
  data () {
    // 验证手机号规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (regMobile.test(value)) {
        return cb()
      }
      cb(new Error('请输入合法的手机号'))
    }
    return {
      // 用户登录表单数据
      loginForm: {
        iphone: '',
        password: ''
      },
      // 用户登录框的显示与隐藏
      login_dialogVisible: false,
      // 登录表单的验证规则
      loginRules: {
        iphone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度最少为6位', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    MusicBody,
    Footer
  },
  methods: {
    // 监听登录对话框关闭事件
    loginDialogClose () {
      this.$refs.loginRef.resetFields()
    },
    // 登录按钮，提交登录信息
    login () {
      this.$refs.loginRef.validate(async valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return
        // 可以发起网络请求
        const result = await this.$http.post('login/cellphone', this.loginForm)
        console.log(result)
      })
    }
  }
}
</script>

<style lang='sass' scoped>
$green-color: #31c27c
.main
    width: 100%
    height: 100%
    font-size: 14px
    line-height: 1.5
    margin: 0
    padding: 0
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
        margin: 0
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
