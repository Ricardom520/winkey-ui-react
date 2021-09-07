import React, { ReactNode } from 'react';

import emptyImage from '../../assets/images/empty.png';
import "./index.less";

interface EmptyProps {
  image?: ReactNode;
  imageStyle?: React.CSSProperties;
  description?: ReactNode | boolean;
  children?: ReactNode;
  className?: string;
}

export default class Empty extends React.Component<EmptyProps> {
  static defaultProps = {
    description: "暂无数据"
  }

  render() {
    const { image, imageStyle, description, children, className } = this.props;

    return (
      <div className={
        "wk-empty" +
        (className ? ` ${className}` : "")
      }>
        <div className="wk-empty-image" style={imageStyle}>
          {image && typeof image === 'string' ? <img src={image} alt="empty" className="wk-empty-img-default" /> : image}
          {!image && <img src={emptyImage} alt="empty" className="wk-empty-img-default" />}
        </div>
        {
          description !== false &&
          <div className="wk-empty-description">
            {description}
          </div>
        }
        {
          children && <div className="wk-empty-footer">{children}</div>
        }
      </div>
    )
  }
}