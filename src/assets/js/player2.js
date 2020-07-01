export default {
  methods: {
    function (window) {
      function Player ($audio) {
        // eslint-disable-next-line new-cap
        return new Player.prototype.init($audio)
      }
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
          if (this.currentIndex === index) {
            // 同一首音乐
            if (this.audio.paused) {
              this.audio.play()
            } else {
              this.audio.pause()
            }
          } else {
            // 不是同一首
            var songSrc = this.requireSongurl(music.id)
            this.$audio.attr('src', songSrc)
            this.audio.play()
            this.currentIndex = index
          }
        },
        requireSongurl: async function (id) {
          const {data: res} = await this.$http.get('playlist/url?id=' + id)
          console.log(res[0].url)
          return res[0].url
        }
      }
      Player.prototype.init.prototype = Player.prototype
      window.Player = Player
    }
  },
  mounted () {
    this.function(window)
  }
}
