const goods = {
  drinkTypes: ['果茶', '奶茶', '季节限定', '草莓系列', '芒果系列'],
  drinkData: [
    {
      id: 1,
      name: '草莓洛洛',
      image: 'caomeiluoluo',
      type: ['果茶', '草莓系列'],
      price: 18,
      salesVolume: {
        month: 500,
        weekly: 200,
        day: 80
      },
      details: [
        {
          label: '用料',
          value: ['草莓', '提子', '爆爆珠']
        },
        {
          label: '底料',
          value: ['牛奶']
        },
        {
          label: '简介',
          value: ['牛奶']
        }
      ]
    },
    {
      id: 2,
      name: '芒果哆哆',
      image: 'mangguoduoduo',
      type: ['果茶', '芒果系列'],
      price: 15,
      salesVolume: {
        month: 200,
        weekly: 100,
        day: 15
      }
    },
    {
      id: 3,
      name: '烧仙草',
      image: 'shaoxiancao',
      type: ['奶茶'],
      price: 10,
      salesVolume: {
        month: 300,
        weekly: 100,
        day: 15
      }
    },
    {
      id: 4,
      name: '芝芝梅梅',
      image: 'zhizhimeimei',
      type: ['果茶'],
      price: 15,
      salesVolume: {
        month: 300,
        weekly: 100,
        day: 15
      }
    },
    {
      id: 5,
      name: '芝士梅梅',
      image: 'zhishimeimei',
      type: ['果茶'],
      price: 15,
      salesVolume: {
        month: 400,
        weekly: 100,
        day: 15
      }
    },
    {
      id: 6,
      name: '芝士梅梅',
      image: 'zhishimeimei',
      type: ['果茶'],
      price: 15,
      salesVolume: {
        month: 500,
        weekly: 100,
        day: 15
      }
    },
    {
      id: 7,
      name: '芝士梅梅',
      image: 'zhishimeimei',
      type: ['果茶'],
      price: 15,
      salesVolume: {
        month: 500,
        weekly: 100,
        day: 15
      }
    },
    {
      id: 8,
      name: '芝士梅梅',
      image: 'zhishimeimei',
      type: ['果茶'],
      price: 15,
      salesVolume: {
        month: 500,
        weekly: 100,
        day: 15
      }
    }
  ]
}
const dataView = {
  salesVolume: [
    {
      label: '月销量额度',
      value: goods.drinkData.map((i) => {
        return i.salesVolume.month * i.price
      }).reduce((x, y) => x + y).toFixed(2)
    },
    {
      label: '周销量额度',
      value: goods.drinkData.map((i) => {
        return i.salesVolume.weekly * i.price
      }).reduce((x, y) => x + y).toFixed(2)
    },
    {
      label: '日销量额度',
      value: goods.drinkData.map((i) => {
        return i.salesVolume.day * i.price
      }).reduce((x, y) => x + y).toFixed(2)
    }
  ]
}

export { goods, dataView }
