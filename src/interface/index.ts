import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// 路由页面组件
// export interface IRoute<P = {}> extends RouteComponentProps<P> {
//   history: any;
//   location: any;
// }

// 增强event参数
interface T extends EventTarget {
  dataset: {
    [key: string]: string | number;
  }
}

// 鼠标事件返回
export interface IMouseEvent<P = HTMLDivElement> extends React.MouseEvent<P> {
  currentTarget: P & T;
}

// 表单事件返回
export interface IChangeEvent<P = HTMLInputElement> extends React.ChangeEvent<P> {}

// 滚轮事件返回
export interface IUIEvent<P = HTMLDivElement> extends React.UIEvent<P> {}

// 加载事件
export interface ISyntheticEvent<P = HTMLImageElement> extends React.SyntheticEvent<P> {}