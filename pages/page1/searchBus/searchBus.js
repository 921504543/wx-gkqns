//pages/searchBus/searchBus.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
       Areas: ['燕山校区', '舜耕校区', '圣井校区', '明水校区'],
        AreaIndex:0,
      Areas1: ['燕山校区', '舜耕校区', '圣井校区','明水校区'],
        AreaIndex1:0,
      Schedule:['周一至周五','周末'],
        ScheduleIndex:0,
      ScheduleArry:[
        {//0
        time: '7:00',
        area:'舜耕校区-->圣井校区',
          hidden:'true'
         },
        {//1
        time:'12:20',
        area:'圣井校区-->舜耕校区',
          hidden:'true'
        },
        {//2
          time:'17:40',
          area:'圣井校区-->舜耕校区',
          hidden: 'true'
        },
        {//3
          time: '7:20',
          area: '燕山校区-->圣井校区',
          hidden: 'true'
        },
        {//4
          time: '7:15',
          area: '燕山校区-->明水校区',
          hidden: 'true'
        },
        {//5
          time: '11:55',
          area: '明水校区-->圣井校区',
          hidden:'true'
        },
        {//6
          time: '12:30',//20
          area: '圣井校区-->舜耕校区',
          hidden: 'true'
        },
        {//7
          time: '12:00',
          area: '明水校区-->燕山校区',
          hidden: 'true'
        },
        {//8
          time: '17:00',
          area: '明水校区-->燕山校区',
          hidden: 'true'
        },
        {//9
          time: '18:00',
          area: '燕山校区-->舜耕校区',
          hidden: 'true'
        },
        // 周末
        {//10
          time: '6:50',
          area: '舜耕校区-->圣井校区',
          hidden: 'true'
        },
        {//11
          time: '7:20',
          area: '舜耕校区-->圣井校区',
          hidden: 'true'
        },
        {//12
          time: '12:50',
          area: '舜耕校区-->圣井校区',
          hidden: 'true'
        },
      {//13
            time: '12:20',
            area: '圣井校区-->舜耕校区',
            hidden: 'true'
      },
      {//14
            time: '12:20',
            area: '圣井校区-->舜耕校区',
            hidden: 'true'
      },     
      {//15
            time: '6:50',
            area: '舜耕校区-->圣井校区',
            hidden: 'true'
      },     
      {//16
            time: '7:20',
            area: '舜耕校区-->圣井校区',
            hidden: 'true'
      },
        // 周末
        {//17
          time: '13:00',
          area: '舜耕校区-->圣井校区',
          hidden: 'true'
        },
        {//18
          time: '12:20',//10
          area: '圣井校区-->舜耕校区',
          hidden: 'true'
        },
        {//19
          time: '17:40',
          area: '圣井校区-->舜耕校区',
          hidden: 'true'
        },
        {//20
          time: '7:20',
          area: '燕山校区-->明水校区',
          hidden: 'true'
        },
        // 周六
        {//21
          time: '13:00(周六),12:30(周日)',
          area: '燕山校区-->明水校区',
          hidden: 'true'
        },
        {//22
          time: '12:00',
          area: '明水校区-->燕山校区',
          hidden: 'true'
        },
        {//23
          time: '17:00',
          area: '明水校区-->燕山校区',
          hidden: 'true'
        },
      {//24
            time: '7:20',
            area: '燕山校区-->明水校区',
            hidden: 'true'
      },  
      {//25
            time: '12:30',
            area: '燕山校区-->明水校区',
            hidden: 'true'
      },  
      {//26
            time: '12:00',
            area: '燕山校区-->明水校区',
            hidden: 'true'
      },  
      {//27
            time: '17:00',
            area: '燕山校区-->明水校区',
            hidden: 'true'
      },  
        // 小循环
        // 大循环
      ],
    },
    bindAreaChange:function (e){
        console.log('picer Area has changed ,value is :',e.detail.value);
        this.setData({
            AreaIndex:e.detail.value
        })
      },
    bindAreaChange1: function(e) {
      console.log('picer Area has changed ,value is :', e.detail.value);
      this.setData({
        AreaIndex1: e.detail.value
      })
      },
    bindScheduleChange: function (e) {
      console.log('picer Area has changed ,value is :', e.detail.value);
      this.setData({
        ScheduleIndex: e.detail.value
      })
    },
  getData:function() {
      console.log(this.data.AreaIndex)
      console.log(this.data.AreaIndex1)
      if(this.data.AreaIndex== 0 ){
            if(this.data.AreaIndex1==1)     {
                  if(this.data.ScheduleIndex==0) return 9
                  else return 1
            } 
            else if (this.data.AreaIndex1 == 2) {
                  if (this.data.ScheduleIndex == 0) return 3
                  else return 1
        } 
            else if (this.data.AreaIndex1 == 3) {
                  if (this.data.ScheduleIndex == 0) return 4
                   else return '20'+'21'
        } 
      }
      else if (this.data.AreaIndex == 1){
            if (this.data.AreaIndex1 == 0) {
                  if (this.data.ScheduleIndex == 0) return '28'+'29'
                  else return 1
        }
            else if (this.data.AreaIndex1 == 2) {
                  if (this.data.ScheduleIndex == 0) return 0
                  else return '10'+'11'+'12'+'15'+'16'+'17'
        }
            else if (this.data.AreaIndex1 == 3) {
                  if (this.data.ScheduleIndex == 0) return 0
                  else return 1
        } 
      }
     else  if (this.data.AreaIndex == 2) {
            if (this.data.AreaIndex1 == 0) {
                  if (this.data.ScheduleIndex == 0) return "1"+"2"+"6"
                  else return '13'+'14'+'18'+'19'
              }
            else if (this.data.AreaIndex1 == 1) {
                  if (this.data.ScheduleIndex == 0) return "1" + "2" + "6"
                  else return '13' + '14' + '18' + '19'
              }
            else if (this.data.AreaIndex1 == 3) {
                  if (this.data.ScheduleIndex == 0) return 0
                  else return 1
              }
        }
        if (this.data.AreaIndex == 3) {
            if (this.data.AreaIndex1 == 0) {
                  if (this.data.ScheduleIndex == 0) return '7'+'8'
                  else return '22'+'23'
              }
            else if (this.data.AreaIndex1 == 1) {
                  if (this.data.ScheduleIndex == 0) return 0
                  else return 1
              }
            
            else if (this.data.AreaIndex1 == 2) {
                  if (this.data.ScheduleIndex == 0) return 5
                  else return 1
              }
        }},
    search:function(e){
      var hidden=e.detail.value
      var changed={}
      var i=1
      console.log('the search function has been imported')
      //  changed['ScheduleArry['+i+'].hidden'] = false
      var data=this.getData();
      switch(data)
      {
            case 9:
                  changed['ScheduleArry[' + 9 + '].hidden'] = false
                  break;
            case 3:
                  changed['ScheduleArry[' + 3 + '].hidden'] = false
                  break;
            case 4:
                  changed['ScheduleArry[' + 4 + '].hidden'] = false
                  break;
            case '20'+'21':
                  changed['ScheduleArry[' + '20' + '].hidden'] = false
                  changed['ScheduleArry[' + '21' + '].hidden'] = false
                  break;
            case '28'+'29':
                  changed['ScheduleArry[' + '28' + '].hidden'] = false
                   changed['ScheduleArry[' + '29' + '].hidden'] = false
                  break;
            case '10'+'11'+'12'+'15'+'16'+'17':
                  changed['ScheduleArry[' + '10' + '].hidden'] = false
                  changed['ScheduleArry[' + '21' + '].hidden'] = false
                  break;
      }
      if (this.getData()=='1'){
       
      }
      this.setData(changed) 
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
})