import React, { useEffect } from 'react'
import moment from 'moment'

import { HighlightCode } from '@/tool/func'
import { List, Space, TimePicker } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import TimePickerBaseMd from '@/assets/markdowns/TimePicker/base.md'
import TimePickerValueMd from '@/assets/markdowns/TimePicker/value.md'
import TimePickerSizeMd from '@/assets/markdowns/TimePicker/size.md'
import TimePickerFormatMd from '@/assets/markdowns/TimePicker/format.md'
import TimePickerHourMd from '@/assets/markdowns/TimePicker/hour.md'
import TimePickerReadMd from '@/assets/markdowns/TimePicker/read.md'

const TimePickerPage: React.FC = () => {
  const onChange = (time, timeString) => {
    console.log(time, timeString)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle
        title='TimePicker时间选择框'
        description='当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。'
      />

      <IntroduceBox
        height={220}
        title='基本'
        description='点击 TimePicker，然后可以在浮层中选择或者输入某一时间。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker onChange={onChange} defaultValue={moment('02:00:00', 'HH:mm:ss')} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerBaseMd.html }}
          />
        }
      />

      <IntroduceBox
        height={330}
        title='受控组件'
        description='value 和 onChange 需要配合使用。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker onChange={onChange} value={moment('02:00:00', 'HH:mm:ss')} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerValueMd.html }}
          />
        }
      />

      <IntroduceBox
        height={330}
        title='三种大小'
        description='三种大小的输入框，大的用在表单中，中的为默认。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Space>
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='large' />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size='small' />
            </Space>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerSizeMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='禁用'
        description='禁用时间选择。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerSizeMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='选择时分'
        description='TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker defaultValue={moment('12:08', 'HH:mm')} format='HH:mm' />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerFormatMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='12 小时制'
        description='12 小时制的时间选择器，默认的 format 为 h:mm:ss'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker defaultValue={moment('12:08', 'hh:mm')} format='hh:mm' />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerHourMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='无边框'
        description='无边框样式。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker bordered={false} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerHourMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='列选择模式'
        description='不用通过底部确定来选择时间'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TimePicker
              onChange={onChange}
              defaultValue={moment('02:00:00', 'HH:mm:ss')}
              showFooter={false}
              isColChoose
            />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerHourMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='移动端模式'
        description='从底部弹出picker。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <List>
              <List.Item
                extra={
                  <TimePicker isMobile format='HH:mm' defaultValue={moment('12:08', 'HH:mm')} />
                }
              >
                Time
              </List.Item>
            </List>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerHourMd.html }}
          />
        }
      />

      <IntroduceBox
        height={220}
        title='API'
        table={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TimePickerReadMd.html }}
          />
        }
      />
    </div>
  )
}

export default TimePickerPage
