// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      status:["未审核","已审核","已拒绝"],
      array:[{
        id:1,
        title:"生病请假",
        content:"病假工资由用人单位按不低于当地最低工资标准80%自主确定支付标准。",
        date:"2017-12-02",
        days:0.5,
        status:0
      },{
        id:2,
        title: "装病请假",
        content:"病假工资由用人单位按不低于当地最低工资标准80%自主确定支付标准。",
        date: "2017-12-03",
        days: 3,
        status: 2
      },{
        id:3,
        title: "智能请假",
        content:"病假工资由用人单位按不低于当地最低工资标准80%自主确定支付标准。",
        date: "2017-12-04",
        days: 2,
        status: 1
      }, {
        id:4,
        title: "有事请假",
        content: "病假工资由用人单位按不低于当地最低工资标准80%自主确定支付标准。",
        date: "2017-12-04",
        days: 1,
        status: 1
      }, {
        id: 5,
        title: "有事请假",
        content: "病假工资由用人单位按不低于当地最低工资标准80%自主确定支付标准。",
        date: "2017-12-04",
        days: 1,
        status: 1
      }, {
        id: 6,
        title: "有事请假",
        content: "病假工资由用人单位按不低于当地最低工资标准80%自主确定支付标准。",
        date: "2017-12-04",
        days: 1,
        status: 1
      }]
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
  
  }
})