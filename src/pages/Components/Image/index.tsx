import React, { useEffect } from 'react';

import { Image } from '@/components';
import { HighlightCode } from '@/tool/func';
import ImageBaseMd from '@/assets/markdowns/Image/base.md';
import ImageReadMd from '@/assets/markdowns/Image/read.md';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import "./index.less";

const ImagePage: React.FC = () => {
  
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div className="imagePage">
      <PageTitle title="Image图片" description="可预览的图片。" />
      <IntroduceBox
        height={270}
        title="基本用户"
        description="单击图像可以放大显示。"
        demo={
          <Image
            width={200}
            style={{marginBottom: '20px'}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: ImageBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={270}
        title="自定义预览图片"
        description="可以设置不同的预览图片。"
        demo={
          <Image
            width={200}
            style={{marginBottom: '20px'}}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            preview="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: ImageBaseMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: ImageReadMd.html }} />
        }
      />
    </div>
  ) 
}

export default ImagePage;