// pages/version4_1/version4_1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'请选择测评日期',
    cptime: ['08:00 - 09:00', '09:00 -10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00'],
    cp_time:"请选择测评时间",
    isftf:true,
    isptp:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      login: wx.getStorageSync("login"),
    })
    

    var dd = new Date();
    var now_y = dd.getFullYear();
    var now_m = dd.getMonth() + 1;//获取当前月份的日期 
    var now_d = dd.getDate()
    var now_date = now_y + '-' + (now_m  < 10 ? '0' + (now_m ) : now_m ) + '-' + (now_d  < 10 ? '0' + (now_d) : now_d)
    console.log(now_date)
    that.setData({
      now_date: now_date
    })
  },

  ftf:function(){
    let that = this
    that.setData({
      isftf: !that.data.isftf,
      isptp: !that.data.isptp
    })
    // if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')){
    //   that.setData({
    //     input_mask2:false
    //   })
    // }else{
    //   that.setData({
    //     input_mask2: true
    //   })
    // }
  },

  input_phone: function (e) {
    let that = this
    this.setData({
      phone: e.detail.value
    })
    if(that.data.phone.length <= 11){
      console.log(this.data.phone)
      // if ((that.data.kslx_select.indexOf('请选择') >= 0) || (that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.gw == '') || (that.data.phone == '')) {
      //   that.setData({
      //     input_mask2: false
      //   })
      // } else {
      //   that.setData({
      //     input_mask2: true
      //   })
      // }
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

  //考场选择蒙层判断
  showModal_num: function (e) {
    let that = this
    var type = e.currentTarget.dataset.type;
    var yx = wx.getStorageSync('yx')
    console.log(yx)
    console.log(type + 'type')
    // var url 
    that.setData({
      type:type
    })
    // if (that.data.kc_yes){
      if(type > 3){
        var params = {}
        //获取pdf资料

        var image1=[]
        var image2=[]
        var image3=[]
        app.ljgk.xcxGetZiliao(params).then(d => {
          if (d.data.status == 1) {
            for(var i=1;i<=d.data.data.xfkqtfjn.num;i++){
              var img_d = d.data.data.xfkqtfjn.pre + i + d.data.data.xfkqtfjn.tail
              image1.push(img_d)
            }
            for(var i=1;i<=d.data.data.slkqmy.num;i++){
              var img_d = d.data.data.slkqmy.pre + i + d.data.data.slkqmy.tail
              image2.push(img_d)
            }
            for(var i=1;i<=d.data.data.lkmsbd.num;i++){
              var img_d = d.data.data.lkmsbd.pre + i + d.data.data.lkmsbd.tail
              image3.push(img_d)
            }
            // console.log(image1)
            this.setData({
              gkzl: d.data.data,
              image1:image1,
              image2:image2,
              image3:image3,
            })
          }
          if(type == 4){
            wx.navigateTo({
              url: '/pages/cs_file/cs_file?image=' + that.data.image1,
            })
            
          }else if(type == 5){
            wx.navigateTo({
              url: '/pages/cs_file/cs_file?image=' + that.data.image2,
            })
          }else if(type == 6){
            if(!yx){
              var params = {
                "uid":wx.getStorageSync('uid')
              }
              app.ljgk.saveYixiang(params).then(d => {
                if (d.data.status == 1) {
                  console.log("意向成功")
                  wx.setStorageSync('yx', true)
                }
              })
            }
            wx.navigateTo({
              url: '/pages/cs_file/cs_file?image=' + that.data.image3,
            })
          }
          
        })
      }
      else {
        wx.navigateTo({
          url: '/pages/video/video?type=' + type,
        })
        
      }
    // }
    // else{
    //   this.setData({
    //     showModal_num: true
    //   })
    //   that.setData({
    //     click:false
    //   })
    // }
    
  },

  cp:function(e){
    let that = this
    var type = e.currentTarget.dataset.type;
    console.log(type + 'type')
    that.setData({
      type: type
    })
    // if (that.data.mask1_sub) {
      that.setData({
        mask2: true
      })
    // } else {
    //   that.setData({
    //     mask1: true
    //   })
    // }
   
  },
  del_mask: function () {
    let that = this
    
    
      that.setData({
        mask2: false
      })
      that.onLoad()
    
    
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

  //获取微信绑定手机号
  getPhoneNumber: function (e) {
    var that = this
    var type = e.currentTarget.dataset.type
    that.setData({
      type : type
    })
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
                  wx.setStorageSync('login', true);
                  that.setData({
                    login:true
                  })
                  // if(!that.data.kc_yes){
                    // that.setData({
                    //   showModal_num:true
                    // })
                  // }
                  that.showModal_num(e)
                  wx.setStorageSync('uid', d.data.uid);
                  
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
        } else {
          wx.hideLoading()
        }
      }
    })
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