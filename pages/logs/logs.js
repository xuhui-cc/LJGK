//logs.js

const app = getApp()
Page({
  data: {
    currentData: 0,
    clientHeight: 730,
    btn_addr: true,
    showModal_addr: false,
    ispay: false,
    
    
  },
  onLoad: function () {
    let that = this
    let ispay = wx.getStorageSync("ispay")
    let islogin = wx.getStorageSync("islogin")
    that.setData({
      ispay : ispay,
      islogin : islogin
    })
    console.log(that.data.islogin)

    var params = {

    }
    app.ljgk.xcxGetCourseInfo(params).then(d => {
      
        if (d.data.status == 1) {
          that.setData({
            course: d.data.data
          })
          that.zhankai()
      }
      else{
        
      }
    })
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

  //默认展开
  zhankai: function () {
    var that = this
    var info = that.data.course.info
    if (info) {
      info.forEach(function (item, index) {
        var dd = 'course.info[' + index + '].iszhedie'
        that.setData({ [dd]: true })
      })
    }
  },
  zhedie: function (e) {
    //  console.log(e)
    var index = e.currentTarget.dataset.index
    if (this.data.course.info[index].iszhedie) {
      var dd = 'course.info[' + index + '].iszhedie'
      this.setData({ [dd]: false })
    } else {
      var dd = 'course.info[' + index + '].iszhedie'
      this.setData({ [dd]: true })
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
