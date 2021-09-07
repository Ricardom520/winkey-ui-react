import React, { Component } from 'react';

import { SkeletonProps } from './interface';
import "./index.less";

class Skeleton extends Component<SkeletonProps> {
  static defaultProps = {
    paragraph: {
      rows: 3
    }
  }

  render() {
    const { avatar, paragraph, active } = this.props;

    return (
      <div 
        className={
          "wk-skeleton" +
          (avatar ? " wk-skeleton-with-avatar" : "") +
          (active ? " wk-skeleton-active" : "")
        }
      >
        {
          avatar && 
          <div className="wk-skeleton-header">
            <span className="wk-skeleton-avatar wk-skeleton-avatar-lg wk-skeleton-avatar-circle"></span>
          </div>
        }
        <div className="wk-skeleton-content">
          <h3 className="wk-skeleton-title" style={{width: '38%'}}></h3>
          {
            paragraph &&
            <ul className="wk-skeleton-paragraph">
              {
                typeof paragraph !== 'boolean' &&
                new Array(paragraph.rows || 0).fill('').map((_, n) => {
                  return (
                    <li key={`li_${n}`} style={n === paragraph.rows - 1 ? {width: '61%'} : null}/>
                  )
                })
              }
            </ul>
          }
        </div>
      </div>
    )
  }
}

export default Skeleton;