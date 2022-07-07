export default [
  {
    id: 1,
    pid: 0,
    name: '首页',
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'icon-dianpu',
      route: {
        name: 'index'
      },
      children: []
    }
  },
  {
    id: 2,
    pid: 0,
    name: '饮品列表',
    type: 'menu',
    order: 2,
    config: {
      isDefault: true,
      icon: 'icon-biaodan',
      route: {
        name: 'drinkList'
      },
      children: []
    }
  },
  {
    id: 3,
    pid: 0,
    name: '数据视图',
    type: 'menu',
    order: 3,
    config: {
      isDefault: true,
      icon: 'icon-moban',
      route: {
        name: 'dataView'
      }
    },
    children: [
      {
        id: 31,
        pid: 3,
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
        id: 32,
        pid: 3,
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
  },
  {
    id: 4,
    pid: 0,
    name: '系统设置',
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'icon-shezhi1',
      route: {
        name: 'systemSettings'
      },
      children: []
    }
  }
]
