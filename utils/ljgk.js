const URI = 'http://cs.szgk.cn/api.php'


const fetch = require('./fetch')

//考场获取
function xcxGetKcList(params) {
  return fetch.ljgkfetch(URI, 'xcxGetKcList', params)
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


module.exports = { xcxGetKcList, xcxGetZiliao, xcxAddAddress, xcxGetCourseInfo, xcxMyGetyzm, loginRegister, loginregister, xcxkanVideo, xcxsaveStudyRecord}