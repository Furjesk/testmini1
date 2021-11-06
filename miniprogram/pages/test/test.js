// pages/test/test.js
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
  test_tap(e){
    // wx.cloud.callFunction({
    //   name: 'send',
    //   complete: res => {
    //     console.log('云函数: ', res)
    //     // let openid = res.result.openid;
    //     // console.log(openid);
    //     // 这里可以添加一些函数利用openid实现一些功能
    //     //this.judgeRusults(openid);
    //   }
    // })
    wx.cloud.callFunction({
      name: 'send',
    }).then(res=>{
      console.log('云函数cg: ', res)
    }).catch(err=>{
      console.log('云函数sb: ', err)
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