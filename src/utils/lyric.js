(function (window) {
  function Lyric (path) {
    // eslint-disable-next-line new-cap
    return new Lyric.prototype.init(path)
  }
  Lyric.prototype = {
    constructor: Lyric,
    init: function (path) {
      this.path = path
    },
    times: [],
    lyrics: [],
    index: -1,
    loadLyric: function (callBack) {
      var $this = this
      var xmlhttp = new XMLHttpRequest()
      xmlhttp.open('GET', $this.path, true)
      xmlhttp.send()
      xmlhttp.onreadystatechange = function () {
        // eslint-disable-next-line eqeqeq
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            var data = JSON.parse(xmlhttp.responseText)
            var tmplrc = data.lrc.lyric
            $this.parseLyric(tmplrc)
            callBack()
          } else {
            console.log('获取歌词失败')
          }
        }
      }
    },
    parseLyric: function (data) {
      var $this = this
      // 一定要清空上一首歌曲的歌词和时间
      $this.times = []
      $this.lyrics = []
      var array = data.split('\n')
      // [00:00.92]
      var timeReg = /\[(\d*:\d*\.\d*)\]/
      // 遍历取出每一条歌词
      $.each(array, function (index, ele) {
        // 处理歌词
        var lrc = ele.split(']')[1]
        $this.lyrics.push(lrc)
        // 排除空字符串(没有歌词的)
        // console.log(typeof (lrc))
        // eslint-disable-next-line valid-typeof
        // if (typeof (lrc) === undefined) return true
        // $this.lyrics.push(lrc)
        // 处理时间
        var res = timeReg.exec(ele)
        if (res == null) return true
        var timeStr = res[1] // 00:00.92
        var res2 = timeStr.split(':')
        var min = parseInt(res2[0]) * 60
        var sec = parseFloat(res2[1])
        var time = parseFloat(Number(min + sec).toFixed(2))
        $this.times.push(time)
      })
    },
    currentIndex: function (currentTime) {
      // 0.93 >= 0.92
      // 4.8 >= 4.75
      if (currentTime >= this.times[0]) {
        this.index++ // 0  1
        this.times.shift() // 删除数组最前面的一个元素
      }
      return this.index // 1
    }
    /*
    [6.4,23.59,26.16,29.33,34.27,36.9];
    ["告白气球 - 周杰伦","词：方文山","曲：周杰伦","塞纳河畔 左岸的咖啡","我手一杯 品尝你的美","留下唇印的嘴","花店玫瑰 名字写错谁","告白气球 风吹到对街"]
    */
  }
  Lyric.prototype.init.prototype = Lyric.prototype
  window.Lyric = Lyric
})(window)
// eslint-disable-next-line no-undef
export default Lyric
