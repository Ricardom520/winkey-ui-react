import React, { ReactNode } from 'react';

import Tag from './index';
import "./index.less";

interface CheckableTagProps {
  children?: ReactNode;
  checked?: boolean;
  onChange?: (boolean) => void;
}

export default class CheckableTag extends React.Component<CheckableTagProps> {
  render() {
    const { children, onChange, checked } = this.props;

    return (
      <Tag
        className={
          "wk-tag-checkable" +
          (checked ? "wk-tag-checkable-checked" : "")
        }
        onClick={() => onChange(!this.props.checked)}
      >
        {children}
      </Tag>
    )
  }
}