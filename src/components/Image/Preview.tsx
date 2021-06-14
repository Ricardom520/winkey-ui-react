import React, { useState } from 'react';

import Mask from '../Mask';
import "./index.less";

interface AvatarPreviewProps {
  alt?: string;
  src: string;
  visible: boolean;
  onCancel: () => void;
  isMobile?: boolean;
}

interface AvatarPreviewState {
  rotate: number;
  scale: number;
  imgX: number;
  imgY: number;
}

export default class AvatarPreview extends React.Component<AvatarPreviewProps, AvatarPreviewState> {
  constructor(props) {
    super(props);

    this.state = {
      rotate: 0,
      scale: 1,
      imgX: 0,
      imgY: 0,
    }
  }

  imagePreviewMouseDown = (e) => {
    e.preventDefault();
    let dragable = true;
    let initX = e.clientX - this.state.imgX;
    let initY = e.clientY - this.state.imgY;

    const target = document.getElementById("imgPreview");

    let nowX, nowY, disX, disY;

    target.addEventListener("mousemove", (newE) => {
      newE.preventDefault();
      if (dragable) {
        nowX = newE.clientX,
        nowY = newE.clientY,
        disX = nowX - initX,
        disY = nowY - initY;

        target.style.left = disX + "px";
        target.style.top = disY + "px";
      }
    })

    target.addEventListener("mouseup", () => {
      dragable = false;
      this.setState({
        imgX: disX,
        imgY: disY
      })
    })
  }

  imagePreviewMouseUp = (e) => {
    
  }

  render() {
    const { visible, onCancel, src, alt, isMobile } = this.props;
    const { rotate, scale } = this.state;
    
    return (
      <Mask kind="image" visible={visible} onCancel={onCancel}>
        <div className="wk-image-preview">
          <div className="wk-image-preview-content">
            <div className="wk-image-preview-body">
              {
                !isMobile && 
                <ul className="wk-image-preview-operations">
                  <li className="wk-image-preview-operations-operation" onClick={onCancel}>
                    <i className="iconfont wk-icon-close"/>
                  </li>
                  <li className="wk-image-preview-operations-operation" onClick={()=>this.setState({
                    scale: scale >= 10 ? 10 : scale + .5
                  })}>
                    <i className={`iconfont wk-icon-enlarge wk-image-preview-icon ${scale === 10 ? 'wk-image-preview-extreme' : ''}`}/>
                  </li>
                  <li className="wk-image-preview-operations-operation" onClick={()=>this.setState({
                    scale: scale <= 1 ? 1 : scale - .5
                  })}>
                    <i className={`iconfont wk-icon-narrow wk-image-preview-icon ${scale === 1 ? 'wk-image-preview-extreme' : ''}`}/>
                  </li>
                  <li className="wk-image-preview-operations-operation" onClick={()=>this.setState({
                    rotate: rotate + 90
                  })}>
                    <i className="iconfont wk-icon-rotate wk-image-preview-icon wk-image-preview-icon-ifront"/>
                  </li>
                  <li className="wk-image-preview-operations-operation" onClick={()=>this.setState({
                    rotate: rotate - 90
                  })}>
                    <i className="iconfont wk-icon-rotate wk-image-preview-icon"/>
                  </li>
                </ul>
              }
              <div className="wk-image-preview-img-wrapper">
                <img 
                  id="imgPreview"
                  onMouseDown={this.imagePreviewMouseDown}
                  // onMouseUp={this.imagePreviewMouseUp}
                  src={src} 
                  alt={alt || 'img-preview'} 
                  className="wk-image-preview-img" 
                  style={{transform: `rotate(${rotate}deg) scale(${scale})`}}
                />
              </div>
            </div>
          </div>
        </div>
      </Mask>
    )
  }
}