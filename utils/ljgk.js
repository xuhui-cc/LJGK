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


module.exports = { xcxGetKcList, xcxGetZiliao, xcxAddAddress, xcxGetCourseInfo}