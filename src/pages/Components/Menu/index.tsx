import React, { useEffect, useState } from 'react';

import { HighlightCode } from '@/tool/func';
import { Menu } from '@/components';
import MenuBaseMd from '@/assets/markdowns/Menu/base.md';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';

const { SubMenu } = Menu;

const MenuPage: React.FC = () => {
  const [current, setCurrent] = useState<string>("SubMenu");
  
  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const handleClick2 = e => {
    console.log('click ', e);
  };

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle
        title="Menu导航菜单"
        description="为页面和功能提供导航的菜单列表。"
      />

      <IntroduceBox
        height={840}
        title="普通提示"
        description="信息提醒反馈。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<i className="iconfont wk-icon-email"/>}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled icon={<i className="iconfont wk-icon-maillist"/>}>
                Navigation Two
              </Menu.Item>
              <SubMenu key="SubMenu" icon={<i className="iconfont wk-icon-setting"/>} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: MenuBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={840}
        title="内嵌菜单"
        description="垂直菜单，子菜单内嵌在菜单区域。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Menu
              onClick={handleClick2}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<i className="iconfont wk-icon-email"/>} title="Navigation One">
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<i className="iconfont wk-icon-maillist"/>} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<i className="iconfont wk-icon-setting"/>} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: MenuBaseMd.html }} />
        }
      />
    </div>
  )
}

export default MenuPage;