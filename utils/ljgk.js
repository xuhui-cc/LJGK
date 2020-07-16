const URI = 'http://cs.szgk.cn/api.php'    //测试接口

// const URI = 'https://www.szgk.cn/api.php'    //正式接口


const fetch = require('./fetch')

//提交考场
function xcxAddKaochang(params) {
  return fetch.ljgkfetch(URI, 'xcxAddKaochang', params)
}
//面试意向
function saveYixiang(params) {
  return fetch.ljgkfetch(URI, 'xcxsaveyixiang', params)
}
//PDF、视频获取
function xcxGetZiliao(params) {
  return fetch.ljgkfetch(URI, 'xcxGetZiliao', params)
}
//保存收货地址
function xcxAddAddress(params) {
  return fetch.ljgkfetch(URI, 'xcxAddAddress', params)
}
//省考课程详情
function xcxGetCourseInfo(params) {
  return fetch.ljgkfetch(URI, 'xcxGetCourseInfo', params)
}
//登陆后省考课程详情
function xcxGetCourseInfo1(params) {
  return fetch.ljgkfetch(URI, 'xcxGetCourseInfo1', params)
}
//获取验证码
function xcxMyGetyzm(params) {
  return fetch.ljgkfetch(URI, 'loginSendSMS', params)
}
//验证码登录
function loginRegister(params) {
  return fetch.ljgkfetch(URI, 'loginRegister', params)
}
//微信登录 
function loginregister(params) {
  return fetch.ljgkfetch(URI, "xcxljgklogin", params)
}
//看视频kan_video 
function xcxkanVideo(params) {
  return fetch.ljgkfetch(URI, 'xcxGoStudy', params)
}
//断点续播时间节点 
function xcxsaveStudyRecord(params) {
  return fetch.ljgkfetch(URI, 'xcxsaveStudyRecord', params)
}
//邀请码
function xcxSaveCode(params) {
  return fetch.ljgkfetch(URI, 'xcxSaveCode', params)
}
//测评信息
function xcxSaveCeping(params) {
  return fetch.ljgkfetch(URI, 'xcxSaveCeping', params)
}
//面试视频
function xcxGetVideoList(params) {
  return fetch.ljgkfetch(URI, 'xcxGetVideoList', params)
}
//OPENID
function xcxGetOpenid(params) {
  return fetch.ljgkfetch(URI, 'xcxGetOpenid', params)
}
//OPENID
function xcxPushMsg(params) {
  return fetch.ljgkfetch(URI, 'xcxPushMsg', params)
}




module.exports = { xcxAddKaochang, xcxGetZiliao, xcxAddAddress, xcxGetCourseInfo, xcxGetCourseInfo1, xcxMyGetyzm, loginRegister, loginregister, xcxkanVideo, xcxsaveStudyRecord, xcxSaveCeping, xcxSaveCode, xcxGetVideoList, xcxGetOpenid, xcxPushMsg,saveYixiang}