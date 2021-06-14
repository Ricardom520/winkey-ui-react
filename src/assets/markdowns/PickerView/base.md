```tsx
import React from 'react';
import { PickerView } from 'winkey-ui-react';

const datas = [
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
  ],
]

const Demo: React.SFC = () => {
  return (
    <PickerView data={datas} value={["2014", "春"]} />
  )
}

export default Demo;
```