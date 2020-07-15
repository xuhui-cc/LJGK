// pages/video/video.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // var url
    var type = options.type
    that.setData({
      type:type
    })
    console.log(type)
    var params = {

    }
    app.ljgk.xcxGetZiliao(params).then(d => {
      if (d.data.status == 1) {
        that.setData({
          gkzl: d.data.data
        })
        console.log(that.data.gkzl)
      }
      if(type == 1){
        that.setData({
          url:that.data.gkzl.lkkqxts
        })
      }else if(type == 2){
        that.setData({
          url:that.data.gkzl.lkxcbsgl
        })
      }else if(type == 3){
        that.setData({
          url:that.data.gkzl.lkslgfjn
        })
      }
    })
  },

  to_video:function(e){
    let that = this 
    var vm = e.currentTarget.dataset.vm
    if(vm == 1){
      if(that.data.type == 1){
        wx.redirectTo({
          url: '/pages/video/video?type=' + 2,
        })
      }else{
        wx.redirectTo({
          url: '/pages/video/video?type=' + 1,
        })
      }
    }else{
      if(that.data.type == 3){
        wx.redirectTo({
          url: '/pages/video/video?type=' + 2,
        })
      }else{
        wx.redirectTo({
          url: '/pages/video/video?type=' + 3,
        })
      }
    }
  },

  openFile:function(e){
    let that = this
    var vf = e.currentTarget.dataset.vf
    if(vf == 4){
      that.open_file(that.data.gkzl.xckqtfjn)
    }else if(vf == 5){
      that.open_file(that.data.gkzl.slkqmy)
    }else if(vf == 6){
      that.open_file(that.data.gkzl.lkmsbd)
    }
  },

   //打开文档
   open_file:function(url){
    let that =this
    wx.downloadFile({
            url: url, //仅为示例，并非真实的资源
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
    if (wx.hideHomeButton) wx.hideHomeButton()
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