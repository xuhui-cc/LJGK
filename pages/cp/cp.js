// pages/cp/cp.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isftf: true,
    isptp: false,
    kslx: ['国考', '事业单位', '国企', '高校招聘面试', '其他编制类面试'],
    kslx_select: "请选择考场类型",
    date: '请选择测评日期',
    cptime: ['08:00 - 09:00', '09:00 -10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00'],
    cp_time: "请选择测评时间"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    var dd = new Date();
    var now_y = dd.getFullYear();
    var now_m = dd.getMonth() + 1;//获取当前月份的日期 
    var now_d = dd.getDate()
    var now_date = now_y + '-' + (now_m < 10 ? '0' + (now_m) : now_m) + '-' + (now_d < 10 ? '0' + (now_d) : now_d)
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
  },

  back:function(){
    wx.navigateBack({
      delta: 1
    })
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
    let that = this
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
    if (that.data.phone.length <= 11) {
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
    } else {
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
  ftf: function () {
    let that = this
    that.setData({
      isftf: !that.data.isftf,
      isptp: !that.data.isptp
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

  kclx_xl: function () {
    let that = this
    that.setData({
      kclx_xl: !that.data.kclx_xl
    })
  },

  kslx_select: function (e) {
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

  mask2_submit: function () {
    let that = this
    var uid = wx.getStorageSync("uid")
    if (that.data.isftf) {
      var type = "面对面测评"
    }
    else {
      var type = "电话测评"
    }
    var params = {
      uid: uid,
      examtype: this.data.kslx_select,
      position: this.data.gw,
      contact: this.data.phone,
      cptime: this.data.date + '  ' + this.data.cp_time,
      type: type,

    }

    app.ljgk.xcxSaveCeping(params).then(d => {
      if (d.data.status == 1) {
        console.log(d.data.msg)

        that.setData({
          cp_sub: true,
          
        })
        wx.setStorageSync("cp_sub", that.data.cp_sub)
        wx.navigateBack({
          delta: 1
        })
      }
      else {
        console.log('失败')
      }
    })
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})