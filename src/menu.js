export default [
  {
    id: 1,
    pid: 0,
    name: '首页',
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'el-icon-s-order',
      route: {
        name: 'index'
      },
      children: []
    }
  },
  {
    id: 2,
    pid: 0,
    name: '图表页',
    type: 'menu',
    order: 2,
    config: {
      isDefault: true,
      icon: 'el-icon-s-order',
      route: {
        name: 'login'
      }
    },
    children: [
      {
        id: 21,
        pid: 2,
        name: '折线图',
        type: 'menu',
        order: 1,
        config: {
          isDefault: true,
          icon: 'el-icon-s-order',
          route: {
            name: 'login'
          },
          children: []
        }
      },
      {
        id: 22,
        pid: 2,
        name: '柱状图',
        type: 'menu',
        order: 2,
        config: {
          isDefault: false,
          icon: 'el-icon-s-order',
          route: {
            name: 'login'
          },
          children: []
        }
      }
    ]
  }
]
