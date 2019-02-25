// pages/page1/ClassRoom/ClassRoom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "ClassRoom":[]
  },

  /**
   * 生命周期函数--监听页面加载
   */


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

  },
  // onload: function (options) {
  //   var that = this
  //   wx.request({
  //     url: 'https://www.easy-mock.com/mock/5c41dc83e8472f5b61a58af7/example/ClassRoom', 
  //     data: {
  //       x: '',
  //       y: ''
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success: function (res) {
  //       console.log(res.data.data.ClassRoom)
  //       // that.setData({
  //       //   data : res.data,
  //         //res代表success函数的事件对，data是固定的，list是数组
  //       // })

  //     },
    
  //   })
   
  // },
  send: function () {
    var that=this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5c41dc83e8472f5b61a58af7/example/ClassRoom',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        that.setData({
           ClassRoom :res.data.data.ClassRoom
        })
        console.log(res.data.data.ClassRoom)
      },

    })
    }
   
})