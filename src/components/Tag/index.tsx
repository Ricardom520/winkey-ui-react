import React, { ReactNode } from 'react';

import CheckableTag from './CheckableTag';
import "./index.less";

interface TagProps {
  children?: ReactNode;
  closable?: boolean;
  onClose?: (event) => void;
  color?: string;
  visible?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

interface TagState {
  visible: boolean;
}

const tagClass = {
  magenta: ' wk-tag-magenta',
  red: ' wk-tag-red',
  volcano: ' wk-tag-volcano',
  orange: ' wk-tag-orange',
  gold: ' wk-tag-gold',
  lime: ' wk-tag-lime',
  green: ' wk-tag-green',
  cyan: ' wk-tag-cyan',
  blue: ' wk-tag-blue',
  geekblue: ' wk-tag-geekblue',
  purple: ' wk-tag-purple',
  success: ' wk-tag-success',
  processing: ' wk-tag-processing',
  error: ' wk-tag-error',
  warning: ' wk-tag-warning',
  default: "",
  "": ""
}

export default class Tag extends React.Component<TagProps, TagState> {
  static defaultProps = {
    color: "",
    className: ""
  }

  static CheckableTag = CheckableTag

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    const { visible } = this.props;

    this.setState({
      visible
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    const { visible } = next;
    
    if (visible !== undefined) {
      this.setState({
        visible
      })
    }
  }

  handleClose = (e) => {
    const { onClose } = this.props;

    if (onClose) {
      this.props.onClose(e)
    }

    this.setState({
      visible: true
    })
  }

  initTag = () => {
    const { children, closable, color, style, className, onClick, icon } = this.props;
    const { visible } = this.state;
   
    return (
      <span 
        className={
          "wk-tag" +
          (color && tagClass[color] ? tagClass[color] : "") +
          (color && !tagClass[color] ? " wk-tag-has-color" : "") +
          (visible !== undefined && !visible ? " wk-tag-hidden" : "") +
          (className ? ` ${className}` : "")
        }
        style={!tagClass[color] ? {backgroundColor: color, ...style} : null}
        onClick={onClick}
      >
        {icon && typeof icon === 'string' ? <i className={`iconfont ${icon}`} style={{marginRight: '5px'}}/> : icon}
        {children}
        {
          closable && <span className="wk-tag-close" onClick={this.handleClose}><i className="iconfont wk-icon-close" /></span>
        }
      </span>
    )
  }

  render () {
    return (
      <>
        {
          this.initTag()
        }
      </>
    )
  }
}