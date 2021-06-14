import React, { ReactNode } from 'react';

interface ItemProps {
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: (e: any) => void;
}

export default class Item extends React.Component<ItemProps> {
  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    const { icon, children, disabled, selected, className } = this.props;

    return (
      <li 
        className={
          "wk-menu-item" + 
          (disabled ? ' wk-menu-item-disabled' : '') +
          (selected ? ' wk-menu-item-selected' : '') + ' ' +
          (className || '')
        }
        onClick={this.handleClick}
      >
        {
          icon && 
          <span className='wk-menu-item-icon anticon anticon-mail'>
            {icon}
          </span>
        }
        <span className='wk-menu-title-content'>
          {children}
        </span>
      </li>
    )
  }
}