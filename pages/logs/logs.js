//logs.js

const app = getApp()
Page({
  data: {
    currentData: 0,
    clientHeight: 730,
    btn_addr: true,       //地址提交按钮
    showModal_addr: false,   //填写地址蒙层
    ispay: false,        //去领取按钮判断
    time: "获取验证码",
    currentTime: 61,
    
  },
  //目录介绍判断
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
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
  //介绍目录页选择
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
  //折叠按钮
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
  //填写地址蒙层关闭按钮
  del_addr:function() {
    this.setData({
      showModal_addr: false,
    })
  },
  //登录蒙层关闭按钮
  del_login: function(){
    this.setData({
      showModal_login: false,
    })
  },
  //登录蒙层
  showModal_login: function() {
    this.setData({
      showModal_login: true,
    })
  },
  //填写地址蒙层
  showModal_addr: function () {
    this.setData({
      showModal_addr: true,
    })
  },
  input_name: function (e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username)
  },
  input_phone: function (e) {
    var regNum = new RegExp('[0-9]', 'g');

    var isphone = regNum.exec(e.detail.value);
    if (isphone) {
      this.setData({
        phone: e.detail.value
      })
    }
    else {
      wx.showToast({
        title: "请输入正确的手机号码",
        icon: 'none',
        duration: 1000
      })
      this.setData({
        phone: ""
      })
    }
    console.log(this.data.phone)
  },
  input_address: function (e) {
    this.setData({
      address: e.detail.value
    })
    console.log(this.data.address)
  },
//填写地址提交
  submit: function () {
    let that = this
    var uid = wx.getStorageSync("uid")
    console.log(uid)
    if (that.data.phone != "" && that.data.phone.length == 11) {
    var params = {
      uid: uid,
      username: that.data.username,
      phone: that.data.phone,
      address: that.data.address
    }
    app.ljgk.xcxAddAddress(params).then(d => {
      if (d.data.status == 1) {
        wx.showToast({
          title: '领取成功',
          icon: 'success',
          duration: 500
        })
      
        this.setData({
          showModal_addr: false,
          ispay: true
        })
        wx.setStorageSync("ispay", this.data.ispay)
        that.onLoad()
        console.log(d.data.msg)
      }
      else {
        console.log(d.data.msg)
      }
    })
    } else {
      wx.showToast({
        title: "请输入正确的手机号码",
        icon: 'none',
        duration: 1000
      })
    }




  },
  //跳转去看视频
  gokan_video: function (e) {
    var video_id = e.currentTarget.dataset.video_id
    // var lesson_id = e.currentTarget.dataset.lesson_id
    // console.log(e)
    wx.navigateTo({
      url: '/pages/kan_video/kan_video?video_id=' + video_id,
    })
    console.log(video_id)
  },
  inputphone: function (e) {
    this.setData({
      dphone: e.detail.value
    })
    console.log(this.data.dphone)
  },
  //登录输入验证码
  inputcode: function (e) {
    this.setData({
      code: e.detail.value
    })
    console.log(this.data.code)
  },
  login: function (e) {
    var that = this
    var phone = this.data.dphone;
    var params = {
      "phone": phone,
      "code": this.data.code,
    }
    if (!phone || !this.data.code) {
      return;
    }
    app.ljgk.loginRegister(params).then(d => {
      if (d.data.status == 1) {
        wx.setStorageSync("uid", d.data.data.uid)
        wx.setStorageSync("token", d.data.data.token)
        app.globalData.uid = d.data.data.uid;
        wx.setStorageSync('userInfo', d.data.data)

        
        
          that.setData({
            showModal_addr: true,
            showModal_login: false,
            islogin: true

          })
          wx.setStorageSync("islogin", this.data.islogin)
        }
      

    })
  },

//获取微信绑定手机号登录
  getPhoneNumber: function (e) {
    var that = this
    wx.login({
      success: res => {

        if (e.detail.errMsg == "getPhoneNumber:ok") {
          wx.showLoading({
            title: '登录中...',
          })
          let iv = encodeURIComponent(e.detail.iv);
          let encryptedData = encodeURIComponent(e.detail.encryptedData);
          let code = res.code
          var params = {
            "code": code,
            "iv": iv,
            "encryptedData": encryptedData
          }
          console.log(params)
          app.ljgk.loginregister(params).then(d => {
            if (d.data.status == 0) {
              wx.setStorageSync('token', d.data.token);
              wx.setStorageSync('uid', d.data.uid);
              app.globalData.uid = d.data.uid;
              wx.setStorageSync('userInfo', d.data.userInfo)
              
                that.setData({
                  showModal_addr: true,
                  showModal_login: false,
                  islogin: true

                })
                wx.setStorageSync("islogin", this.data.islogin)
              
            wx.hideLoading()
            }
          })
        } else {

        }
      }
    })
  },

  //获取验证码
  getYzm: function (e) {
    var that = this
    // var token = wx.getStorageSync('token');
    var phone = this.data.dphone;
    if (this.data.disabled || !phone) {
      return;
    }
    // console.log(phone)
    var params = {
      // "token": token,
      "phone": phone,
    }
    console.log(params)
    app.ljgk.xcxMyGetyzm(params).then(d => {
      if (d.data.status == 1) {
        console.log('成功')
        that.setData({
          disabled: true
        })
        let interval = null;
        let currentTime = that.data.currentTime;
        interval = setInterval(function () {
          currentTime--;
          that.setData({
            time: currentTime,
            suffix: ' s '
          })
          if (currentTime <= 0) {
            clearInterval(interval)
            that.setData({
              time: '重新发送',
              suffix: '',
              currentTime: 61,
              disabled: false
            })
          }
        }, 1000)
      } else {
        wx.showToast({
          title: d.data.msg,
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
})
