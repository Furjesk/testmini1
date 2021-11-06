// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async (event, context) => {
  try {
    const openid = cloud.getWXContext().OPENID;
    const result = await cloud.openapi.subscribeMessage.send({
        "touser": openid,
        "page": 'index',
        "lang": 'zh_CN',
        "data": {
          "thing1": {
            "value": '结婚纪念日'
          },
          "time2": {
            "value": '2015年01月05日'
          },
          "thing3": {
            "value": '纪念日'
          },
          "time4": {
            "value": '2021年01月05日'
          },
          "thing5": {
            "value": '一周后'
          }
        },
        "templateId": 'RFl3C3fwezJjZJypYG6tTzvkG4zWEMDeJytcArIPGsU',
        "miniprogramState": 'developer'
      })
    return result
  } catch (err) {
    return err
  }
}