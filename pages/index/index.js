Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.search(e.detail.value)
    this.setData({
      inputVal: e.detail.value
    });
  },
  search:function(key){
    var that =this;
    var inputVal = wx.getStorage({
      key: 'inputVal',
      success: function(res) {
        var arr=[];//临时数组
        for(let i in res.data){
          if (res.data[i].imurl - title.indexOf(key)>=0){
            arr.push(res.data[i])
          }
        }
        if(arr.length==0){
          that.setData({
            inputVal:[]
          })
          }
          else{
            that.setData({
              inputVal:arr
            })
          }
        }  
    })
  },
  data:{
   pushlist:[
   {
     url: ' /默认标题_新版公众号首图_2018.11.10.png',
     name: "双十一前后",
     substance: "好一个双十一",
   },
     {
       url: ' /默认标题_新版公众号首图_2018.11.10.png',
       name: "双十一前后",
       substance: "好一个双十一",
     },
     {
       url: ' /默认标题_新版公众号首图_2018.11.10.png',
       name: "双十一前后",
       substance: "好一个双十一",
     }
   ],
    movies: [
      { url: '/默认标题_新版公众号首图_2018.11.10.png ' },
      { url: '/默认标题_新版公众号首图_2018.11.10.png ' },
      { url: '/默认标题_新版公众号首图_2018.11.10.png ' },
      { url: '/默认标题_新版公众号首图_2018.11.10.png ' }
    ], 
    
   },
   })