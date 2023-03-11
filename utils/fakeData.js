const fakeData = {
  searchForCity: function () {
    return [
      {
        country: "台灣",
        distinct: [
          {
            area: "北區",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
          {
            area: "中區",
            city: ["苗栗縣", "台中市", "彰化縣", "南投縣"],
          },
          {
            area: "南區",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
          {
            area: "東區",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
          {
            area: "離島",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
        ],
      },
      {
        country: "日北",
        distinct: [
          {
            area: "本州",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
          {
            area: "九州",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
          {
            area: "四國",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
          {
            area: "北海道",
            city: ["基隆市", "新北市", "台北市", "桃園縣", "新竹縣", "宜蘭縣"],
          },
        ],
      },
    ];
  },
  getAllExpert: function () {
    return [
      {
        expertId: "E000000001",
        nickName: "達人一",
        authenticate: true,
        photo: "fake/album.png",
        evaluate: 4.8,
        viewCount: 280,
        price: 1500,
        albunm: [
          "fake/album.png",
          "fake/album.png",
          "fake/album.png",
          "fake/album.png",
        ],
        services: [0, 1, 2, 3, 4, 5],
      },
      {
        expertId: "E000000002",
        nickName: "達人二",
        authenticate: false,
        photo: "fake/album.png",
        evaluate: 4.8,
        viewCount: 280,
        price: 1500,
        albunm: ["fake/album.png", "fake/album.png", "fake/album.png"],
        services: [0, 1],
      },
      {
        expertId: "E000000003",
        nickName: "達人三",
        authenticate: true,
        photo: "fake/album.png",
        evaluate: 4.8,
        viewCount: 280,
        price: 1500,
        albunm: ["fake/album.png", "fake/album.png"],
        services: [0, 2, 4],
      },
    ];
  },
  getAllExpertRwd: function () {
    return [
      {
        name: "Jessie",
        bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
        img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
        star: 4.8,
        look: 880,
        info: "台北24歲",
        content: "如果你想認識不⼀一樣的台北，就找我吧",
        hashtags: ["台北", "美食", "逛街"],
      },
      {
        name: "Jessie",
        bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
        img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
        star: 4.8,
        look: 880,
        info: "台北24歲",
        content: "如果你想認識不⼀一樣的台北，就找我吧",
        hashtags: ["台北", "美食", "逛街"],
      },
      {
        name: "Jessie",
        bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
        img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
        star: 4.8,
        look: 880,
        info: "台北24歲",
        content: "如果你想認識不⼀一樣的台北，就找我吧",
        hashtags: ["台北", "美食", "逛街"],
      },
      {
        name: "Jessie",
        bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
        img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
        star: 4.8,
        look: 880,
        info: "台北24歲",
        content:
          "如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧",
        hashtags: ["台北", "美食", "逛街"],
      },
      {
        name: "Jessie",
        bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
        img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
        star: 4.8,
        look: 880,
        info: "台北24歲",
        content:
          "如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧",
        hashtags: ["台北", "美食", "逛街"],
      },
    ];
  },
  getOneUserInfo: function () {
    return {
      userId: "U00000001",
      nickName: "達人一",
      role: "客人",
      photo: "fake/album.png",
    };
  },
  getHomeRwdTalk: function () {
    return [
      {
        visitor: "嗨，你好！什麼是在地達人？",
        expert: "我是土生土長的本地人/n可以帶你探索當地不一樣的生活體驗",
      },
      {
        visitor: "可提供哪些服務？",
        expert:
          "包含好玩、好吃的體驗/n代購道地的伴手禮/n也可以提供接機、代駕服務/n我們現在也提供自己獨特的私房地圖/n是獨一無二的，快來看看",
      },
      {
        visitor: "聽起來很棒，要怎麼預約？",
        expert:
          "按下面的按鈕/n然後輸入要去的地方/n想要一去共遊的時間、服務項目/n就可以開始找一位你喜愛的在地達人",
      },
      {
        visitor: "太好了！",
        expert: "",
      },
    ];
  },
};

export default fakeData;
