import React, { ReactNode } from 'react';

import SubMenuBox from './SubMenuBox';

interface SubMenuProps {
  icon?: ReactNode;
  title?: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  mode?: "vertical" | "horizontal" | "inline";
}

interface SubMenuState {
  offsetTop: number;
  offsetLeft: number;
  width: number;
  open: boolean;
}

const whiteList = {
  'wk-menu-item-group-title': 1,
  'wk-menu-title-content': 1,
  'wk-menu-item wk-menu-item-only-child': 1,
  'wk-menu-submenu wk-menu-submenu-horizontal wk-menu-item-selected': 1
}

const modeClassName = {
  inline: ' wk-menu-submenu-inline'
}

export default class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
  private wkSubMenu;

  constructor(props) {
    super(props);

    this.state = {
      offsetTop: -999,
      offsetLeft: -999,
      width: 0,
      open: false,
    }

    this.wkSubMenu = React.createRef();
  }

  UNSAFE_componentWillUpdate(_, nextState) {
    const { open } = nextState;

    if (open) {
      document.addEventListener('click', (e: any) => {
        console.log(e.target.className)
        console.log(!whiteList[e.target.className])
        if (e.target.className.indexOf('wk-menu-item') === -1) {
          this.setState({
            open: false,
          })
        }
      }, true)
    } else {
      document.removeEventListener('click', () => {

      }, false)
    }
  }


  handleClick = () => {
    const { disabled, onClick, mode } = this.props;
    const wkSubMenu: any = this.wkSubMenu.current;

    if (!disabled && mode !== 'inline') {
      this.setState({
        offsetLeft: wkSubMenu.getBoundingClientRect().left,
        offsetTop: wkSubMenu.getBoundingClientRect().top + wkSubMenu.clientHeight + 3,
        width: wkSubMenu.clientWidth,
        open: true
      })
    }

    onClick();
  }

  initSubMenu = () => {
    const { icon, title, selected, mode, children } = this.props;
    console.log(children)
    return (
      <li
        className={
          "wk-menu-submenu" +
          " wk-menu-submenu-horizontal" +
          modeClassName[mode] +
          (selected ? ' wk-menu-item-selected' : '')
        }
        onClick={this.handleClick}
      >
        <div ref={this.wkSubMenu} className="wk-menu-submenu-title">
          {
            icon &&
            <span className='wk-menu-item-icon anticon anticon-mail'>
              {icon}
            </span>
          }
          <span className='wk-menu-title-content'>
            {title}
          </span>
          {
            mode === 'inline' &&
            <i className='wk-menu-submenu-arrow'/>
          }
        </div>
        {
          mode === 'inline' &&
          <ul
            className={
              'wk-menu' +
              ' wk-menu-sub' +
              ' wk-menu-vertical'
            }
          >
            {
              children && React.Children.map(children, (child: any, n: number) => {
                console.log(child)
                return React.cloneElement(child, {
                  // onClick: this.handleChange,
                  // selectedKeys: activeKey ? [activeKey] : [],
                })
              })
            }
          </ul>
        }
      </li>
    )
  }

  render() {
    const { offsetLeft, offsetTop, width, open } = this.state;
    const { children } = this.props;

    return (
      <>
        {this.initSubMenu()}
        <SubMenuBox
          top={offsetTop} 
          left={offsetLeft}
          width={width} 
          open={open} 
        >
          {children}
        </SubMenuBox>
      </>
    )
  }
}