// const { default: Vue } = require("vue");



var vm = new Vue({
  el: "#topSection",
  data: {
    message1: '保湿力がさらにアップ！<br>毛先まで内側から潤う質感へ',
    message2: '専用集中ケアパック',
    message3: 'TOKIO LIMITED HOME<br>3つのPoint',
    mainPoints: [
      {
        ptNum: "Point 1",
        body: "インカラミの<span>持続</span>",
        img: "images/sect01_002.png",
        evenOdd: 'odd',
      },
      {
        ptNum: "Point 2",
        body: "<span>月</span>曜日と<span>木</span>曜日",
        img: "images/sect01_001.png",
        evenOdd: 'even',
      },
      {
        ptNum: "Point 3",
        body: "正しい<span>使用方法</span>",
        img: "images/sect01_003.png",
        evenOdd: 'odd',
      },
    ],
  },
});

