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
    name: '数据视图',
    type: 'menu',
    order: 2,
    config: {
      isDefault: true,
      icon: 'el-icon-s-order',
      route: {
        name: 'dataView'
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
  },
  {
    id: 3,
    pid: 0,
    name: '系统设置',
    type: 'menu',
    order: 1,
    config: {
      isDefault: true,
      icon: 'el-icon-s-order',
      route: {
        name: 'systemSettings'
      },
      children: []
    }
  }
]
