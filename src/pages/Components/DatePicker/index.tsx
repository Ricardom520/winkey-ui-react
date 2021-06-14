import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

import { Space, DatePicker, Radio, List } from '@/components';
import { HighlightCode } from '@/tool/func';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import DatePickerBaseMd from '@/assets/markdowns/Datepicker/base.md'; 
import DatePickerDisabledMd from '@/assets/markdowns/Datepicker/disabled.md';
import DatePickerSizeMd from '@/assets/markdowns/Datepicker/size.md';
import DatePickerBorderMd from '@/assets/markdowns/Datepicker/border.md';
import DatePickerDisabledDateMd from '@/assets/markdowns/Datepicker/disabledDate.md';
import DatePickerMobileMd from '@/assets/markdowns/Datepicker/mobile.md';
import DatePickerReadMd from '@/assets/markdowns/Datepicker/read.md';

const DatePickerPage: React.FC = () => {
  const [size, setSize] = useState<"default" | "small" | "large">('small');

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  // 限制日期
  const disabledDate = (current: Moment) => {
    return current && current < moment().startOf('day');
  };

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title="DatePicker日期选择框" description="输入或选择日期的控件。" />

      <IntroduceBox
        height={330}
        title="基本"
        description="最简单的用法，在浮层中可以选择或者输入日期。"
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
              <DatePicker onChange={onChange} picker="month" />
              <DatePicker onChange={onChange} picker="year" />
            </Space>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={310}
        title="禁用"
        description="选择框的不可用状态。"
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Space direction="vertical">
              <DatePicker defaultValue={moment('2015-06-06', 'YYYY-MM-DD')} disabled />
              <DatePicker picker="month" defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
            </Space>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerDisabledMd.html }} />
        }
      />

      <IntroduceBox
        height={310}
        title="三种大小"
        description="三种大小的输入框，若不设置，则为 default。"
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Space direction="vertical" size={12}>
              <Radio.Group value={size} onChange={e=>setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <DatePicker size={size} />
              <DatePicker size={size} picker="month" />
            </Space>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={330}
        title="选择范围"
        description="这里举例如何用 onCalendarChange 和 disabledDate 来限制动态的日期区间选择。"
        demo={
          <div style={{paddingBottom: '20px'}}>
            <DatePicker disabledDate={disabledDate} />
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerDisabledDateMd.html }} />
        }
      />

      <IntroduceBox
        height={310}
        title="无边框"
        description="无边框样式。"
        demo={
          <div style={{paddingBottom: '20px'}}>
            <Space direction="vertical" size={12}>
              <DatePicker bordered={false} />
              <DatePicker picker="month" bordered={false} />
              <DatePicker picker="year" bordered={false} />
            </Space>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerBorderMd.html }} />
        }
      />

      <IntroduceBox
        height={410}
        title="移动端模式"
        description="从底部弹出picker。"
        demo={
          <div style={{paddingBottom: '20px'}}>
            <List>
              <List.Item
                extra={
                  <DatePicker isMobile defaultValue={moment('2015-06-06', 'YYYY-MM-DD')}/>
                }
              >
                开始时间
              </List.Item>
            </List>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerMobileMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: DatePickerReadMd.html }} />
        }
      />
    </div>
  )
}

export default DatePickerPage;