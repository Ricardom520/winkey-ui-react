import React, { useEffect } from 'react';

import { Picker, List } from '@/components';
import { HighlightCode } from '@/tool/func';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import PickerBaseMd from '@/assets/markdowns/Picker/base.md';
import PickerReadMd from '@/assets/markdowns/Picker/read.md';

const datas = [
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
]

const datas2 = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ]
]

const province = [
  {
    label: '北京',
    value: '01',
    children: [
      {
        label: '东城区',
        value: '01-1',
      },
      {
        label: '西城区',
        value: '01-2',
      },
      {
        label: '崇文区',
        value: '01-3',
      },
      {
        label: '宣武区',
        value: '01-4',
      },
    ],
  },
  {
    label: '浙江',
    value: '02',
    children: [
      {
        label: '杭州',
        value: '02-1',
        children: [
          {
            label: '西湖区',
            value: '02-1-1',
          },
          {
            label: '上城区',
            value: '02-1-2',
          },
          {
            label: '江干区',
            value: '02-1-3',
          },
          {
            label: '下城区',
            value: '02-1-4',
          },
        ],
      },
      {
        label: '宁波',
        value: '02-2',
        children: [
          {
            label: 'xx区',
            value: '02-2-1',
          },
          {
            label: 'yy区',
            value: '02-2-2',
          },
        ],
      },
      {
        label: '温州',
        value: '02-3',
      },
      {
        label: '嘉兴',
        value: '02-4',
      },
      {
        label: '湖州',
        value: '02-5',
      },
      {
        label: '绍兴',
        value: '02-6',
      },
    ],
  },
];

const PickerPage: React.FC = () => {

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title='Picker 选择器' description='在一组预设数据中进行选择' />

      <IntroduceBox
        height={2745}
        title="基本"
        description="最简单的用法。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <List bordered>
              <List.Item
                extra={<Picker data={datas} />}
              >
                Single
              </List.Item>
              <List.Item
                extra={<Picker data={datas2} />}
              >
                Multiple
              </List.Item>
              <List.Item
                extra={<Picker data={province} onChange={val=>console.log(val)} value={["01", "01-4"]} />}
              >
                Children
              </List.Item>
            </List>   
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: PickerBaseMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: PickerReadMd.html }} />
        }
      />
    </div>
  )
}

export default PickerPage;