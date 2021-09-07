import React, { useEffect } from 'react';

import { Dropdown, Menu } from '@/components';
import DropdownBaseMd from '@/assets/markdowns/Dropdown/base.md';
import DropdownDividerMd from '@/assets/markdowns/Dropdown/divider.md';
import DropdownTriggerMd from '@/assets/markdowns/Dropdown/trigger.md';
import DropdownReadMd from '@/assets/markdowns/Dropdown/read.md';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import { HighlightCode } from '@/tool/func';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.wkgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<i className='iconfont wk-icon-download'/>} disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const menu1 = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.wkgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

const DropdownPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title='Dropdown下拉菜单' description='向下弹出的列表。' />

      <IntroduceBox
        title="基本"
        description="最简单的下拉菜单。"
        height={645}
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Dropdown overlay={menu}>
              <a className="wk-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <i className='iconfont wk-icon-download'/>
              </a>
            </Dropdown>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DropdownBaseMd.html }} />
        }
      />

      <IntroduceBox
        title="其他元素"
        description="分割线和不可用菜单项。"
        height={600}
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Dropdown overlay={menu1}>
              <a className="wk-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <i className='iconfont wk-icon-download'/>
              </a>
            </Dropdown>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DropdownDividerMd.html }} />
        }
      />

      <IntroduceBox
        title="触发方式"
        description="默认是移入触发菜单，可以点击触发。"
        height={630}
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="wk-dropdown-link" onClick={e => e.preventDefault()}>
                Click me <i className='iconfont wk-icon-download'/>
              </a>
            </Dropdown>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DropdownTriggerMd.html }} />
        }
      />

    <IntroduceBox
        title="触发方式"
        description="默认是移入触发菜单，可以点击触发。"
        height={630}
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="wk-dropdown-link" onClick={e => e.preventDefault()}>
                Click me <i className='iconfont wk-icon-download'/>
              </a>
            </Dropdown>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DropdownTriggerMd.html }} />
        }
      />

      <IntroduceBox
        title="Attributes"
        table={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DropdownReadMd.html }} />
        }
      />
    </div>
  )
}

export default DropdownPage;