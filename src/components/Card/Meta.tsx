import React, { ReactNode } from 'react';

import "./index.less";

interface CardMetaProps {
  avatar?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

export default class CardMeta extends React.Component<CardMetaProps> {
  render() {
    const { title, description, avatar } = this.props;

    return (
      <div className="wk-card-meta">
        {
          avatar &&
          <div className="wk-card-meta-avatar">
            {avatar}
          </div>
        }
        
        <div className="wk-card-meta-detail">
          <div className="wk-card-meta-title">
            {title}
          </div>
          <div className="wk-card-meta-description">
            {description}
          </div>
        </div>
      </div>
    )
  }
}