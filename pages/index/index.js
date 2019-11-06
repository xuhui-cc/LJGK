//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showModal_num : false,     //考场蒙层
    btn1:false,          //免费领取按钮
    btn_addr:true,         //提交地址按钮
    showModal_addr: false,      //地址蒙层
    showModal_login: false,     //登录蒙层
    time: "获取验证码",
    currentTime: 61,
    islogin: false,        //是否登录
    kc_yes: false,  
    input_kc: false    //考场初始判断
  },
  //事件处理函数
  
  onLoad: function () {
    let that = this
    that.setData({
      islogin: wx.getStorageSync("islogin"),
      ispay: wx.getStorageSync("ispay"),
      kc_yes: wx.getStorageSync("kc_yes"),
    })
    //获取考场信息
    // var params = {
     
    // }
    // app.ljgk.xcxGetKcList(params).then(d => {
    //   console.log(d)
    //   if (d.data.status == 1) {
    //     that.setData({
    //       kclist:  d.data.data
    //     })
    //     console.log(that.data.kclist)
    //   }
    // })

    var params = {

    }
    app.ljgk.xcxGetCourseInfo(params).then(r => {

      if (r.data.status == 1) {
        that.setData({
          course_detail: r.data.data
        })
      }
      else {

      }
    })
  },
  
  input_kc: function(e) {

    var regkcid = new RegExp('[0-9]', 'g');

    var iskcid = regkcid.exec(e.detail.value);
    
   
    if (iskcid) {
      if (e.detail.value >= 1 ){
        if (e.detail.value <= 150) {
          this.setData({
            kcid: e.detail.value,
            input_kc: true
          })
        } else {
          wx.showToast({
            title: "请输入正确的关键字",
            icon: 'none',
            duration: 1000
          })
          this.setData({
            input_kc: false
          })
        }
      }else{
        wx.showToast({
          title: "请输入正确的关键字",
          icon: 'none',
          duration: 1000
        })
        this.setData({
          input_kc: false
        })
      }
      
     
    }
    else {
      wx.showToast({
        title: "请输入正确的关键字",
        icon: 'none',
        duration: 1000
      })
      this.setData({
        kcid: "",
        input_kc: false
      })
    }
    console.log(this.data.kcid)

    
    
  },
  //免费领取按钮判断
  showModal_addr: function() {
    if(this.data.ispay){
      wx.navigateTo({
        url: '/pages/logs/logs',
      })
    }else{
      this.setData({
        showModal_addr: true
      })
    }
    
  },
  //地址蒙层关闭按钮
  del_addr: function () {
    this.setData({
      showModal_addr: false
    })
  },
  //考场提交
  kc_submit: function() {
   
      this.setData({
        kc_yes: true
      })
      console.log("考场选择" + this.data.kc_yes)
      wx.setStorageSync('kc_yes', this.data.kc_yes)
      var uid = wx.getStorageSync("uid")
      if (this.data.type == 1) {
        var params = {
          uid: uid,
          kcid: this.data.kcid
        }
        //获取pdf文件
        app.ljgk.xcxAddKaochang(params).then(d => {
          if (d.data.status == 1) {
            console.log(d.data.msg)
          }
        })

        app.ljgk.xcxGetZiliao(params).then(d => {
          if (d.data.status == 1) {
            this.setData({
              gkzl: d.data.data,

            })
            console.log(this.data.gkzl)
          }

          wx.downloadFile({
            url: this.data.gkzl.pdf, //仅为示例，并非真实的资源
            success(res) {
              // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容


              var filePath = res.tempFilePath

              wx.openDocument({

                filePath: filePath,

                success: function (res) {

                  console.log('打开文档成功')

                }

              })
            }

          })

        })
        // wx.navigateTo({
        //   url: '/pages/pdf/pdf',
        // })
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
  //考场选择蒙层判断
  showModal_num: function (e) {
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    this.setData({
      type:type
    })
    if (this.data.kc_yes){
      if(this.data.type == 1){
        var params = {

        }
        //获取pdf资料
        app.ljgk.xcxGetZiliao(params).then(d => {
          if (d.data.status == 1) {
            this.setData({
              gkzl: d.data.data,

            })
            console.log(this.data.gkzl)
          }
          wx.downloadFile({
            url: this.data.gkzl.pdf, //仅为示例，并非真实的资源
            success(res) {
              // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容


              var filePath = res.tempFilePath

              wx.openDocument({

                filePath: filePath,

                success: function (res) {

                  console.log('打开文档成功')

                }

              })
            }

          })

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
  //考场蒙层关闭按钮
  del_num: function () {
    this.setData({
      showModal_num: false
    })
  },
//填写地址蒙层姓名
  input_name: function(e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username)
  },
  //填写地址蒙层电话
  input_phone: function (e) {
    var regNum = new RegExp('[0-9]', 'g');
    
    var isphone = regNum.exec(e.detail.value);
    if (isphone){
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
  //填写地址蒙层地址
  input_address: function (e) {
    this.setData({
      address: e.detail.value
    })
    console.log(this.data.address)
  },
//地址蒙层提交
  submit: function () {
    let that = this
    var uid = wx.getStorageSync("uid")
    console.log(uid)
    if (that.data.phone != "" && that.data.phone.length == 11){
    var params = {
      uid: uid,
      username: that.data.username,
      phone: that.data.phone,
      address: that.data.address
    }
    //地址信息保存
    app.ljgk.xcxAddAddress(params).then(d => {
      if (d.data.status == 1) {
        wx.showToast({
          title: '领取成功',
          icon: 'success',
          duration: 500
        })
        wx.navigateTo({
          url: '/pages/logs/logs',
        })
        this.setData({
          showModal_addr: false,
          ispay: true
        })
        wx.setStorageSync("ispay", this.data.ispay)
        // console.log(d.data.msg)
      }
      else{
        // console.log(d.data.msg)
      }
    }) 
    }else{
      wx.showToast({
        title: "请输入正确的手机号码",
        icon: 'none',
        duration: 1000
      })
    }
  },
  //详情页跳转
  go_logs: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  //登录蒙层关闭按钮
  del_login: function () {
    this.setData({
      showModal_login: false
    })
  },
  //登录蒙层打开
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
  //登录输入手机号
  inputphone: function(e) {
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
  //手机号验证码登录
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

        if (this.data.type == 1 || this.data.type == 2) {
          that.setData({
            showModal_num: true,
            showModal_login: false,
            islogin: true

          })
          wx.setStorageSync("islogin", this.data.islogin)
        }
        else if (this.data.type == 3) {
          that.setData({
            showModal_addr: true,
            showModal_login: false,
            islogin: true

          })
          wx.setStorageSync("islogin", this.data.islogin)
        }
      } else {
        wx.showToast({
          title: d.data.msg,
          icon: 'none',
          duration: 1000
        })
        console.log(d.data.msg)
      }

    })
  },

//获取微信绑定手机号
  getPhoneNumber: function (e) {
    var that = this
    //单微信获取测试
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    that.setData({
      type: type
    })
    //单微信获取测试结束
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
              if (this.data.type == 1 || this.data.type == 2) {
                that.setData({
                  showModal_num: true,
                  showModal_login: false,
                  islogin: true

                })
                wx.setStorageSync("islogin", this.data.islogin)
              } 
              else if (this.data.type == 3) {
                that.setData({
                  showModal_addr: true,
                  showModal_login: false,
                  islogin: true

                })
                wx.setStorageSync("islogin", this.data.islogin)
              }
            } else {

            }
            wx.hideLoading()
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
