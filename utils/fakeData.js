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
};

export default fakeData;
