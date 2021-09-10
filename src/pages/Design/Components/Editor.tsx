import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BgTable from './BgTable'
import './index.less'

const Editor: React.FC = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    console.log(document.getElementById('editorBox').clientWidth)
    setWidth(document.getElementById('editorBox').clientWidth)
    setHeight(document.getElementById('editorBox').clientHeight)
  }, []) 

  return (
    <div className='editorContainer'>
      <div id='editorBox' className='editorBox'>
        <BgTable width={width} height={height} />
      </div>
    </div>
  )
}

export default Editor