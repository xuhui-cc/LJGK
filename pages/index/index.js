//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModal_num : false,
    cs:[1,2,3,4],
    btn1:false,
    btn_addr:true,
    showModal_addr: false,
    showModal_login: false,
    time: "获取验证码",
    islogin: false,
    num:0,
  },
  //事件处理函数
  
  onLoad: function () {
    
  },
  
  showModal_addr: function() {
    this.setData({
      showModal_addr: true
    })
  },
  del_addr: function () {
    this.setData({
      showModal_addr: false
    })
  },
  choose: function(e) {
    var num = e.currentTarget.dataset.xb + 1;
    console.log(num)
    this.setData({
      num : num
    })
    if (this.data.type == 1) {
      wx.navigateTo({
        url: '/pages/pdf/pdf',
      })
      this.setData({
        showModal_num: false
      })
    }
    else {
      wx.navigateTo({
        url: '/pages/video/video',
      })
      this.setData({
        showModal_num: false
      })
    }
  },
  showModal_num: function (e) {
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    this.setData({
      type:type
    })
    if(this.data.num > 0){
      if(this.data.type == 1){
        wx.navigateTo({
          url: '/pages/pdf/pdf',
        })
      }
      else {
        wx.navigateTo({
          url: '/pages/video/video',
        })
      }
    }
    else{
      this.setData({
        showModal_num: true
      })
    }
    
  },
  del_num: function () {
    this.setData({
      showModal_num: false
    })
  },
  submit: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 500
    })
    this.setData({
      showModal_addr: false,
      ispay : true 
    })
    wx.setStorageSync("ispay", this.data.ispay)
  },
  go_logs: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  del_login: function () {
    this.setData({
      showModal_login: false
    })
  },
  showModal_login: function(e) {
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    this.setData({
      type: type
    })
    this.setData({
      showModal_login: true
    })
  },
  login: function() {
    this.setData({
      showModal_login: false,
      showModal_num: true,
      islogin: true
    })
    wx.setStorageSync("islogin", this.data.islogin)
  },
  getPhoneNumber: function (e) {
    var that = this

    wx.login({
      success: res => {
       
        if (e.detail.errMsg == "getPhoneNumber:ok") {
          wx.showLoading({
            title: '登录中...',
          })
              that.setData({
                showModal_addr: true,
                showModal_login: false
              })
              
            } else {
            }
            wx.hideLoading()
          }
        }) 
  },
})
