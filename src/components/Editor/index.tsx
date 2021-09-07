import React, { Component } from 'react';

import DropdownTitle from './DropdownTitle';
import Dropdown from '../Dropdown';

class Editor extends Component {
  render() {
    return (
      <div className='wk-editor'>
        <div className='wk-editor-menu'>
          <Dropdown overlay={<DropdownTitle/>}>
            <div className='wk-editor-menu-item'>
              <i className='iconfont wk-icon-title'/>
            </div>
          </Dropdown>
        </div>
        <div className='wk-editor-container'>
          <div className='wk-editor-text'></div>
        </div>
      </div>
    )
  }
}

export default Editor;