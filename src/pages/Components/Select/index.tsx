import React, { useEffect, useState } from 'react';

import { HighlightCode } from '@/tool/func';
import { Select, Radio } from '@/components';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import SelectBaseMd from '@/assets/markdowns/Select/base.md';
import SelectSearchMd from '@/assets/markdowns/Select/search.md';
import SelectMultipleMd from '@/assets/markdowns/Select/multiple.md';
import SelectSizeMd from '@/assets/markdowns/Select/size.md';
import SelectReadMd from '@/assets/markdowns/Select/read.md';
import "./index.less";

const { Option } = Select;

const SelectPage: React.FC = () => {
  const [children, setChildren] = useState<any[]>([]);
  const [size, setSize] = useState<"small" | "large">("small");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  const handleChange1 = (value) => {
    console.log(`selected ${value}`);
  }

  const onChange = (value) => {
    console.log(`selected ${value}`);
  }
  
  const onBlur = () => {
    console.log('blur');
  }
  
  const onFocus = () => {
    console.log('focus');
  }
  
  const onSearch = (val) => {
    console.log('search:', val);
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  useEffect(() => {
    for (let i = 10; i < 36; i++) {
      children.push(<Option value={i.toString(36) + i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }    

    setChildren(children)
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle
        title="Select选择器"
        description="下拉选择器。"
      />

      <IntroduceBox
        height={690}
        title="基本使用"
        description="基本使用。"
        demo={
          <div style={{marginBottom: '20px'}} className="select-demo-item">
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} loading>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={1000}
        title="带搜索框"
        description="展开后可对选项进行搜索。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) => {
                console.log(option)
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectSearchMd.html }} />
        }
      />

      <IntroduceBox
        height={765}
        title="多选"
        description="多选，从已有条目中选择。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%', marginBottom: '10px' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleChange1}
            >
              {children}
            </Select>
            <br />
            <Select
              mode="multiple"
              disabled
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleChange1}
            >
              {children}
            </Select>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectMultipleMd.html }} />
        }
      />

      <IntroduceBox
        height={765}
        title="三种大小"
        description="三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group value={size} onChange={e=>setSize(e.target.value)}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Select size={size} defaultValue="a10" onChange={handleChange} style={{ width: 200, marginBottom: '10px' }}>
              {children}
            </Select>
            <br />
            <Select
              mode="multiple"
              size={size}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              {children}
            </Select>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={765}
        title="无边框"
        description="无边框样式。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} disabled bordered={false}>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectSizeMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectReadMd.html }} />
        }
      />
    </div>
  )
}

export default SelectPage;