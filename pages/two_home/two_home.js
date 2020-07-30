//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mask1:false,
    mask2: false,
    isftf:true,
    isptp:false,
    input_mask1:false,
    kslx: ['国考', '事业单位','国企','高校招聘面试','其他编制类面试'],
    kslx_select:"请选择考场类型",
    date:'请选择测评日期',
    cptime: ['08:00 - 09:00', '09:00 -10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00'],
    cp_time:"请选择测评时间",
    
    
  },
  //事件处理函数

  onLoad: function () {
    let that = this
  
    that.setData({
      islogin: wx.getStorageSync("islogin"),
      cp_sub:wx.getStorageSync("cp_sub")
    })


    

    
    var dd = new Date();
    var now_y = dd.getFullYear();
    var now_m = dd.getMonth() + 1;//获取当前月份的日期 
    var now_d = dd.getDate()
    var now_date = now_y + '-' + (now_m  < 10 ? '0' + (now_m ) : now_m ) + '-' + (now_d  < 10 ? '0' + (now_d) : now_d)


    // var now_date = now_y + "-" + now_m + "-" + now_d;
    console.log(now_date)
    that.setData({
      now_date: now_date
    })
    dd.setDate(dd.getDate() + 7);//获取AddDayCount天后的日期 
    var future_y = dd.getFullYear();
    var future_m = dd.getMonth() + 1;//获取当前月份的日期 
    var future_d = dd.getDate();
    var future_date = future_y + '-' + (future_m < 10 ? '0' + (future_m) : future_m) + '-' + (future_d < 10 ? '0' + (future_d) : future_d)
    // var future_date = future_y + "-" + future_m + "-" + future_d;
    console.log(future_date)
    that.setData({
      future_date: future_date
    })


    // var select_data = []

    

    
    
  },

  bindDateChange: function (e) {
    let that = this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    that.setData({
      date: e.detail.value
    })
    if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')) {
      that.setData({
        input_mask2: false
      })
    } else {
      that.setData({
        input_mask2: true
      })
    }
  },

  bindPickerChange: function (e) {
    let that =this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cp_time: that.data.cptime[e.detail.value]
    })
    if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')) {
      that.setData({
        input_mask2: false
      })
    } else {
      that.setData({
        input_mask2: true
      })
    }
  },

  cp:function(e){
    let that = this
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    that.setData({
      type: type,
      mask2: true
    })
    
      
   
    
    
   
  },

  input_gw: function (e) {
    let that = this
    this.setData({
      gw: e.detail.value
    })
    console.log(this.data.gw)
    if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')) {
      that.setData({
        input_mask2: false
      })
    } else {
      that.setData({
        input_mask2: true
      })
    }
  },

  input_phone: function (e) {
    let that = this
    this.setData({
      phone: e.detail.value
    })
    if(that.data.phone.length <= 11){
      console.log(this.data.phone)
      if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')) {
        that.setData({
          input_mask2: false
        })
      } else {
        that.setData({
          input_mask2: true
        })
      }
    }else{
      this.setData({
        phone: ""
      })
      wx.showToast({
        title: '请输入正确的手机号',
        icon: "none",
        duration: 1000
      })
    }
    
  },


  onShow: function () {
    this.onLoad()
  },


  show_mask1:function(e){
    let that = this
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    that.setData({
      type: type
    })
    if (that.data.mask1_sub) {
      wx.navigateTo({
        url: '/pages/two_v/two_v?type=' + that.data.type,
      })
      console.log(that.data.mask1_sub +'=================that.data.mask1_sub')
    } else {
      that.setData({
        mask1: true
      })
    }
    
  },


  mask1_submit:function(){
    let that = this

    var uid = wx.getStorageSync("uid")

   
      var params = {
        uid: uid,
        code: this.data.invite_code
      }
      //获取pdf文件
    app.ljgk.xcxSaveCode(params).then(d => {
        if (d.data.status == 1) {
          console.log(d.data.msg)
          console.log('邀请码是：' + this.data.invite_code)
          if (that.data.type == 1 || that.data.type == 2 || that.data.type == 3 || that.data.type == 4 || that.data.type == 5){
            wx.navigateTo({
              url: '/pages/two_v/two_v?type=' + that.data.type,
            })
                  }
                  else{
                    that.setData({
                      mask2: true
                    })
                  }

          
          that.setData({
            mask1_sub: true,
            mask1: false
          })
        }
        else {
          console.log('失败')
        }
      })
    
   
  },


  mask2_submit:function(){
    let that = this
    var uid = wx.getStorageSync("uid")
    var openid = wx.getStorageSync('openid')
    var kcname = wx.getStorageSync('kcname')
    var ykinfo = wx.getStorageSync('ykinfo')
    if(that.data.isftf){
      var type = "面对面测评" 
    }
    else{
      var type = "电话测评" 
    }

    wx.requestSubscribeMessage({
      tmplIds: ['dy0M5fdZJZFTYLJci49dQUlalnAjL3Im7nk3LrsXMMo'], // 此处可填写多个模板 ID，但低版本微信不兼容只能授权一个
      success(res) { 
        console.log(res)
        var params = {
          uid: uid,
          
        }
        
        app.ljgk.xcxPushMsg(params).then(d => {
          if (d.data.status == 1) {
            console.log(d.data.msg)
          
          }
          else {
            console.log('失败')
          }
        })
       
      }
    })
     var params = {
          uid: uid,
          examtype: that.data.kslx_select,
          position: that.data.gw,
          contact: that.data.phone,
          cptime: that.data.date + '  ' + that.data.cp_time,
          // type: type,

        }

        app.ljgk.xcxSaveCeping(params).then(d => {
          if (d.data.status == 1) {
            console.log(d.data.msg)

            that.setData({
              cp_sub: true,
              mask2: false
            })
            wx.setStorageSync("cp_sub", that.data.cp_sub)
            that.onLoad()
          }
          else {
            console.log('失败')
          }
        })
    
    
  },

  del_mask: function (e) {
    let that = this
    var del = e.currentTarget.dataset.del;
    if(del == 1){
      that.setData({
        mask1: false
      })
      that.onLoad()
    }else if(del == 2){
      that.setData({
        mask2: false
      })
      that.onLoad()
    }
    
  },

  ftf:function(){
    let that = this
    that.setData({
      isftf: !that.data.isftf,
      isptp: !that.data.isptp
    })
    if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')){
      that.setData({
        input_mask2:false
      })
    }else{
      that.setData({
        input_mask2: true
      })
    }
  },
  // ptp: function () {
  //   let that = this
  //   that.setData({
  //     ftf: !that.data.ftf,
  //     ptp: !that.data.ptp
  //   })
  // },

  input_mask1: function (e) {

    var invite_code = new RegExp('[0-9]', 'g');

    var iskcid = invite_code.exec(e.detail.value);


    if (iskcid) {
      if (e.detail.value.length == 4) {
        if (e.detail.value >= 1) {
        if (101 <= e.detail.value && e.detail.value <= 140) {
          this.setData({
            invite_code: e.detail.value,
            input_mask1: true
          })
        } else if (201 <= e.detail.value && e.detail.value <= 220) {
          this.setData({
            invite_code: e.detail.value,
            input_mask1: true
          })
        }
        else if (301 <= e.detail.value && e.detail.value <= 310) {
          this.setData({
            invite_code: e.detail.value,
            input_mask1: true
          })
        }
        else if (401 <= e.detail.value && e.detail.value <= 410) {
          this.setData({
            invite_code: e.detail.value,
            input_mask1: true
          })
        }
        }
        else {
          wx.showToast({
            title: "请输入正确的关键字",
            icon: 'none',
            duration: 500
          })
          this.setData({
            input_mask1: false
          })
        }
      } else {
        wx.showToast({
          title: "请输入正确的关键字",
          icon: 'none',
          duration: 500
        })
        this.setData({
          input_mask1: false
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
        invite_code: "",
        input_mask1: false
      })
    }
    console.log(this.data.invite_code + 'invite_code')


  },

  kclx_xl:function(){
    let that = this
    that.setData({
      kclx_xl:!that.data.kclx_xl
    })
  },

  kslx_select:function(e){
    let that = this
    var select = e.currentTarget.dataset.select;
    console.log(select)
    that.setData({
      kslx_select: select,
      kclx_xl: false
    })
    if ((that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')) {
      that.setData({
        input_mask2: false
      })
    } else {
      that.setData({
        input_mask2: true
      })
    }

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
          wx.login({
            success(res) {
              console.log("cccs.code" + res.code)

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
                  wx.setStorageSync('islogin', true)

                  // var params = {
                  //   "uid": d.data.uid
                  // }
                  // app.ljgk.xcxGetOpenid(params).then(d => {
                  //   if (d.data.status == 1) {
                  //     wx.setStorageSync('openid', d.data.data.xcx_openid);
                  //     wx.setStorageSync('kcname', d.data.data.kcname);
                  //     wx.setStorageSync('ykinfo', d.data.data.ykinfo);
                  //   }
                  //   else{
                  //     console.log('openID失败')
                  //   }
                  // })
                  // if (type == 1 || type == 2 || type == 3 || type == 4 || type == 5){
                    that.setData({
                      mask1: true
                    })
                  // }
                  // else{
                  //   that.setData({
                  //     mask2: true
                  //   })
                  // }
                  


                } else {
                  wx.showToast({
                    title: "登陆失败",
                    icon: 'none',
                    duration: 1000
                  })
                  console.log(d.data.msg)
                }

              })
              wx.hideLoading()
            } 
          })
        }
      }
    })
  },
})