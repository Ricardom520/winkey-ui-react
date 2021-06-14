import React, { ReactNode } from 'react';

import "./index.less";

interface AvatarProps {
  icon?: string;
  size?: number | "large" | "small";
  shape?: "square" | "circle";
  style?: React.CSSProperties;
  src?: ReactNode;
  children?: ReactNode;
  alt?: string;
}

interface AvatarState {
  avatarStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
  sizeClass: string;
}

const avatarClass = {
  square: ' wk-avatar-square',
  circle: ' wk-avatar-circle',
  '': ''
}

export default class Avatar extends React.Component<AvatarProps, AvatarState> {
  static defaultProps = {
    shape: 'circle'
  }

  constructor(props) {
    super(props);

    this.state = {
      avatarStyle: null,
      iconStyle: null,
      sizeClass: '',
    }
  }

  componentDidMount() {
    const { size, alt } = this.props;

    if (size) {
      if (typeof size === 'number') {
        this.setState({
          avatarStyle: {width: `${size}px`, height: `${size}px`, lineHeight: `${size}px`, fontSize: `${size / 2}px`},
          iconStyle: {fontSize: `${size / 2}px`}
        })
      } else if (typeof size === 'string') {
        this.setState({
          sizeClass: ` wk-avatar-${size === 'large' ? 'lg' : 'sm'}`,
          iconStyle: {fontSize: `${size === 'large' ? `20px` : '12px'}`}
        })
      }
    }
  }

  render() {
    const { icon, shape, children, size, src, style, alt } = this.props;
    const { avatarStyle, iconStyle, sizeClass } = this.state;
    
    return (
      <span 
        className={
          "wk-avatar" +
          (sizeClass ? sizeClass : '') +
          avatarClass[shape]
        } 
        style={{...avatarStyle, ...style}}
      >
        {
          icon && <i className={`iconfont ${icon}`} style={iconStyle}></i>
        }
        {
          children && <span className="wk-avatar-string" style={{transform: `scale(${typeof size === 'number' ? 27 / size : 1}) translateX(-50%)`, lineHeight: typeof size === 'number' ? `${size}px` : null}}>{children}</span>
        }
        {
          typeof src === 'string' && <img src={src} alt={alt || 'avatar'} />
        }
      </span>
    )
  }
}