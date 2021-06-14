import React from 'react';

interface ItemGroupProps {
  title?: string;
  onClick?: (key: string) => void;
  selectedKeys?: string[];
}

interface ItemGroupState {
  activeKey: string
}

export default class ItemGroup extends React.Component<ItemGroupProps, ItemGroupState> {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: undefined,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { selectedKeys } = nextProps;

    if (selectedKeys) {
      this.setState({
        activeKey: selectedKeys[0]
      })
    }
  }

  handleChange = (key: string) => {
    
    if (this.props.onClick) {
      this.props.onClick(key);
    }

    if (!this.props.selectedKeys) {
      this.setState({
        activeKey: key
      })
    }
  }

  render() {
    const { children, title } = this.props;
    const { activeKey } = this.state;

    return (
      <li
        className={
          'wk-menu-item-group'
        }
      >
        <div className='wk-menu-item-group-title'>
          {title}
        </div>
        <ul className='wk-menu-item-group-list'>
          {
            children && React.Children.map(children, (child: any, n: number) => {
              return React.cloneElement(child, {
                className: ` wk-menu-item-only-child ${activeKey === child.key ? ' wk-menu-item-only-child-active' : ''}`,
                onClick: () => this.handleChange(child.key),
              })
            })
          }
        </ul>
      </li>
    )
  }
}