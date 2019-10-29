//logs.js


Page({
  data: {
    currentData: 0,
    clientHeight: 500,
    btn_addr: true,
    showModal_addr: false,
    ispay: false,
    
  },
  onLoad: function () {
    let ispay = wx.getStorageSync("ispay")
    let islogin = wx.getStorageSync("islogin")
    
    this.setData({
      ispay : ispay,
      islogin : islogin
    })
    console.log(this.data.islogin)
  },
  onShow: function () {
    if (wx.hideHomeButton) wx.hideHomeButton()
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
  submit: function() {
    this.setData({
      showModal_addr: false,
      ispay: true
    })
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 500
    })
  },
  del_addr:function() {
    this.setData({
      showModal_addr: false,
    })
  },
  del_login: function(){
    this.setData({
      showModal_login: false,
    })
  },
  showModal_login: function() {
    this.setData({
      showModal_login: true,
    })
  },
  showModal_addr: function () {
    this.setData({
      showModal_addr: true,
    })
  },
})
