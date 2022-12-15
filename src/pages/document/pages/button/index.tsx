import React, { useEffect, useState } from 'react'

import { HighlightCode } from '~/tool/func'
import { Button } from '~/components'
import PageTitle from '../../components/pageTitle'
import IntroduceBox from '../../components/introduceBox'
import { html as ButtonBaseMd } from '~/assets/markdowns/Button/base.md'
import { html as ButtonSizeMd } from '~/assets/markdowns/Button/size.md'
import { html as ButtonDisabled } from '~/assets/markdowns/Button/disabled.md'
import { html as ButtonBlockMd } from '~/assets/markdowns/Button/block.md'
import { html as ButtonDangerMd } from '~/assets/markdowns/Button/danger.md'
import { html as ButtonLoadingMd } from '~/assets/markdowns/Button/loading.md'
import { html as ButtonReadMd } from '~/assets/markdowns/Button/read.md'
import styles from './index.module.less'
console.log(ButtonBaseMd)
const ButtonPage: React.FC = () => {
  const [size, setSize] = useState<'small' | '' | 'large'>('')
  const [loading1, setLoading1] = useState<boolean>(false)
  const [loading2, setLoading2] = useState<boolean>(false)
  const [loading3, setLoading3] = useState<boolean>(false)

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div className='component-page'>
      <PageTitle title='Button按钮' description='常用的操作按钮' />
      <IntroduceBox
        title='基础用法'
        description='按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。'
        height={410}
        demo={
          <div>
            <div className={styles['button-demo-items']}>
              <Button type='primary'>Primary Button</Button>
              <Button>Default Button</Button>
              <Button type='dashed'>Dashed Button</Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button type='text'>Text Button</Button>
              <Button type='link'>Link Button</Button>
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonBaseMd }} />}
      />

      <IntroduceBox
        title='按钮尺寸'
        description='按钮有大、中、小三种尺寸。 通过设置 size 为 large | small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。'
        height={410}
        demo={
          <div>
            <div className={styles['button-demo-items']}>
              <Button
                onClick={() => setSize('large')}
                className={size === 'large' ? 'size-active' : ''}
              >
                Large
              </Button>
              <Button onClick={() => setSize('')} className={size === '' ? 'size-active' : ''}>
                Default
              </Button>
              <Button
                onClick={() => setSize('small')}
                className={size === 'small' ? 'size-active' : ''}
              >
                Small
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button type='primary' size={size}>
                Primary
              </Button>
              <Button size={size}>Default</Button>
              <Button type='dashed' size={size}>
                Dashed
              </Button>
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonSizeMd }} />}
      />

      <IntroduceBox
        title='图标按钮'
        description='当需要在 Button 内嵌入 Icon 时，可以输入图片名称来控制图标样式'
        height={450}
        demo={
          <div>
            <div className={styles['button-demo-items']}>
              <Button icon='wk-icon-search' shape='circle' type='primary' />
              <Button shape='circle' type='primary'>
                A
              </Button>
              <Button icon='wk-icon-search' type='primary'>
                Search
              </Button>
              <Button icon='wk-icon-search' shape='circle' />
              <Button icon='wk-icon-search'>Search</Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button icon='wk-icon-search' shape='circle' />
              <Button icon='wk-icon-search'>Search</Button>
              <Button icon='wk-icon-search' shape='circle' type='dashed' />
              <Button icon='wk-icon-search' type='dashed'>
                Search
              </Button>
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonSizeMd }} />}
      />

      <IntroduceBox
        title='加载中状态'
        description='添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。'
        height={450}
        demo={
          <div>
            <div className={styles['button-demo-items']}>
              <Button type='primary' loading>
                Loading
              </Button>
              <Button type='primary' loading size='small'>
                Loading
              </Button>
              <Button type='primary' loading />
            </div>
            <div className={styles['button-demo-items']}>
              <Button type='primary' loading={loading1} onClick={() => setLoading1(true)}>
                Click me!
              </Button>
              <Button
                type='primary'
                loading={loading2}
                onClick={() => setLoading2(true)}
                icon='wk-icon-switch'
              >
                Click me!
              </Button>
              <Button
                type='primary'
                loading={loading3}
                onClick={() => setLoading3(true)}
                icon='wk-icon-switch'
              />
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonLoadingMd.html }} />}
      />

      <IntroduceBox
        title='不可用状态'
        description='添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。'
        height={800}
        demo={
          <div>
            <div className={styles['button-demo-items']}>
              <Button type='primary'>Primary</Button>
              <Button type='primary' disabled>
                Primary(disabled)
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button>Default</Button>
              <Button disabled>Default(disabled)</Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button type='dashed'>Dashed</Button>
              <Button type='dashed' disabled>
                Dashed(disabled)
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button type='text'>Text</Button>
              <Button type='text' disabled>
                Text(disabled)
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button type='link'>Link</Button>
              <Button type='link' disabled>
                Link(disabled)
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button danger>Danger Default</Button>
              <Button danger disabled>
                Danger Default(disabled)
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button danger type='text'>
                Danger Text
              </Button>
              <Button danger disabled type='text'>
                Danger Text(disabled)
              </Button>
            </div>
            <div className={styles['button-demo-items']}>
              <Button danger type='link'>
                Danger Link
              </Button>
              <Button danger disabled type='link'>
                Danger Link(disabled)
              </Button>
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonDisabled }} />}
      />

      <IntroduceBox
        title='Block 按钮'
        description='block 属性将使按钮适合其父宽度。'
        height={350}
        demo={
          <div>
            <div className={styles['button-demo-items-block']}>
              <Button type='primary' block>
                Primary
              </Button>
              <Button block>Default</Button>
              <Button block type='dashed'>
                Dashed
              </Button>
              <Button block type='link'>
                Link
              </Button>
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonBlockMd }} />}
      />

      <IntroduceBox
        title='危险按钮'
        description='红色-->警告！警告！警告。'
        height={350}
        demo={
          <div>
            <div className={styles['button-demo-items']}>
              <Button type='primary' danger>
                Primary
              </Button>
              <Button danger>Default</Button>
              <Button danger type='dashed'>
                Dashed
              </Button>
              <Button danger type='link'>
                Text
              </Button>
              <Button danger type='link'>
                Link
              </Button>
            </div>
          </div>
        }
        markdown={<div dangerouslySetInnerHTML={{ __html: ButtonDangerMd }} />}
      />

      <IntroduceBox
        title='Attributes'
        table={<div dangerouslySetInnerHTML={{ __html: ButtonReadMd }} />}
      />
    </div>
  )
}

export default ButtonPage
