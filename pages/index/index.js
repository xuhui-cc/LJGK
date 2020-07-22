//index.js
//获取应用实例
const app = getApp()

Page({
  // 打开的文件路径 在onShow中删除文件
  openFilePath: '',
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
    input_kc: false,    //考场初始判断
    fileName: "",
    click:false,
  },
  //事件处理函数
  
  onLoad: function () {
    let that = this
    that.setData({
      login: wx.getStorageSync("login"),
      kc_yes: wx.getStorageSync("kc_yes"),
    })
    

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
  

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow")
    
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
                  if(!that.data.kc_yes){
                    that.setData({
                      showModal_num:true
                    })
                  }
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

  to_detail:function(){
    let that= this
    if(!that.data.kc_yes){
      that.setData({
        showModal_num:true
      })
    }else{
      console.log("关键字已输入")
    }
  },


  input_kc: function(e) {

    var regkcid = new RegExp('[0-9]', 'g');

    var iskcid = regkcid.exec(e.detail.value);
    if (iskcid) {
      if (e.detail.value.length == 4) {
        if (e.detail.value >= 1 ){
          if (101 <= e.detail.value && e.detail.value <= 199) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } else if (201 <= e.detail.value && e.detail.value  <= 299) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (301 <= e.detail.value && e.detail.value  <= 399) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (401 <= e.detail.value && e.detail.value  <= 499) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (501 <= e.detail.value && e.detail.value  <= 599) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (601 <= e.detail.value && e.detail.value  <= 699) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } else if (701 <= e.detail.value && e.detail.value  <= 799) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (801 <= e.detail.value && e.detail.value  <= 899) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (901 <= e.detail.value && e.detail.value  <= 999) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1001 <= e.detail.value && e.detail.value  <= 1099) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1101 <= e.detail.value && e.detail.value  <= 1199) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1201 <= e.detail.value && e.detail.value  <= 1299) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1301 <= e.detail.value && e.detail.value  <= 1399) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1401 <= e.detail.value && e.detail.value  <= 1499) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1501 <= e.detail.value && e.detail.value  <= 1599) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1601 <= e.detail.value && e.detail.value  <= 1699) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1701 <= e.detail.value && e.detail.value  <= 1799) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1801 <= e.detail.value && e.detail.value  <= 1899) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (1901 <= e.detail.value && e.detail.value  <= 1999) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2001 <= e.detail.value && e.detail.value  <= 2099) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2101 <= e.detail.value && e.detail.value  <= 2199) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2201 <= e.detail.value && e.detail.value  <= 2299) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2301 <= e.detail.value && e.detail.value  <= 2399) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2401 <= e.detail.value && e.detail.value  <= 2499) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2501 <= e.detail.value && e.detail.value  <= 2599) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else if (2601 <= e.detail.value && e.detail.value  <= 2699) {
            this.setData({
              kcid: e.detail.value,
              input_kc: true
            })
          } 
          else  {
            wx.showToast({
              title: "请输入正确的关键字",
              icon: 'none',
              duration: 500
            })
            this.setData({
              input_kc: false
            })
          }
        }else{
          wx.showToast({
            title: "请输入正确的关键字",
            icon: 'none',
            duration: 500
          })
          this.setData({
            input_kc: false
          })
        }
    }else{
      wx.showToast({
        title: "请输入正确的关键字",
        icon: 'none',
        duration: 500
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
        duration: 2000
      })
      this.setData({
        kcid: "",
        input_kc: false
      })
    }
    console.log(this.data.kcid + 'kcid')
    
  },

  cs_img:function(url){
    let that = this
    
    var image = []
    for(var i=1;i<=url.num;i++){
      var img_url = url.pre + i + url.tail
      image.push(img_url)
    }
    // image.push(arr[0])
    wx.previewImage({
      current: image[0],
      urls: image
    })
    // let that = this
    // var arr_img = []
    // for(var i=1;i<=url.num;i++){
    //   var img_url = url.pre + i + url.tail
    //   arr_img.push(img_url)
    // }
    // that.setData({
    //   arr_img:arr_img
    // })
    // that.previewImage(that.data.arr_img)
  },

   //打开图片
   previewImage: function (arr) {
    let that = this
    
    var image = []

    image.push(arr[0])
    wx.previewImage({
      current: image[0],
      urls: image
    })

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
   let that = this
      this.setData({
        kc_yes: true
      })
      console.log("考场选择" + this.data.kc_yes)
      wx.setStorageSync('kc_yes', this.data.kc_yes)
      var uid = wx.getStorageSync("uid")
        var params = {
          uid: uid,
          kcid: this.data.kcid
        }
        
        app.ljgk.xcxAddKaochang(params).then(d => {
          if (d.data.status == 1) {
            console.log(d.data.msg +'msg,addkc')
            console.log('考场号：' + this.data.kcid)
            if(that.data.type >3){
              var params1 = {}
              var image1=[]
              var image2=[]
              var image3=[]
            app.ljgk.xcxGetZiliao(params1).then(d => {
              if (d.data.status == 1) {
                
                for(var i=1;i<=d.data.data.slkqmy.num;i++){
                  var img_d = d.data.data.slkqmy.pre + i + d.data.data.slkqmy.tail
                  image1.push(img_d)
                }
                for(var i=1;i<=d.data.data.lkmsbd.num;i++){
                  var img_d = d.data.data.lkmsbd.pre + i + d.data.data.lkmsbd.tail
                  image2.push(img_d)
                }
                for(var i=1;i<=d.data.data.xfkqtfjn.num;i++){
                  var img_d = d.data.data.xfkqtfjn.pre + i + d.data.data.xfkqtfjn.tail
                  image3.push(img_d)
                }
                console.log(image1)
                this.setData({
                  gkzl: d.data.data,
                  image1:image1,
                  image2:image2,
                  image3:image3,
                })
                console.log(this.data.gkzl + 'gkzl')
              }
              if(that.data.type == 4){
                wx.navigateTo({
                  url: '/pages/cs_file/cs_file?image=' + that.data.image1,
                })
                
              }else if(that.data.type == 5){
                wx.navigateTo({
                  url: '/pages/cs_file/cs_file?image=' + that.data.image2,
                })
              }else if(that.data.type == 6){
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
            }else{
              wx.navigateTo({
                url: '/pages/video/video?type=' + that.data.type,
              })
            }
            
          }
          else {
            console.log('失败')
          }
        })
        
        // wx.navigateTo({
        //   url: '/pages/pdf/pdf',
        // })
        this.setData({
          showModal_num: false
        })
      
      
    
  },
  //考场选择蒙层判断
  showModal_num: function (e) {
    let that = this
    that.setData({
      click:true
    })
    var type = e.currentTarget.dataset.type;
    var yx = wx.getStorageSync('yx')
    console.log(type + 'type')
    var url 
    that.setData({
      type:type
    })
    if (that.data.kc_yes){
      if(type > 3){
        var params = {}
        //获取pdf资料

        var image1=[]
        var image2=[]
        var image3=[]
        app.ljgk.xcxGetZiliao(params).then(d => {
          if (d.data.status == 1) {
            for(var i=1;i<=d.data.data.slkqmy.num;i++){
              var img_d = d.data.data.slkqmy.pre + i + d.data.data.slkqmy.tail
              image2.push(img_d)
            }
            for(var i=1;i<=d.data.data.lkmsbd.num;i++){
              var img_d = d.data.data.lkmsbd.pre + i + d.data.data.lkmsbd.tail
              image3.push(img_d)
            }
            for(var i=1;i<=d.data.data.xfkqtfjn.num;i++){
              var img_d = d.data.data.xfkqtfjn.pre + i + d.data.data.xfkqtfjn.tail
              image1.push(img_d)
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
    }
    else{
      this.setData({
        showModal_num: true
      })
      that.setData({
        click:false
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      click:false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      click:false
    })
  },

  //web_view 文件打开跳转
  to_webView:function(url){
    wx.navigateTo({
      url: '/pages/web_file/web_file?url=' + url,
    })
  },

  //打开文档
  open_file:function(url,type){
    let that =this
    that.clearLocalFile()
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
              // console.log(res)
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
  //考场蒙层关闭按钮
  del_num: function () {
    this.setData({
      showModal_num: false
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
    console.log(uid + 'uid')
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
