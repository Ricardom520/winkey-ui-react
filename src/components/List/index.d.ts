import React, { ReactNode, Component } from 'react';

interface ListProps {
  children?: any;
  size?: "small" | "large";
  header?: ReactNode;
  footer?: ReactNode;
  bordered?: boolean;
  dataSource?: any[];
  renderItem?: (item) => ReactNode;
  itemLayout?: "vertical" | "horizontal";
  split?: boolean;
}

declare module 'winkey-ui-react' {
  export default class List extends Component<ListProps> {
    render: () => React.ReactElement;
  }
}