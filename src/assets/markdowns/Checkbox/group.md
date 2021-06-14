```tsx
import React from 'react';
import { Checkbox } from 'winkey-ui-react';

const Demo:React.SFC = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  
  return (
    <div style={{marginBottom: '20px'}}>
      <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </div>
  )
}

export default Demo;
```