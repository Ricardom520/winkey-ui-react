import React, { useEffect } from 'react';

import { HighlightCode } from '@/tool/func';
import { Avatar, Image } from '@/components';
import AvatarBaseMd from '@/assets/markdowns/Avatar/base.md';
import AvatarTypeMd from '@/assets/markdowns/Avatar/type.md';
import AvatarReadMd from '@/assets/markdowns/Avatar/read.md';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import "./index.less";

const AvatarPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])
  
  return (
    <div className="avatarContainer">
      <PageTitle title="Avatar头像" description="用来代表用户或事物，支持图片、图标或字符展示。" />

      <IntroduceBox
        height={460}
        title="基本"
        description="头像有三种尺寸，两种形状可选。"
        demo={
          <div className="icon-demo">
            <div className="icon-demo-item">
              <Avatar size={64} icon="wk-icon-user" />
              <Avatar size="large" icon="wk-icon-user" />
              <Avatar icon="wk-icon-user" />
              <Avatar size="small"icon="wk-icon-user" />
            </div>
            <div className="icon-demo-item">
              <Avatar shape="square" size={64} icon="wk-icon-user" />
              <Avatar shape="square" size="large" icon="wk-icon-user" />
              <Avatar shape="square" icon="wk-icon-user" />
              <Avatar shape="square" size="small" icon="wk-icon-user" />
            </div>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: AvatarBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={450}
        title="类型"
        description="支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。"
        demo={
          <div className="icon-demo">
            <div className="icon-demo-item">
              <Avatar icon="wk-icon-user" />
              <Avatar>U</Avatar>
              <Avatar size={40}>USER</Avatar>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{background: '#fff'}} />
              <Avatar
                src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              />
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="wk-icon-user" />
            </div>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: AvatarTypeMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: AvatarReadMd.html }} />
        }
      />
    </div>
  )
}

export default AvatarPage;