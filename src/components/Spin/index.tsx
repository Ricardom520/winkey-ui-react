import React, { Component } from 'react';

import './index.less';

interface SpinProps {
  size?: 'small' | 'default' | 'large';
  spinning?: boolean;
  tip?: string;
  wrapperClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

const sizeClassName = {
  small: ' wk-spin-sm',
  default: '',
  large: ' wk-spin-lg'
}

class Spin extends Component<SpinProps> {
  static defaultProps = {
    size: "default",
    spinning: true,
  }

  render() {
    const { size, spinning, children, tip, style, className, wrapperClassName } = this.props;
    console.log(children)
    return (
      <>
        {
          !children &&
          <div style={style} className={
            'wk-spin' + ' ' +
            sizeClassName[size] + 
            (spinning ? ' wk-spin-spinning' : '') +
            (tip ? ' wk-spin-show-text' : '') + ' ' +
            (className || '')
          }>
            <span className='wk-spin-dot wk-spin-dot-spin'>
              <i className='wk-spin-dot-item' />
              <i className='wk-spin-dot-item' />
              <i className='wk-spin-dot-item' />
              <i className='wk-spin-dot-item' />
            </span>
            {
              tip &&
              <div className='wk-spin-text'>
                {tip}
              </div>
            }
          </div>
        }
        {
          children &&
          <div className={
            'wk-spin-nested-loading' + ' ' +
            wrapperClassName || ''
          }>
            {
              spinning &&
              <div>
                <div style={style} className={
                  'wk-spin' + ' ' +
                  sizeClassName[size] + 
                  (spinning ? ' wk-spin-spinning' : '') +
                  (tip ? ' wk-spin-show-text' : '') + ' ' +
                  (className || '')
                }>
                  <span className='wk-spin-dot wk-spin-dot-spin'>
                    <i className='wk-spin-dot-item' />
                    <i className='wk-spin-dot-item' />
                    <i className='wk-spin-dot-item' />
                    <i className='wk-spin-dot-item' />
                  </span>
                  {
                    tip &&
                    <div className='wk-spin-text'>
                      {tip}
                    </div>
                  }
                </div>
              </div>
            }
            <div 
              className={
                'wk-spin-container' +
                (spinning ? ' wk-spin-blur' : '')
              }
            >
              {children}
            </div>
          </div>
        }
      </>
    )
  }
}

export default Spin;