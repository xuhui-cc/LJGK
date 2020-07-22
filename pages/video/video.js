// pages/video/video.js
const app = getApp()
Page({

  // 打开的文件路径 在onShow中删除文件
  openFilePath: '',

  /**
   * 页面的初始数据
   */
  
  data: {
    click:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    this.clearLocalFile()
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
    that.setData({
      click:true
    })
    var vf = e.currentTarget.dataset.vf
    if(vf == 4){
      that.open_file(that.data.gkzl.xckqtfjn,vf)
    }else if(vf == 5){
      that.open_file(that.data.gkzl.slkqmy,vf)
    }else if(vf == 6){
      if(!wx.getStorageSync('yx')){
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
      that.open_file(that.data.gkzl.lkmsbd,vf)
    }
  },

   //打开文档
  open_file:function(url,type){
    let that =this
    wx.showLoading({
      title: '资料打开中...',
    })
    console.log(url,"url")
    var fileName
    
    if(type == 4){
      fileName =  "行测考前提分锦囊.pdf"
    }else if(type == 5){
      fileName =  "申论考前密押.pdf"
    }
    else if(type == 6){
      fileName =  "联考面试宝典.pdf"
    }

    
      that.setData({
        fileName: fileName
      })
      let customFilePath = wx.env.USER_DATA_PATH + "/" + that.data.fileName
      console.log('得到自定义路径：')
      console.log(customFilePath)

      wx.downloadFile({
        url: url, //仅为示例，并非真实的资源
        filePath: customFilePath,
        success(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容

          console.log(res)
          var filePath = res.filePath
          console.log('返回自定义路径：')
          console.log(filePath)

          that.openFilePath = filePath
          wx.openDocument({
            showMenu: true,
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
              wx.hideLoading()
              that.setData({
                click:false
              })
            },
            fail: function (res) {
              console.log("打开文档失败");
              console.log(res)
              wx.hideLoading({
                complete: (res) => {
                  wx.showToast({
                    title: '文件打开失败',
                    icon: 'none'
                  })
                },
              })
              that.setData({
                click:false
              })
            },
            complete: function (res) {
              console.log("complete");
              console.log(res)
            }
          })
        },
        fail: function (res) {
          console.log('文件下载失败')
          console.log(res)
          wx.hideLoading({
            complete: (res) => {
              wx.showToast({
                title: '文件下载失败',
                icon: 'none'
              })
            },
          })
          that.setData({
            click:false
          })
        }
      })
  },

  /**
   * 清除本地保存的文件
  */
 clearLocalFile: function () {
  let that = this

  if (this.openFilePath == '') {
    return
  }

  let fs = wx.getFileSystemManager()
  let filePath = this.openFilePath
  fs.unlink({
    filePath: filePath,
    success(res) {
      console.log("文件删除成功" + filePath)
      that.openFilePath = ''
    },
    fail(res) {
      console.log("文件删除失败" + filePath)
      console.log(res)
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
    // if (wx.hideHomeButton) wx.hideHomeButton()
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.clearLocalFile()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.clearLocalFile()
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