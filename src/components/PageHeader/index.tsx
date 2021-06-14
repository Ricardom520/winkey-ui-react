import React, { ReactNode } from 'react';

import Breadcrumb from '../Breadcrumb';
import "./index.less";

interface PageHeaderProps {
  className?: string;
  onBack?: () => void;
  title?: ReactNode;
  subTitle?: ReactNode;
  ghost?: boolean;
  extra?: ReactNode;
  breadcrumb?: BreadcrumbProps[];
  backIcon?: ReactNode | boolean;
}

interface BreadcrumbProps {
  path: string;
  breadcrumbName: string;
}

export default class PageHeader extends React.Component<PageHeaderProps> {
  static defaultProps = {
    ghost: true,
    showBack: true,
    backIcon: <i className="iconfont wk-icon-arrow-left"/>,
  }

  render() {
    const { className, onBack, title, subTitle, extra, ghost, children, breadcrumb, backIcon } = this.props;

    return (
      <div
        className={
          "wk-page-header" +
          (ghost ? " wk-page-header-ghost" : "") +
          " wk-page-header-compact" +
          (className ?  ` ${className}` : "")
        }
      >
        {
          breadcrumb &&
          <Breadcrumb>
            {
              breadcrumb.map((i, n) => {
                return (
                  <Breadcrumb.Item href={i.path} key={n}>
                    {i.breadcrumbName}
                  </Breadcrumb.Item>
                )
              })
            }
          </Breadcrumb>
        }
        <div className="wk-page-header-heading">
          <div className="wk-page-header-heading-left">
            {
              backIcon &&
              <div className="wk-page-header-back" onClick={onBack}>
                <div className="wk-page-header-back-button">
                  <span className="wkaction-arrow-left">
                    {
                      backIcon
                    }
                  </span>
                </div>
              </div> 
            }
            <span className="wk-page-header-heading-title">
              {title}
            </span>
            <span className="wk-page-header-heading-sub-title">
              {subTitle}
            </span>
          </div>
          {
            extra &&
            <div className="wk-page-header-heading-extra">
              {extra}
            </div>
          }
        </div>
        {
          children &&
          <div className="wk-page-header-content">
            {children}
          </div>
        }
      </div>
    )
  }
}