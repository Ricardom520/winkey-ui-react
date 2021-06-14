```tsx
import React from 'react';
import { Checkbox } from 'winkey-ui-react';

const Demo:React.SFC = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  
  return (
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
  )
}

export default Demo;
```