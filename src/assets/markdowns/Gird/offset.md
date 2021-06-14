```tsx
import React from 'react';
import { Row, Col } from 'winkey-ui';

const style = { background: '#0092ff', padding: '8px 0' };

export default const Demo: React.SFC = () => {
  return (
    <div className="gird-demo2">
      <Row>
        <Col span={8} className="demo-col demo-col-1">col-8</Col>
        <Col span={8} offset={8} className="demo-col demo-col-2">
          col-8
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6} className="demo-col demo-col-1">
          col-6 col-offset-6
        </Col>
        <Col span={6} offset={6} className="demo-col demo-col-2">
          col-6 col-offset-6
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6} className="demo-col demo-col-1">
          col-12 col-offset-6
        </Col>
      </Row>
    </div>
  )
}
```