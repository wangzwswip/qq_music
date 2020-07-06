(function (window) {
  function Progress ($progressBar, $progressLine, $progressDot) {
    // eslint-disable-next-line new-cap
    return new Progress.prototype.init($progressBar, $progressLine, $progressDot)
  }
  Progress.prototype = {
    constructor: Progress,
    init: function ($progressBar, $progressLine, $progressDot) {
      this.$progressBar = $progressBar
      this.$progressLine = $progressLine
      this.$progressDot = $progressDot
    },
    isMove: false,
    isInner: false,
    progressClick: function (callBack) {
      var $this = this
      // 监听背景的点击
      this.$progressBar.click(function (event) {
        // 获取背景距离窗口默认的位置
        var normalLeft = $(this).offset().left
        // 获取点击的位置距离窗口的位置
        var eventLeft = event.pageX
        // 设置前景宽度
        $this.$progressLine.css('width', eventLeft - normalLeft)
        $this.$progressDot.css('left', eventLeft - normalLeft)
        // 计算进度条的比例
        var value = (eventLeft - normalLeft) / $(this).width()
        callBack(value.toFixed(4))
      })
    },
    progressMove: function (callBack) {
      var $this = this
      // 获取默认位置
      // 获取背景距离窗口默认的位置
      var normalLeft = this.$progressBar.offset().left
      var eventLeft
      // var normalLeftBar = this.$progressBar.offset().left
      // var barWidth = this.$progressBar.width()
      // 1.监听鼠标按下事件
      this.$progressBar.mousedown(function () {
        $this.isInner = true
        $this.isMove = true
        // 2.监听鼠标的移动事件
        $(document).mousemove(function () { // $(document)
          // 获取点击的位置距离窗口的位置
          eventLeft = event.pageX
          var offset = eventLeft - normalLeft
          $this.$progressLine.css('width', offset)
          $this.$progressDot.css('left', offset)
          console.log($this.isMove)
          // if (offset >= 0 && offset <= barWidth) {
          //   // 设置前景宽度
          //   $this.$progressLine.css('width', offset)
          //   $this.$progressDot.css('left', offset)
          // }
        })
      })
      // 3监听鼠标抬起
      $(document).mouseup(function () {
        if ($this.isInner) {
          $(document).off('mousemove')
          $this.isMove = false
          $this.isInner = false
          // 计算进度条的比例
          var value = (eventLeft - normalLeft) / $this.$progressBar.width()
          callBack(value.toFixed(4))
        }
        // $this.isMove = false
        console.log($this.isMove)
      })
    },
    // 设置进度条随音乐变化
    setProgess: function (value) {
      console.log('提前测试', this.isMove)
      var tmpvalue = value.toFixed(2)
      if (this.isMove) return
      // eslint-disable-next-line no-useless-return
      if (value < 0 || value > 100) return
      this.$progressLine.css({
        width: tmpvalue + '%'
        // background: 'red'
      })
      this.$progressDot.css({
        left: tmpvalue + '%'
      })
      console.log('在运行')
    }
  }
  Progress.prototype.init.prototype = Progress.prototype
  window.Progress = Progress
})(window)
// eslint-disable-next-line no-undef
export default Progress
