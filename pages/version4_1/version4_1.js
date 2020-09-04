// pages/version4_1/version4_1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  // 打开的文件路径 在onShow中删除文件
  openFilePath: '',
  data: {
    date:'请选择测评日期',
    cptime: ['08:00 - 09:00', '09:00 -10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'],
    cp_time:"请选择测评时间",
    isftf:true,
    isptp:false,
    showModal_num1:true
    // cp_sub:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // that.setData({
    //   showModal_num1:true
    // })
    

    // var dd = new Date();
    // var now_y = dd.getFullYear();
    // var now_m = dd.getMonth() + 1;//获取当前月份的日期 
    // var now_d = dd.getDate()
    
    // var now_date = now_y + '-' + (now_m  < 10 ? '0' + (now_m ) : now_m ) + '-' + (now_d  < 10 ? '0' + (now_d) : now_d)

    var day3 = new Date();
 day3.setTime(day3.getTime()+24*60*60*1000);
 var now_date = day3.getFullYear()+"-" + (day3.getMonth()+1) + "-" + day3.getDate();
    console.log(now_date)
    that.setData({
      now_date: now_date
    })
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

  iknow:function(){
    let that = this
       this.setData({
        iknow: true,
        showModal_num1:false
       })
      //  if(that.data.type > 3){
      //   var params = {}
      //   //获取pdf资料

      //   var image1=[]
      //   var image2=[]
      //   var image3=[]
      //   var image4=[]
      //   app.ljgk.xcxGetZiliao(params).then(d => {
      //     if (d.data.status == 1) {
      //       for(var i=1;i<=d.data.data.xfkqtfjn.num;i++){
      //         var img_d = d.data.data.xfkqtfjn.pre + i + d.data.data.xfkqtfjn.tail
      //         image1.push(img_d)
      //       }
      //       for(var i=1;i<=d.data.data.slkqmy.num;i++){
      //         var img_d = d.data.data.slkqmy.pre + i + d.data.data.slkqmy.tail
      //         image2.push(img_d)
      //       }
      //       for(var i=1;i<=d.data.data.lkmsbd.num;i++){
      //         var img_d = d.data.data.lkmsbd.pre + i + d.data.data.lkmsbd.tail
      //         image3.push(img_d)
      //       }
      //       for(var i=1;i<=d.data.data.sydwms.num;i++){
      //         var img_d = d.data.data.sydwms.pre + i + d.data.data.sydwms.tail
      //         image4.push(img_d)
      //       }
      //       // console.log(image1)
      //       this.setData({
      //         gkzl: d.data.data,
      //         image1:image1,
      //         image2:image2,
      //         image3:image3,
      //         image4:image4,
      //       })
      //     }
      //     if(that.data.type == 4){
      //       wx.navigateTo({
      //         url: '/pages/cs_file/cs_file?image=' + that.data.image1,
      //       })
            
      //     }else if(that.data.type == 5){
      //       wx.navigateTo({
      //         url: '/pages/cs_file/cs_file?image=' + that.data.image2,
      //       })
      //     }else if(that.data.type == 6){
      //       if(!that.data.yx){
      //         var params = {
      //           "uid":wx.getStorageSync('uid')
      //         }
      //         app.ljgk.saveYixiang(params).then(d => {
      //           if (d.data.status == 1) {
      //             console.log("意向成功")
      //             wx.setStorageSync('yx', true)
      //           }
      //         })
      //       }
      //       wx.navigateTo({
      //         url: '/pages/cs_file/cs_file?image=' + that.data.image3,
      //       })
      //     }else if(that.data.type == 7){
      //       // that.open_file(that.data.gkzl.sydwms,7)
      //       wx.navigateTo({
      //         url: '/pages/cs_file/cs_file?image=' + that.data.image4,
      //       })
      //     }
          
      //   })
      // }
      // else {
      //   wx.navigateTo({
      //     url: '/pages/video/video?type=' + that.data.type,
      //   })
        
      // }
      //  console.log("考场选择" + this.data.kc_yes)
       wx.setStorageSync('iknow', this.data.iknow)
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
             if(that.data.type > 3){
              var params = {}
              //获取pdf资料
      
              var image1=[]
              var image2=[]
              var image3=[]
              var image4=[]
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
                  for(var i=1;i<=d.data.data.sydwms.num;i++){
                    var img_d = d.data.data.sydwms.pre + i + d.data.data.sydwms.tail
                    image4.push(img_d)
                  }
                  // console.log(image1)
                  this.setData({
                    gkzl: d.data.data,
                    image1:image1,
                    image2:image2,
                    image3:image3,
                    image4:image4,
                  })
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
                }else if(that.data.type == 7){
                  // that.open_file(that.data.gkzl.sydwms,7)
                  wx.navigateTo({
                    url: '/pages/cs_file/cs_file?image=' + that.data.image4,
                  })
                }
                
              })
            }
            else {
              wx.navigateTo({
                url: '/pages/video/video?type=' + that.data.type,
              })
              
            }
             
           }
           else {
             console.log('失败')
           }
         })
         
         
         this.setData({
           showModal_num: false
         })
       
       
     
   },

   //考场蒙层关闭按钮
  del_num: function () {
    this.setData({
      showModal_num: false
    })
  },

  ftf:function(){
    let that = this
    that.setData({
      isftf: !that.data.isftf,
      isptp: !that.data.isptp
    })
    if ((that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.phone == '')){
      that.setData({
        input_mask2:false
      })
    }else{
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
      if ((that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0)  || (that.data.phone == '')) {
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

  //考场选择蒙层判断
  showModal_num: function (e) {
    let that = this
    var type = e.currentTarget.dataset.type;
    var yx = wx.getStorageSync('yx')
    console.log(yx)
    that.setData({
      yx:yx
    })
    console.log(type + 'type')
    // var url 
    that.setData({
      type:type
    })
    // if (that.data.kc_yes){
    if (that.data.iknow){
      if(type > 3){
        var params = {}
        //获取pdf资料

        var image1=[]
        var image2=[]
        var image3=[]
        var image4=[]
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
            for(var i=1;i<=d.data.data.sydwms.num;i++){
              var img_d = d.data.data.sydwms.pre + i + d.data.data.sydwms.tail
              image4.push(img_d)
            }
            // console.log(image1)
            this.setData({
              gkzl: d.data.data,
              image1:image1,
              image2:image2,
              image3:image3,
              image4:image4,
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
          }else if(type == 7){
            // that.open_file(that.data.gkzl.sydwms,7)
            wx.navigateTo({
              url: '/pages/cs_file/cs_file?image=' + that.data.image4,
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
        showModal_num1: true
      })
      
    }
    
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
      // that.onLoad()
    
    
  },

  input_phone: function (e) {
    let that = this
    this.setData({
      phone: e.detail.value
    })
    if(that.data.phone.length <= 11){
      console.log(this.data.phone)
      if ((that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.phone == '')) {
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

  bindDateChange: function (e) {
    let that = this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    that.setData({
      date: e.detail.value
    })
    if ((that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0)  || (that.data.phone == '')) {
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
    if ((that.data.date.indexOf('请选择') >= 0) || (that.data.cp_time.indexOf('请选择') >= 0) || (that.data.phone == '')) {
      that.setData({
        input_mask2: false
      })
    } else {
      that.setData({
        input_mask2: true
      })
    }
  },

  mask2_submit:function(){
    let that = this
    var uid = wx.getStorageSync("uid")
    // var openid = wx.getStorageSync('openid')
    // var kcname = wx.getStorageSync('kcname')
    // var ykinfo = wx.getStorageSync('ykinfo')
    if(that.data.isftf){
      var type = "线上测评" 
    }
    else{
      var type = "线下测评" 
    }

    // wx.requestSubscribeMessage({
    //   tmplIds: ['dy0M5fdZJZFTYLJci49dQUlalnAjL3Im7nk3LrsXMMo'], // 此处可填写多个模板 ID，但低版本微信不兼容只能授权一个
    //   success(res) { 
    //     console.log(res)
    //     var params = {
    //       uid: uid,
          
    //     }
        
    //     app.ljgk.xcxPushMsg(params).then(d => {
    //       if (d.data.status == 1) {
    //         console.log(d.data.msg)
          
    //       }
    //       else {
    //         console.log('失败')
    //       }
    //     })
       
    //   }
    // })
     var params = {
          uid: uid,
          // examtype: that.data.kslx_select,
          type: type,
          contact: that.data.phone,
          cptime: that.data.date + '  ' + that.data.cp_time,
          

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

  //打开文档
  open_file:function(url,type){
    let that = this
    that.clearLocalFile()
    wx.showLoading({
      title: '资料打开中...',
    })
    console.log(url,"url")
    var fileName
    
    if(type == 7){
      fileName =  "事业单位面试.pdf"
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
              // that.setData({
              //   click:false
              // })
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
          // that.setData({
          //   click:false
          // })
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
    let that = this
    that.setData({
      login: wx.getStorageSync("login"),
      cp_sub:wx.getStorageSync("cp_sub"),
    })
    console.log(that.data.cp_sub,"cp_sub")
    var params = {}
    app.ljgk.xcxGetZiliao(params).then(d => {
      if (d.data.status == 1) {
        that.setData({
          gkzl:d.data.data,
        })
      }
    })
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
  //获取微信绑定手机号登录
  getPhoneNumber: function (e) {
    var that = this
    var type = e.currentTarget.dataset.type
    if (e.detail.errMsg == "getPhoneNumber:ok") {

      let iv = encodeURIComponent(e.detail.iv);
      let encryptedData = encodeURIComponent(e.detail.encryptedData);
      let code = app.getWxLoginCode()
      var params = {
        "code": code,
        "iv": iv,
        "encryptedData": encryptedData
      }
      
      app.ljgk.xcxjwlogin1(params).then(d => {
        console.log(d)
        if (d.data.status == 0) {
          wx.setStorageSync('token', d.data.token);
          wx.setStorageSync('login', true);
          that.setData({
            login:true
          })
          if(type == 8){
            that.cp(e)
          }else{
            that.showModal_num(e)
          }
          
          wx.setStorageSync('uid', d.data.uid);
        } else {
          wx.showToast({
            title: "登录失败",
            icon: 'none',
            duration: 1000
          })
          
          console.log(d.data.msg)
        }
      })
    }
  },

  // //获取微信绑定手机号
  // getPhoneNumber: function (e) {
  //   var that = this
  //   var type = e.currentTarget.dataset.type
  //   that.setData({
  //     type : type
  //   })
  //   wx.login({
  //     success: res => {

  //       if (e.detail.errMsg == "getPhoneNumber:ok") {
  //         wx.showLoading({
  //           title: '登录中...',
  //         })
  //         wx.login({
  //           success(res) {
  //             console.log("cccs.code" + res.code)

  //             let iv = encodeURIComponent(e.detail.iv); 
  //             let encryptedData = encodeURIComponent(e.detail.encryptedData);
  //             let code = res.code
  //             var params = {
  //               "code": code,
  //               "iv": iv,
  //               "encryptedData": encryptedData
  //             }
  //             console.log(params)
  //             app.ljgk.loginregister(params).then(d => {
  //               if (d.data.status == 0) {
  //                 wx.setStorageSync('token', d.data.token);
  //                 wx.setStorageSync('login', true);
  //                 that.setData({
  //                   login:true
  //                 })
  //                 // if(!that.data.kc_yes){
  //                   // that.setData({
  //                   //   showModal_num:true
  //                   // })
  //                 // }
  //                 that.showModal_num(e)
  //                 wx.setStorageSync('uid', d.data.uid);
                  
  //               } else {
  //                 wx.showToast({
  //                   title: "登陆失败",
  //                   icon: 'none',
  //                   duration: 1000
  //                 })
  //                 console.log(d.data.msg)
  //               }
                
  //             })
  //             wx.hideLoading()
  //           } 
  //         })
  //       } else {
  //         wx.hideLoading()
  //       }
  //     }
  //   })
  // },

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