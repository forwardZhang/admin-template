export default [
  {
    label: '首页',
    show: true,
    key: '/home',
  },
  {
    label: '演示',
    show: true,
    key: '/demos',
    children: [
      {
        label: '权限',
        show: true,
        key: '/demos/access',
        children: [
          {
            label: '权限切换',
            show: true,
            key: '/demos/access/toggle',
          },
        ],
      },
      {
        label: '异常页',
        show: true,
        key: '/demos/fallback',
        children: [
          {
            label: '403',
            show: true,
            key: '/demos/fallback/403',
          },
          {
            label: '404',
            show: true,
            key: '/demos/fallback/404',
          },
          {
            label: '500',
            show: true,
            key: '/demos/fallback/500',
          },
        ],
      },
      {
        label: '外部页面',
        show: true,
        key: '/demos/external',
        children: [
          {
            label: '内嵌',
            show: true,
            key: '/demos/external/iframe',
            children: [
              {
                label: '复杂表单',
                show: true,
                key: '/demos/external/iframe/form',
              },
              {
                label: '编辑表格',
                show: true,
                key: '/demos/external/iframe/edit-data-table',
              },
              {
                label: '百度',
                show: true,
                key: '/demos/external/iframe/baidu-iframe',
              },
              {
                label: '菜单管理',
                show: true,
                key: '/demos/external/iframe/menu',
              },
            ],
          },
          {
            label: '外链',
            show: true,
            key: '/demos/external/link',
            children: [
              {
                label: 'Vite',
                show: true,
                key: '/demos/external/link/vite',
              },
              {
                label: 'Vue',
                show: true,
                key: '/demos/external/link/vue',
              },
              {
                label: '无布局',
                show: true,
                key: '/demos/external/link/menu-layout-falsy',
              },
              {
                label: '菜单管理',
                show: true,
                key: '/demos/external/link/menu',
              },
            ],
          },
        ],
      },
      {
        label: '文件下载',
        show: true,
        key: '/demos/download',
      },
      {
        label: '嵌套详情页',
        show: true,
        key: '/demos/nested-detail',
      },
      {
        label: '嵌套详情页（2）',
        show: true,
        key: '/demos/nested-detail2',
      },
      {
        label: '缓存路由示例',
        show: true,
        key: '/demos/keep-alive',
        children: [
          {
            label: '基础缓存',
            show: true,
            key: '/demos/keep-alive/demo1',
          },
          {
            label: '条件缓存',
            show: true,
            key: '/demos/keep-alive/demo2',
          },
        ],
      },
      {
        label: '多标签',
        show: true,
        key: '/demos/tabs',
      },
      {
        label: '页面级组件',
        show: true,
        key: '/demos/page-component',
      },
      {
        label: '富文本',
        show: true,
        key: '/demos/editor',
      },
      {
        label: '复杂表单',
        show: true,
        key: '/demos/complex-form',
      },
      {
        label: '图标选择器',
        show: true,
        key: '/demos/icon',
      },
      {
        label: '加载指令',
        show: true,
        key: '/demos/loading',
      },
    ],
  },
  {
    label: '系统管理',
    show: true,
    key: '/system',
    children: [
      {
        label: '用户管理',
        show: true,
        key: '/system/user',
      },
      {
        label: '角色管理',
        show: true,
        key: '/system/role',
      },
      {
        label: '菜单管理',
        show: true,
        key: '/system/menu',
      },
    ],
  },
];
