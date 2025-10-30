export type ExpandedKey = string | number;
export type MenuKey = string | number | null;
/**
 * 布局模式
 * vertical: 竖向布局
 * horizontal: 横向布局
 * sidebar: 侧边栏布局
 * mixed-sidebar: 混合侧边栏布局
 * full-content: 全内容布局
 * two-column: 双栏布局
 * mixed-two-column: 混合双栏布局
 */
export type ProLayoutMode
  = | 'vertical'
    | 'horizontal'
    | 'sidebar'
    | 'mixed-sidebar'
    | 'full-content'
    | 'two-column'
    | 'mixed-two-column'
    | ({} & string);
