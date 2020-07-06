(function (window) {
  function Player ($audio) {
    // eslint-disable-next-line new-cap
    return new Player.prototype.init($audio)
  }
  // eslint-disable-next-line no-unused-expressions
  Player.prototype = {
    constructor: Player,
    musicList: [],
    init: function ($audio) {
      this.$audio = $audio
      this.audio = $audio.get(0) // 获取个原生的
    },
    currentIndex: -1,
    playMusic: function (index, music) {
      // 判断是否时同一首音乐
      // eslint-disable-next-line eqeqeq
      if (this.currentIndex == index) {
        // 同一首音乐
        if (this.audio.paused) {
          this.audio.play()
        } else {
          this.audio.pause()
        }
      } else {
        // 不是同一首
        // var songSrc = this.requireSongurl(music.id)
        this.$audio.attr('src', 'https://music.163.com/song/media/outer/url?id=' + music.id + '.mp3')
        this.audio.play()
        this.currentIndex = index
      }
    },
    preIndex: function () {
      var index = this.currentIndex - 1
      if (index < 0) {
        index = this.musicList.length - 1
      }
      return index
    },
    nextIndex: function () {
      var index = this.currentIndex + 1
      if (index > this.musicList.length - 1) {
        index = 0
      }
      return index
    },
    changeMusic: function (index) {
      // 删除对应的数据
      this.musicList.splice(index, 1)
      // 判断当前删除的是否是正在播放的前面
      if (index < this.currentIndex) {
        this.currentIndex = this.currentIndex - 1
      }
    },
    // getMusicDuration: function () {
    //   return this.audio.duration
    // },
    // getMusicCurrentTime: function () {
    //   return this.audio.currentTime
    // },
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
    musicTimeUpdate: function (callBack) {
      var $this = this
      this.$audio.on('timeupdate', function () {
        var duration = $this.audio.duration
        var currentTime = $this.audio.currentTime
        var timeStr = $this.formatTime(currentTime) + '/' + $this.formatTime(duration)
        callBack([currentTime, duration, timeStr])
      })
    },
    // 拖动进度条时
    musicSeekTo: function (value) {
      // var $this = this
      this.audio.currentTime = Math.round(this.audio.duration * value)
    },
    // 设置声音
    musicVoiceSeekTo: function (value) {
      // 0~1
      this.audio.volume = value
    }
  }
  Player.prototype.init.prototype = Player.prototype
  window.Player = Player
})(window)
// eslint-disable-next-line no-undef
export default Player
