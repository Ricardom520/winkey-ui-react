```tsx
import React, { useState } from 'react';
import { Radio } from 'winkey-ui';

const Demo: React.SFC = () => {
  const [value1, setValue1] = useState<string>('Apple');
  const [value2, setValue2] = useState<string>('Apple');
  const [value3, setValue3] = useState<string>('Apple');
  const [value4, setValue4] = useState<string>('Apple');

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

  return (
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
  )
}

export default Demo;
```