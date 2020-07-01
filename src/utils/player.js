(function (window) {
  function Player ($audio) {
    // eslint-disable-next-line new-cap
    return new Player.prototype.init($audio)
  }
  // eslint-disable-next-line no-unused-expressions
  Player.prototype = {
    constructor: Player,
    musicList: [1, 2, 3],
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
        // var songSrc = this.requireSongurl(music.id)
        this.$audio.attr('src', 'https://music.163.com/song/media/outer/url?id=' + music.id + '.mp3')
        this.audio.play()
        this.currentIndex = index
      }
    }
    // requireSongurl: async function (id) {
    //   const {data: res} = await this.$http.get('playlist/url?id=' + id)
    //   console.log(res[0].url)
    //   return res[0].url
    // }
  }
  Player.prototype.init.prototype = Player.prototype
  window.Player = Player
})(window)
// eslint-disable-next-line no-undef
export default Player
