import React from 'react';

import AvatarPreview from './Preview';
import "./index.less";

interface ImageProps {
  alt?: string;
  src?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  isMobile?: boolean;
  preview?: string;
}

interface ImageState {
  visible: boolean;
}

export default class Image extends React.Component<ImageProps, ImageState> {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  handleOpenImage = () => {
    this.setState({
      visible: true
    })
  }

  handleCloseImage = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { src, alt, width, style, isMobile, preview, height } = this.props;
    const { visible } = this.state;

    return (
      <div className="wk-image" style={{width: width || null, height: height || null, ...style}}>
        <img src={src} alt={alt || 'img'} className="wk-image-img" />
        <div className="wk-image-mask" onClick={this.handleOpenImage}>
          <div className="wk-image-mask-info">
            <span>
              <i className="iconfont wk-icon-open-eyes" style={{marginRight: '5px'}} />
              预览
            </span>
          </div>
        </div>
        <AvatarPreview visible={visible} onCancel={this.handleCloseImage} src={preview || src} isMobile={isMobile} />
      </div>
    )
  }
}