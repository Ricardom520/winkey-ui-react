import React, { useEffect, useState } from 'react';

import { Radio, Button } from '@/components';
import { HighlightCode } from '@/tool/func';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import RadioBaseMd from '@/assets/markdowns/Radio/base.md';
import RadioDisabledMd from '@/assets/markdowns/Radio/disabled.md';
import RadioGroupMd from '@/assets/markdowns/Radio/group.md';
import RadioDirectionMd from '@/assets/markdowns/Radio/direction.md';
import RadioStyleMd from '@/assets/markdowns/Radio/style.md';
import RadioNameMd from '@/assets/markdowns/Radio/name.md';
import RadioButtonStyleMd from '@/assets/markdowns/Radio/buttonStyle.md';
import RadioSizeMd from '@/assets/markdowns/Radio/size.md';
import RadioReadMd from '@/assets/markdowns/Radio/read.md';

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const RadioPage: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [value1, setValue1] = useState<string>('Apple');
  const [value2, setValue2] = useState<string>('Apple');
  const [value3, setValue3] = useState<string>('Apple');
  const [value4, setValue4] = useState<string>('Apple');
  const [value5, setValue5] = useState<number>(1);

  const onChange1 = e => {
    console.log('radio1 checked', e.target.value);
    setValue1(e.target.value)
  };

  const onChange2 = e => {
    console.log('radio2 checked', e.target.value);
    setValue2(e.target.value)
  };

  const onChange3 = e => {
    console.log('radio3 checked', e.target.value);
    setValue3(e.target.value)
  };

  const onChange4 = e => {
    console.log('radio4 checked', e.target.value);
    setValue4(e.target.value)
  };

  const onChange5 = e => {
    console.log('radio checked', e.target.value);
    setValue5(e.target.value)
  }

  const onChange6 = e => {
    console.log(`radio checked:${e.target.value}`);
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title='Radio单选框' description='单选框。' />

      <IntroduceBox
        height={210}
        title="基本"
        description="最简单的用法。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio>Radio</Radio>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={460}
        title="不可用"
        description="Radio 不可用。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio defaultChecked={false} disabled={disabled}>
              Disabled
            </Radio>
            <Radio defaultChecked disabled={disabled}>
              Disabled
            </Radio>
            <br />
            <Button type="primary" onClick={()=>setDisabled(!disabled)} style={{ marginTop: 16 }}>
              Toggle disabled
            </Button>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioDisabledMd.html }} />
        }
      />

      <IntroduceBox
        height={1050}
        title="Radio.Group 组合 - 配置方式"
        description="过配置 options 参数来渲染单选框。也可通过 optionType 参数来设置 Radio 类型。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
            <br />
            <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
            <br />
            <Radio.Group
              options={options}
              onChange={onChange3}
              value={value3}
              optionType="button"
            />
            <br />
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChange4}
              value={value4}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioGroupMd }} />
        }
      />  

      <IntroduceBox
        height={650}
        title="Radio.Group 垂直"
        description="通过direction来垂直的 Radio.Group，配合更多输入框选项"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group onChange={onChange5} value={value5} direction="col">
              <Radio style={radioStyle} value={1}>
                Option A
              </Radio>
              <Radio style={radioStyle} value={2}>
                Option B
              </Radio>
              <Radio style={radioStyle} value={3}>
                Option C
              </Radio>
              {/* <Radio style={radioStyle} value={4}>
                More...
                {value5 === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
              </Radio> */}
            </Radio.Group>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioDirectionMd.html }} />
        }
      />  

      <IntroduceBox
        height={710}
        title="按钮样式"
        description="按钮样式的单选组合。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group onChange={onChange6} defaultValue="a">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group onChange={onChange6} defaultValue="a" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b" disabled>
                Shanghai
              </Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group disabled onChange={onChange6} defaultValue="a" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioStyleMd.html }} />
        }
      /> 

      <IntroduceBox
        height={310}
        title="单选组合 - 配合 name 使用"
        description="可以为 Radio.Group 配置 name 参数，为组合内的 input 元素赋予相同的 name 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioNameMd.html }} />
        }
      />  

      <IntroduceBox
        height={500}
        title="填底的按钮样式"
        description="实色填底的单选按钮样式。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b" disabled>
                Shanghai
              </Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioButtonStyleMd.html }} />
        }
      />  

      <IntroduceBox
        height={580}
        title="大小"
        description="大中小三种组合，可以和表单输入框进行对应配合。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioSizeMd.html }} />
        }
      />  

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: RadioReadMd.html }} />
        }
      />  
    </div>
  )
}

export default RadioPage;