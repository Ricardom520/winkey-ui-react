import React, { useEffect, useState } from 'react';

import { HighlightCode } from '@/tool/func';
import { Checkbox, Button } from '@/components';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import CheckboxBaseMd from '@/assets/markdowns/Checkbox/base.md';
import CheckboxDisabledMd from '@/assets/markdowns/Checkbox/disabled.md';
import CheckboxControlMd from '@/assets/markdowns/Checkbox/control.md';
import CheckboxGroupMd from '@/assets/markdowns/Checkbox/group.md';
import CheckboxDirectionMd from '@/assets/markdowns/Checkbox/direction.md';
import CheckboxReadMd from '@/assets/markdowns/Checkbox/read.md';
import "./index.less";

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const CheckboxPage: React.FC = () => {
  const [checked1, setChecked1] = useState<boolean>(false);
  const [disabled1, setDisabled1] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>(['test']);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  const onChange2 = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }

  const onChange3 = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }

  const onChange1 = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked1(e.target.checked);
  }

  const toggleChecked = () => {
    setChecked1(!checked1)
  };

  const toggleDisable = () => {
    setDisabled1(!disabled1)
  };

  useEffect(() => {
    HighlightCode()
  }, [])

  const label = `${checked1 ? 'Checked' : 'Unchecked'}-${
    disabled1 ? 'Disabled' : 'Enabled'
  }`;
  console.log(value)
  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle title="Checkbox多选框" description="多选框。" />
      <IntroduceBox
        height={330}
        title="基本用法"
        description="简单的 checkbox。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: CheckboxBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={360}
        title="不可用"
        description="checkbox 不可用。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Checkbox defaultChecked={false} disabled />
            <br />
            <Checkbox defaultChecked disabled />
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: CheckboxDisabledMd.html }} />
        }
      />

      <IntroduceBox
        height={960}
        title="受控的 Checkbox"
        description="联动 checkbox。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
                checked={checked1}
                disabled={disabled1}
                onChange={onChange1}
              >
                {label}
              </Checkbox>
            </p>
            <p>
              <Button type="primary" size="small" onClick={toggleChecked}>
                {!checked1 ? 'Check' : 'Uncheck'}
              </Button>
              <Button
                style={{ margin: '0 10px' }}
                type="primary"
                size="small"
                onClick={toggleDisable}
              >
                {!disabled1 ? 'Disable' : 'Enable'}
              </Button>
            </p>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: CheckboxControlMd.html }} />
        }
      />

      <IntroduceBox
        height={540}
        title="Checkbox 组"
        description="方便的从数组生成 Checkbox 组。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange2} />
            <br />
            <br />
            <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange2} />
            <br />
            <br />
            <Checkbox.Group
              options={optionsWithDisabled}
              disabled
              defaultValue={['Apple']}
              onChange={onChange2}
            />
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: CheckboxGroupMd.html }} />
        }
      />

      <IntroduceBox
        height={540}
        title="direction 方向"
        description="通过direction来控制水平方向还是垂直方向。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Checkbox.Group
              direction="row"
              onChange={onChange3}
              defaultValue={["A"]}
            >
              <Checkbox value="A">A</Checkbox>
              <Checkbox value="B">B</Checkbox>
              <Checkbox value="C">C</Checkbox>
              <Checkbox value="D">D</Checkbox>
              <Checkbox value="E">E</Checkbox>
              <Checkbox value="F">F</Checkbox>
            </Checkbox.Group>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: CheckboxDirectionMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: CheckboxReadMd.html }} />
        }
      />
    </div>
  )
}

export default CheckboxPage;