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
  del_num: function () {
    this.setData({
      showModal_num: false
    })
  },
})
