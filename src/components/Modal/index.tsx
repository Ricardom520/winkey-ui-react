import React, { Component } from 'react';

import Mask from '../Mask';
import Button from '../Button';
import {
  ModalProps
} from './interface';
import "./index.less";

class Modal extends Component<ModalProps> {
  static defaultProps = {
    width: 520,
    okText: 'ok',
    cancelText: 'cancel'
  }

  handleClickCancel = () => {
    const { onCancel } = this.props;

    if (onCancel) {
      onCancel()
    }
  }

  handleClickOk = () => {
    const { onOk } = this.props;

    if (onOk) {
      onOk();
    }
  }

  render() {
    const { visible, title, children, width, footer, okText, cancelText } = this.props;

    return (
      <Mask kind="modal" visible={visible} onCancel={() => this.handleClickCancel()}>
        <div className="wk-modal" style={{width: typeof width === 'string' ? width : `${width}px`}}>
          <div className="wk-modal-content">
            <button className="wk-modal-close" onClick={this.handleClickCancel}>
              <span className="wk-modal-close-x">
                <i className="iconfont wk-icon-close"/>
              </span>
            </button>
            {
              title &&
              <div className="wk-modal-header">
                <div className="wk-modal-title">{title}</div>
              </div>
            }
            <div className="wk-modal-body">
              {children}
            </div>
            {
              footer !== null &&
              <div className="wk-modal-footer">
                {
                  footer && footer
                }
                {
                  !footer && 
                  <>
                    <Button onClick={this.handleClickCancel}>{cancelText}</Button>
                    <Button type="primary" onClick={this.handleClickOk}>{okText}</Button>
                  </>
                }
              </div>
            }
          </div>
        </div>
      </Mask>
    )
  }
}

export default Modal;