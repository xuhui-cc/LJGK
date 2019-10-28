//logs.js


Page({
  data: {
    currentData: 0,
    clientHeight: 500,
    btn_addr: true,
    showModal_addr: true,
  },
  onLoad: function () {
  },
  checkCurrent: function (e) {
    const that = this
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
})
