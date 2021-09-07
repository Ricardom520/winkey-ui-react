import React, { ReactNode } from 'react';

interface ItemProps {
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: (e: any) => void;
  danger?: boolean;
  prefixClassName?: string;
}

export default class Item extends React.Component<ItemProps> {
  static defaultProps = {
    prefixClassName: "wk"
  }

  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    const { icon, children, disabled, selected, className, danger, prefixClassName } = this.props;

    return (
      <li 
        className={
          `${prefixClassName}-menu-item` + 
          (disabled ? ` ${prefixClassName}-menu-item-disabled` : '') +
          (selected ? ` ${prefixClassName}-menu-item-selected` : '') + ' ' +
          (danger ? ` ${prefixClassName}-menu-item-danger` : '') +
          (className || '')
        }
        onClick={this.handleClick}
      >
        {
          icon && 
          <span className={`${prefixClassName}-menu-item-icon anticon anticon-mail`}>
            {icon}
          </span>
        }
        <span className={`${prefixClassName}-menu-title-content`}>
          {children}
        </span>
      </li>
    )
  }
}