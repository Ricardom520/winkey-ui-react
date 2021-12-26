import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

const Test: React.FC = () => {
  const [color, setFontColor] = useState('#fff');
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SketchPicker color={color} onChange={setFontColor} />
    </>
  );
}

export default Test