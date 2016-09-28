(function (ReturnFormatTime) {

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = ReturnFormatTime
  } else if (typeof define === 'function' && define.amd) {
    define(['return_format_time'], ReturnFormatTime)
  } else {
    ReturnFormatTime()
  }

})(function () {
  Number.prototype.padLeft = function(base,chr){
    var len = (String(base || 10).length - String(this).length) + 1
    return len > 0 ? new Array(len).join(chr || '0') + this : this
  }
  Date.prototype.format = function (format) {
    var date = {
      'm+': (this.getMonth() + 1).padLeft(),
      'd+': this.getDate().padLeft(),
      'h+': this.getHours().padLeft(),
      'i+': this.getMinutes().padLeft(),
      's+': this.getSeconds().padLeft(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S+': this.getMilliseconds().padLeft()
    }
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, date[k])
      }
    }
    return format
  }
});
