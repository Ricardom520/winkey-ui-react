import React from 'react';

import SubMenu from './SubMenu';
import ItemGroup from './ItemGroup';
import Item from './Item';
import Divider from './Divider';
import './index.less';

interface MenuProps {
  onClick?: (item, key, keyPath, event) => void;
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  mode?: "vertical" | "horizontal" | "inline";
  style?: React.CSSProperties;
  defaultOpenKeys?: string[];
  className?: string;
  prefixClassName?: string;
}

interface MenuState {
  selectedKeys: string[],
}

const modeClassName = {
  vertical: ' wk-menu-vertical',
  horizontal: ' wk-menu-horizontal',
  inline: ' wk-menu-inline',
}

export default class Menu extends React.Component<MenuProps, MenuState> {
  static Item = Item;
  static ItemGroup = ItemGroup;
  static SubMenu = SubMenu;
  static Divider = Divider;

  static defaultProps = {
    mode: "horizontal",
    prefixClassName: "wk"
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedKeys: [],
    }
  }

  componentDidMount() {
    const { selectedKeys, defaultSelectedKeys } = this.props;
    console.log(this.props);
    if (selectedKeys || defaultSelectedKeys) {
      if (typeof selectedKeys === 'object' && selectedKeys.length) {
        this.setState({
          selectedKeys,
        })
      } else if (typeof defaultSelectedKeys === 'object' && defaultSelectedKeys.length) {
        this.setState({
          selectedKeys: defaultSelectedKeys
        })
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }

  handleClick = (item, key, keyPath, event) => {
    if (this.props.onClick) {
      this.props.onClick(item, key, keyPath, event);
    }

    this.setState({
      selectedKeys: [key]
    })
  }

  render() {
    const { children, mode, style, className, prefixClassName } = this.props;
    const { selectedKeys } = this.state;
    console.log(prefixClassName)
    return (
      <ul 
        className={
          `${prefixClassName}-menu` +
          " wk-menu-light" +
          ` ${prefixClassName}-menu-root` +
          ' wk-menu-overflow' + 
          modeClassName[mode] + ' ' +
          (className || '')
        }
        style={style}
      >
        {
          children && React.Children.map(children, (child: any, n: number) => {
            return React.cloneElement(child, {
              selected: selectedKeys.includes(child.key),
              onClick: (e) => this.handleClick(child, child.key, n, e),
              mode,
              prefixClassName,
            })
          })
        }
      </ul>
    )
  }
}