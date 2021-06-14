```tsx
import React from 'react';
import { Checkbox, Button } from 'winkey-ui-react';

const Demo:React.SFC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const onChange = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  }

  const toggleChecked = () => {
    setChecked(!checked)
  };

  const toggleDisable = () => {
    setDisabled(!disabled)
  };
  
  return (
    <div style={{marginBottom: '20px'}}>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange1}
        >
          {label}
        </Checkbox>
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{ margin: '0 10px' }}
          type="primary"
          size="small"
          onClick={toggleDisable}
        >
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </div>
  )
}

export default Demo;
```