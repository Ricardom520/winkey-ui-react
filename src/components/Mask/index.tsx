import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import "./index.less";

interface MaskProps {
  children?: ReactNode;
  kind: string;
  onCancel?: Function;
  visible?: boolean;
}

export default class Mask extends Component<MaskProps> {
  private popupNode

  constructor(props) {
    super(props)
  }

  retContainer() {
    if (!this.popupNode) {
      const popupNode = document.createElement('div');
      popupNode.setAttribute('id', 'wk-mask');
      this.popupNode = popupNode;    
      document.body.appendChild(popupNode);
    }

    return this.popupNode;
  }

  retContent(kind, onCancel) {
    const masks = document.querySelectorAll('#wk-mask').length;
    
    return (
      <div className="wk-mask" id={`wk-mask-${kind}`} style={{zIndex: 200 + masks * 100}}>
        <div className="wk-mask-bg" onClick={() => this.removeContent(kind, onCancel)}></div>
        {this.props.children}
      </div>
    )
  }

  removeContent(kind, onCancel) {
    const target = document.getElementById(`wk-mask-${kind}`);

    if (target) {
      if (onCancel) {
        onCancel();
      }
      
      document.body.removeChild(target.parentElement)
    }
    this.popupNode = null;
  }

  componentDidUpdate() {
    const { kind, visible, onCancel } = this.props;

    if (visible) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.retContent(kind, onCancel),
        this.retContainer(),
      )
    } else {
      this.removeContent(kind, onCancel)
    }
  }

  render() {
    return null
  }
}